document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 0. ЛОКАЛИЗАЦИЯ (RU/EN)
  // ==========================================
  let currentLang = localStorage.getItem('site_lang') || 'ru';

  function translatePage(lang) {
    // 1. Переводим все статические элементы
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // 2. Синхронизируем состояние чекбокса (ползунка)
    const langToggle = document.getElementById('langToggle');
    if (langToggle) {
      langToggle.checked = (lang === 'en');
    }

    // 3. Меняем атрибут lang у html
    document.documentElement.lang = lang;

    // 4. Перерисовываем динамические блоки
    if (document.getElementById('tournamentList')) renderTournaments();
    if (document.getElementById('priceTabsNav')) renderPrices();
    if (document.getElementById('portfolioGrid')) renderPortfolio();
    if (document.getElementById('teamGrid')) renderTeam();
    if (document.getElementById('educationList')) renderEducation();
    if (document.getElementById('bookingForm')) initBookingForm();
    if (document.getElementById('map') && typeof maplibregl !== 'undefined') initMap();
  }

  // Навешиваем событие на чекбокс
  const langToggle = document.getElementById('langToggle');
  if (langToggle) {
    langToggle.addEventListener('change', function() {
      const newLang = this.checked ? 'en' : 'ru';
      if (newLang !== currentLang) {
        currentLang = newLang;
        localStorage.setItem('site_lang', currentLang);
        translatePage(currentLang);
      }
    });
  }

  // ==========================================
  // 1. ПОДСТАНОВКА ДАННЫХ ИЗ КОНФИГА (data-cfg)
  // ==========================================
  function applyConfigData() {
    document.querySelectorAll('[data-cfg-text]').forEach(el => {
      const path = el.getAttribute('data-cfg-text').split('.');
      let value = SITE_CONFIG;
      path.forEach(key => value = value ? value[key] : null);
      if (value) {
        // Если есть перевод для поля
        if (currentLang === 'en' && SITE_CONFIG[path[0]] && SITE_CONFIG[path[0]][path[1] + '_en']) {
           el.textContent = SITE_CONFIG[path[0]][path[1] + '_en'];
        } else {
           el.textContent = value;
        }
      }
    });

    document.querySelectorAll('[data-cfg-href]').forEach(el => {
      const path = el.getAttribute('data-cfg-href').split('.');
      let value = SITE_CONFIG;
      path.forEach(key => value = value ? value[key] : null);
      if (value) el.href = value;
    });

    document.querySelectorAll('[data-cfg-src]').forEach(el => {
      const path = el.getAttribute('data-cfg-src').split('.');
      let value = SITE_CONFIG;
      path.forEach(key => value = value ? value[key] : null);
      if (value) el.src = value;
    });
  }
  applyConfigData();

  // ==========================================
  // 2. РЕНДЕР ПРАЙС-ЛИСТА (services.html)
  // ==========================================
  function renderPrices() {
    const tabsNav = document.getElementById('priceTabsNav');
    const tabsContent = document.getElementById('priceTabsContent');
    const modifiersContainer = document.getElementById('priceModifiers');
    if (!tabsNav || !tabsContent || !modifiersContainer) return;

    tabsNav.innerHTML = '';
    tabsContent.innerHTML = '';

    SITE_CONFIG.priceCategories.forEach((cat, index) => {
      const title = currentLang === 'en' ? cat.title_en : cat.title;
      
      const li = document.createElement('li');
      li.className = 'nav-item';
      li.innerHTML = `<button class="nav-link ${index === 0 ? 'active' : ''}" id="tab-${cat.id}" data-bs-toggle="tab" data-bs-target="#content-${cat.id}" type="button" role="tab">${title}</button>`;
      tabsNav.appendChild(li);

      const div = document.createElement('div');
      div.className = `tab-pane fade ${index === 0 ? 'show active' : ''}`;
      div.id = `content-${cat.id}`;
      div.setAttribute('role', 'tabpanel');
      
      let servicesHtml = '';
      cat.services.forEach(srv => {
        const srvName = currentLang === 'en' ? srv.name_en : srv.name;
        servicesHtml += `
          <div class="price-card">
            <div class="price-info"><h5>${srvName}</h5></div>
            <div class="price-val text-end">
              <span class="price-amount">${srv.price} ₽</span>
              <span class="price-time">${srv.time} мин</span>
            </div>
          </div>
        `;
      });
      div.innerHTML = servicesHtml;
      tabsContent.appendChild(div);
    });

    modifiersContainer.innerHTML = '';
    SITE_CONFIG.modifiers.forEach(mod => {
      const modName = currentLang === 'en' ? mod.name_en : mod.name;
      modifiersContainer.innerHTML += `
        <div class="modifier-card">
          <h6>${modName}</h6>
          <span class="price">+${mod.price} ₽</span>
          ${mod.time !== 0 ? `<div class="text-muted mt-1" style="font-size:0.8rem;">${mod.time > 0 ? '+' : ''}${mod.time} мин</div>` : ''}
        </div>
      `;
    });
  }

  // ==========================================
  // 3. РЕНДЕР ТУРНИРОВ (index.html и tournaments.html)
  // ==========================================
  function renderTournaments() {
    const tournamentList = document.getElementById('tournamentList');
    if (!tournamentList) return;

    tournamentList.innerHTML = '';
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';
    const tournamentsToShow = isHomePage ? SITE_CONFIG.tournaments.slice(0, 3) : SITE_CONFIG.tournaments;

    tournamentsToShow.forEach(t => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4';
      
      const title = currentLang === 'en' ? t.title_en : t.title;
      const city = currentLang === 'en' ? t.city_en : t.city;
      const venue = currentLang === 'en' ? t.venue_en : t.venue;
      const timeStr = t.time ? ` в ${t.time} (МСК)` : '';
      
      const locHtml = t.mapLink 
        ? `<a href="${t.mapLink}" target="_blank" rel="noopener" class="map-link" title="Открыть на карте">${city}, ${venue}</a>`
        : `${city}, ${venue}`;
      
      const imageHtml = t.image ? `<img src="${t.image}" alt="${title}" class="tournament-image" loading="lazy">` : '';

      col.innerHTML = `
        <div class="tournament-card">
          ${imageHtml}
          <div class="tournament-content">
            <div class="t-date"><i class="bi bi-calendar-event me-1"></i>${t.date}${timeStr}</div>
            <h4 class="t-title">${title}</h4>
            <div class="t-loc"><i class="bi bi-geo-alt"></i> ${locHtml}</div>
            <button class="btn btn-outline-dark-soft w-100 btn-book-tour mt-auto" data-id="${t.id}" data-date="${t.date}">
              ${currentLang === 'en' ? 'Book tournament' : 'Записаться на турнир'}
            </button>
          </div>
        </div>
      `;
      tournamentList.appendChild(col);
    });

    document.querySelectorAll('.btn-book-tour').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = `booking.html?tournament=${btn.dataset.id}&date=${btn.dataset.date}`;
      });
    });
  }

  // ==========================================
  // 4. РЕНДЕР ПОРТФОЛИО (portfolio.html)
  // ==========================================
  function renderPortfolio() {
    const portfolioGrid = document.getElementById('portfolioGrid');
    const filterBtns = document.querySelectorAll('.filter-btn');
    if (!portfolioGrid) return;

    portfolioGrid.innerHTML = '';

    SITE_CONFIG.portfolio.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col-sm-6 col-lg-4 portfolio-item';
      col.dataset.age = item.age;
      col.dataset.program = item.program;
      col.dataset.style = item.style;
      
      col.innerHTML = `
        <div class="portfolio-card" data-title="${item.title}" data-img-front="${item.image}" data-img-side="${item.imageSide || item.image}" data-img-back="${item.imageBack || item.image}" data-bs-toggle="modal" data-bs-target="#portfolioModal">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          ${item.badge ? `<span class="portfolio-badge">${currentLang === 'en' ? 'Floor photo' : item.badge}</span>` : ''}
        </div>
      `;
      portfolioGrid.appendChild(col);
    });

    document.querySelectorAll('.portfolio-card').forEach(card => {
      card.addEventListener('click', () => {
        document.getElementById('portfolioModalTitle').textContent = card.dataset.title;
        document.getElementById('modalImgFront').src = card.dataset.imgFront;
        document.getElementById('modalImgSide').src = card.dataset.imgSide;
        document.getElementById('modalImgBack').src = card.dataset.imgBack;
      });
    });

    const activeFilters = { age: 'all', program: 'all', style: 'all' };
    filterBtns.forEach(btn => {
      // Убираем старые слушатели, клонируя элемент (иначе они дублируются при перерисовке)
      const newBtn = btn.cloneNode(true);
      btn.parentNode.replaceChild(newBtn, btn);
      
      newBtn.addEventListener('click', (e) => {
        const group = e.target.closest('.filter-group').dataset.filterGroup;
        const val = e.target.dataset.filter;
        
        e.target.closest('.filter-buttons').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
        e.target.classList.add('is-active');
        activeFilters[group] = val;
        
        document.querySelectorAll('.portfolio-item').forEach(item => {
          const matchAge = activeFilters.age === 'all' || item.dataset.age === activeFilters.age;
          const matchProg = activeFilters.program === 'all' || item.dataset.program === activeFilters.program;
          const matchStyle = activeFilters.style === 'all' || item.dataset.style === activeFilters.style;
          
          if (matchAge && matchProg && matchStyle) {
            item.style.display = 'block';
            setTimeout(() => item.style.opacity = 1, 50);
          } else {
            item.style.opacity = 0;
            setTimeout(() => item.style.display = 'none', 300);
          }
        });
      });
    });
  }

  // ==========================================
  // 5. РЕНДЕР ОБУЧЕНИЯ (services.html)
  // ==========================================
  function renderEducation() {
    const educationList = document.getElementById('educationList');
    const educationEmpty = document.getElementById('educationEmpty');
    if (!educationList) return;

    educationList.innerHTML = '';

    if (SITE_CONFIG.education && SITE_CONFIG.education.length > 0) {
      SITE_CONFIG.education.forEach(edu => {
        const col = document.createElement('div');
        col.className = 'col-md-6';
        
        const tag = currentLang === 'en' ? edu.tag_en : edu.tag;
        const title = currentLang === 'en' ? edu.title_en : edu.title;
        const desc = currentLang === 'en' ? edu.description_en : edu.description;
        const time = currentLang === 'en' ? edu.time_en : edu.time;
        const speaker = currentLang === 'en' ? edu.speaker_en : edu.speaker;
        const contactText = currentLang === 'en' ? edu.contactText_en : edu.contactText;

        col.innerHTML = `
          <article class="edu-card card-soft h-100 p-3 d-flex flex-column">
            <img src="${edu.image}" class="img-fluid rounded mb-3" alt="${title}" loading="lazy">
            <span class="edu-tag">${tag}</span>
            <h3 class="edu-title">${title}</h3>
            <p class="text-muted mb-4 flex-grow-1">${desc}</p>
            <div class="edu-meta mb-4">
              <div class="edu-meta-item"><i class="bi bi-clock text-gold me-2"></i>${time}</div>
              <div class="edu-meta-item"><i class="bi bi-person text-gold me-2"></i>${speaker}</div>
            </div>
            <a href="${edu.contactLink}" target="_blank" rel="noopener" class="btn btn-outline-dark-soft mt-auto">
              <i class="bi bi-chat-dots me-2"></i>${contactText}
            </a>
          </article>
        `;
        educationList.appendChild(col);
      });
      if (educationEmpty) educationEmpty.classList.add('d-none');
    } else {
      if (educationEmpty) educationEmpty.classList.remove('d-none');
    }
  }

  // ==========================================
  // 5.5. РЕНДЕР КОМАНДЫ (about.html)
  // ==========================================
  function renderTeam() {
    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid) return;
    
    teamGrid.innerHTML = '';
    SITE_CONFIG.team.forEach(member => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4';
      
      const name = currentLang === 'en' ? member.name_en : member.name;
      const role = currentLang === 'en' ? member.role_en : member.role;
      const exp = currentLang === 'en' ? member.experience_en : member.experience;
      const desc = currentLang === 'en' ? member.desc_en : member.desc;

      col.innerHTML = `
        <div class="team-card card-soft h-100 p-3 text-center">
          <img src="${member.image}" class="img-fluid rounded mb-3" style="height: 300px; object-fit: cover; width: 100%;" alt="${name}">
          <h4 class="mb-1">${name}</h4>
          <p class="text-gold fw-bold mb-2" style="font-size: 0.9rem;">${role}</p>
          <span class="badge bg-light text-dark border mb-3">${exp}</span>
          <p class="text-muted" style="font-size: 0.9rem;">${desc}</p>
        </div>
      `;
      teamGrid.appendChild(col);
    });
  }

  // ==========================================
  // 6. КАРТА (about.html, MapLibre)
  // ==========================================
  function initMap() {
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;
    
    // Уничтожаем старую карту, если она была
    if (window.mapInstance) {
      window.mapInstance.remove();
    }

    window.mapInstance = new maplibregl.Map({
      container: 'map',
      style: 'https://tiles.openfreemap.org/styles/positron',
      center: [105.3188, 61.5240],
      zoom: 2
    });

    SITE_CONFIG.geography.forEach(city => {
      const popup = new maplibregl.Popup().setHTML(`<b>${currentLang === 'en' ? city.name_en : city.name}</b><br>${currentLang === 'en' ? city.info_en : city.info}`);
      new maplibregl.Marker({ color: '#C5A059' })
        .setLngLat([city.lng, city.lat])
        .setPopup(popup)
        .addTo(window.mapInstance);
    });
  }

  // ==========================================
  // 7. ФОРМА И КАЛЬКУЛЯТОР (booking.html)
  // ==========================================
  let calculateFunction = null;

  function initBookingForm() {
    const form = document.getElementById('bookingForm');
    if (!form) return;

    const selects = {
      tournament: document.getElementById('tournamentSelect'),
      category: document.getElementById('dancerCategory'),
      grade: document.getElementById('gradeSelect'),
      service: document.getElementById('serviceSelect'),
      location: document.getElementById('locationSelect')
    };

    const calcUI = {
      service: document.getElementById('calcService'),
      base: document.getElementById('calcBase'),
      options: document.getElementById('calcOptions'),
      optionsNames: document.getElementById('calcOptionsNames'),
      location: document.getElementById('calcLocation'),
      total: document.getElementById('calcTotal'),
      time: document.getElementById('calcTotalTime')
    };

    const optionsContainer = document.getElementById('optionsList');

    // Запоминаем текущие значения, чтобы не сбросить при смене языка
    const prevTour = selects.tournament.value;
    const prevCat = selects.category.value;
    const prevSrv = selects.service.value;
    const prevGrade = selects.grade.value;
    const prevLoc = selects.location.value;

    // Заполняем селекты
    if (selects.tournament) {
      selects.tournament.innerHTML = `<option value="">${currentLang === 'en' ? 'No tournament (free date)' : 'Без турнира (свободная дата)'}</option>` + 
        SITE_CONFIG.tournaments.map(t => `<option value="${t.id}" data-date="${t.date}">${t.date} - ${currentLang === 'en' ? t.title_en : t.title}</option>`).join('');
      if (prevTour) selects.tournament.value = prevTour;
    }
    
    if (selects.category) {
      selects.category.innerHTML = SITE_CONFIG.priceCategories.map(c => `<option value="${c.id}">${currentLang === 'en' ? c.title_en : c.title}</option>`).join('');
      if (prevCat) selects.category.value = prevCat;
    }
    if (selects.grade) {
      selects.grade.innerHTML = SITE_CONFIG.grades.map(g => `<option value="${g.id}">${currentLang === 'en' ? g.name_en : g.name}</option>`).join('');
      if (prevGrade) selects.grade.value = prevGrade;
    }
    if (selects.location) {
      selects.location.innerHTML = SITE_CONFIG.locations.map(l => `<option value="${l.id}">${currentLang === 'en' ? l.name_en : l.name}</option>`).join('');
      if (prevLoc) selects.location.value = prevLoc;
    }

    if (optionsContainer) {
      const checkedValues = Array.from(optionsContainer.querySelectorAll('input:checked')).map(cb => cb.value);
      optionsContainer.innerHTML = '';
      SITE_CONFIG.modifiers.forEach(mod => {
        const isChecked = checkedValues.includes(mod.id) ? 'checked' : '';
        optionsContainer.innerHTML += `
          <label class="option-checkbox">
            <input type="checkbox" value="${mod.id}" data-price="${mod.price}" data-time="${mod.time}" ${isChecked}>
            <span>${currentLang === 'en' ? mod.name_en : mod.name}</span>
            <span class="option-price">+${mod.price}₽</span>
          </label>
        `;
      });
    }

    calculateFunction = function() {
      if (!selects.service) return;
      const srvOption = selects.service.options[selects.service.selectedIndex];
      
      if (!srvOption || !srvOption.dataset.price) {
        if (calcUI.service) calcUI.service.textContent = '—';
        if (calcUI.base) calcUI.base.textContent = '—';
        if (calcUI.options) calcUI.options.textContent = '—';
        if (calcUI.optionsNames) calcUI.optionsNames.textContent = '';
        if (calcUI.location) calcUI.location.textContent = '—';
        if (calcUI.total) calcUI.total.textContent = '0 ₽';
        if (calcUI.time) calcUI.time.textContent = '—';
        return;
      }
      
      const basePrice = parseInt(srvOption.dataset.price) || 0;
      const baseTime = parseInt(srvOption.dataset.time) || 0;
      if (calcUI.service) calcUI.service.textContent = srvOption.value;
      if (calcUI.base) calcUI.base.textContent = basePrice + ' ₽';

      const grade = SITE_CONFIG.grades.find(g => g.id === selects.grade.value);
      let multiplier = grade ? grade.multiplier : 1;

      let optionsPrice = 0;
      let optionsTime = 0;
      let selectedOptions = [];
      
      document.querySelectorAll('#optionsList input:checked').forEach(cb => {
        optionsPrice += parseInt(cb.dataset.price) || 0;
        optionsTime += parseInt(cb.dataset.time) || 0;
        selectedOptions.push(cb.nextElementSibling.textContent);
      });

      if (calcUI.options) calcUI.options.textContent = optionsPrice > 0 ? `+${optionsPrice} ₽` : '—';
      if (calcUI.optionsNames) calcUI.optionsNames.textContent = selectedOptions.join(', ');

      const loc = SITE_CONFIG.locations.find(l => l.id === selects.location.value);
      const locPrice = loc ? loc.price : 0;
      const locName = loc ? (currentLang === 'en' ? loc.name_en : loc.name) : '';
      if (calcUI.location) calcUI.location.textContent = locPrice > 0 ? `${locName} (+${locPrice} ₽)` : locName;

      const totalPrice = Math.round((basePrice * multiplier) + optionsPrice + locPrice);
      let totalTime = baseTime + optionsTime;
      if (totalTime < 15) totalTime = 15;

      if (calcUI.total) calcUI.total.textContent = totalPrice.toLocaleString('ru-RU') + ' ₽';
      if (calcUI.time) calcUI.time.textContent = totalTime + ' мин';
    };

    function updateServices() {
      if (!selects.category || !selects.service) return;
      const cat = SITE_CONFIG.priceCategories.find(c => c.id === selects.category.value);
      if (!cat) return;
      
      const prevSrvName = selects.service.value;
      selects.service.innerHTML = cat.services.map(s => 
        `<option value="${currentLang === 'en' ? s.name_en : s.name}" data-price="${s.price}" data-time="${s.time}">${currentLang === 'en' ? s.name_en : s.name} — ${s.price}₽ (${s.time} мин)</option>`
      ).join('');
      
      if (prevSrvName && Array.from(selects.service.options).some(o => o.value === prevSrvName)) {
        selects.service.value = prevSrvName;
      }
      calculateFunction();
    }

    // Привязываем обработчики (сначала снимаем старые, чтобы не дублировались)
    const newCategory = selects.category.cloneNode(true);
    selects.category.parentNode.replaceChild(newCategory, selects.category);
    selects.category = newCategory;
    selects.category.addEventListener('change', updateServices);

    const newService = selects.service.cloneNode(true);
    selects.service.parentNode.replaceChild(newService, selects.service);
    selects.service = newService;
    selects.service.addEventListener('change', calculateFunction);

    const newGrade = selects.grade.cloneNode(true);
    selects.grade.parentNode.replaceChild(newGrade, selects.grade);
    selects.grade = newGrade;
    selects.grade.addEventListener('change', calculateFunction);

    const newLoc = selects.location.cloneNode(true);
    selects.location.parentNode.replaceChild(newLoc, selects.location);
    selects.location = newLoc;
    selects.location.addEventListener('change', calculateFunction);

    const newTour = selects.tournament.cloneNode(true);
    selects.tournament.parentNode.replaceChild(newTour, selects.tournament);
    selects.tournament = newTour;
    
    selects.tournament.addEventListener('change', function() {
      const selectedOption = this.options[this.selectedIndex];
      const date = selectedOption.getAttribute('data-date');
      const tourId = this.value;
      
      if (date) {
        const dateInput = document.getElementById('bookingDate');
        if (dateInput) {
          dateInput.value = date;
          dateInput.style.backgroundColor = '#d1e7dd';
          setTimeout(() => dateInput.style.backgroundColor = '', 1000);
        }
      }
      if (selects.location) {
        selects.location.value = (tourId !== "") ? "venue" : "hotel";
        calculateFunction();
      }
    });

    document.querySelectorAll('#optionsList input').forEach(cb => {
      cb.addEventListener('change', calculateFunction);
    });

    updateServices();

    // Обработка URL параметров (переход со страницы турниров)
    const urlParams = new URLSearchParams(window.location.search);
    const tourParam = urlParams.get('tournament');
    const dateParam = urlParams.get('date');

    if (tourParam && selects.tournament) {
      selects.tournament.value = tourParam;
      selects.tournament.dispatchEvent(new Event('change'));
    }
    if (dateParam) {
      const dateInput = document.getElementById('bookingDate');
      if (dateInput) dateInput.value = dateParam;
    }

    // Отправка формы
    const modalElement = document.getElementById('successModal');
    const modal = modalElement ? new bootstrap.Modal(modalElement) : null;

    const newForm = form.cloneNode(true);
    form.parentNode.replaceChild(newForm, form);

    newForm.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!newForm.checkValidity()) {
        newForm.classList.add('was-validated');
        return;
      }
      if (!modal) return;

      const name = document.getElementById('clientName').value;
      const phone = document.getElementById('clientPhone').value;
      const date = document.getElementById('bookingDate').value;
      const time = document.getElementById('readyTime').value;
      const tourId = selects.tournament.value;
      const tourText = tourId ? SITE_CONFIG.tournaments.find(t => t.id === tourId).title : (currentLang === 'en' ? 'Free date' : 'Свободная дата');
      
      let text = currentLang === 'en' ? `*New request from site*\n\n` : `*Новая заявка с сайта*\n\n`;
      text += currentLang === 'en' ? `*Name:* ${name}\n` : `*Имя:* ${name}\n`;
      text += currentLang === 'en' ? `*Phone:* ${phone}\n` : `*Телефон:* ${phone}\n`;
      text += currentLang === 'en' ? `*Date:* ${date} at ${time} (MSK)\n` : `*Дата:* ${date} к ${time} (МСК)\n`;
      text += currentLang === 'en' ? `*Tournament:* ${tourText}\n` : `*Турнир:* ${tourText}\n`;
      text += currentLang === 'en' ? `*Service:* ${calcUI.service.textContent}\n` : `*Услуга:* ${calcUI.service.textContent}\n`;
      text += currentLang === 'en' ? `*Options:* ${calcUI.optionsNames.textContent || 'none'}\n` : `*Опции:* ${calcUI.optionsNames.textContent || 'нет'}\n`;
      text += currentLang === 'en' ? `*Location:* ${calcUI.location.textContent}\n` : `*Место:* ${calcUI.location.textContent}\n`;
      text += currentLang === 'en' ? `*Total:* ${calcUI.total.textContent} (${calcUI.time.textContent})\n` : `*Итого:* ${calcUI.total.textContent} (${calcUI.time.textContent})\n`;

      const summaryEl = document.getElementById('modalSummary');
      if (summaryEl) {
        summaryEl.textContent = text.replace(/\*/g, ''); 
        summaryEl.dataset.rawText = text; 
      }
      
      const waLink = `https://wa.me/${SITE_CONFIG.links.whatsapp.split('/').pop()}?text=${encodeURIComponent(text)}`;
      const tgLink = `https://t.me/${SITE_CONFIG.links.telegram.split('/').pop()}`;

      document.getElementById('modalSendWa').href = waLink;
      document.getElementById('modalSendTg').href = tgLink;

      const copyHint = document.getElementById('copyHint');
      if (copyHint) {
        copyHint.textContent = translations[currentLang].copy_text;
        copyHint.classList.replace('bg-success', 'bg-secondary');
      }

      modal.show();
      newForm.reset();
      newForm.classList.remove('was-validated');
      updateServices();
    });
  }

  // Глобальный перехват для копирования текста (чтобы не привязываться к конкретному инстансу модалки)
  document.addEventListener('click', function(e) {
    if (e.target && e.target.id === 'modalSummary') {
      const textToCopy = e.target.dataset.rawText || e.target.textContent;
      navigator.clipboard.writeText(textToCopy).then(() => {
        const originalBg = e.target.style.backgroundColor;
        e.target.style.backgroundColor = '#d1e7dd'; 
        
        const copyHintBadge = document.getElementById('copyHint');
        if (copyHintBadge) {
          copyHintBadge.textContent = translations[currentLang].copied;
          copyHintBadge.classList.replace('bg-secondary', 'bg-success');
        }

        setTimeout(() => {
          e.target.style.backgroundColor = originalBg || '';
          if (copyHintBadge) {
            copyHintBadge.textContent = translations[currentLang].copy_text;
            copyHintBadge.classList.replace('bg-success', 'bg-secondary');
          }
        }, 2000);
      }).catch(err => console.error('Ошибка копирования: ', err));
    }
  });

  // ==========================================
  // 8. МАСКА И ВРЕМЯ
  // ==========================================
  function initMasks() {
    const phoneInput = document.getElementById('clientPhone');
    if (phoneInput) {
      const newPhone = phoneInput.cloneNode(true);
      phoneInput.parentNode.replaceChild(newPhone, phoneInput);
      
      newPhone.addEventListener('input', function(e) {
        const cursorPosition = this.selectionStart;
        const oldValue = this.value;
        const digitsBeforeCursor = oldValue.slice(0, cursorPosition).replace(/\D/g, '').length;
        let rawInput = this.value.replace(/\D/g, '');
        
        if (rawInput.startsWith('7') || rawInput.startsWith('8')) rawInput = rawInput.substring(1);
        
        let formatted = '+7 ';
        if (rawInput.length > 0) formatted += '(' + rawInput.substring(0, 3);
        if (rawInput.length >= 4) formatted += ') ' + rawInput.substring(3, 6);
        if (rawInput.length >= 7) formatted += '-' + rawInput.substring(6, 8);
        if (rawInput.length >= 9) formatted += '-' + rawInput.substring(8, 10);
        
        this.value = formatted;
        
        let newCursorPos = 0;
        let digitCount = 0;
        for (let i = 0; i < this.value.length; i++) {
          if (/\d/.test(this.value[i])) digitCount++;
          if (digitCount === digitsBeforeCursor) { newCursorPos = i + 1; break; }
        }
        if (newCursorPos === 0 && digitsBeforeCursor > 0) newCursorPos = this.value.length;
        this.setSelectionRange(newCursorPos, newCursorPos);
      });

      newPhone.addEventListener('keydown', function(e) {
        if (e.key === 'Backspace') {
          const value = this.value;
          if (value.endsWith(') ') || value.endsWith('-')) {
            e.preventDefault();
            this.value = value.slice(0, -1);
          }
          if (value === '+7 ' && this.selectionStart <= 3) e.preventDefault();
        }
      });

      newPhone.addEventListener('blur', function() {
        if (this.value.trim() === '' || this.value.trim() === '+7') this.value = '+7 ';
      });
    }

    const timeInput = document.getElementById('readyTime');
    if (timeInput) {
      const newTime = timeInput.cloneNode(true);
      timeInput.parentNode.replaceChild(newTime, timeInput);
      newTime.addEventListener('change', function() {
        if (!this.value) return;
        let [hours, minutes] = this.value.split(':');
        let m = Math.round(parseInt(minutes, 10) / 5) * 5;
        if (m === 60) {
          m = 0;
          hours = String((parseInt(hours, 10) + 1) % 24).padStart(2, '0');
        }
        this.value = `${hours}:${String(m).padStart(2, '0')}`;
      });
    }
  }

  // ==========================================
  // ИНИЦИАЛИЗАЦИЯ ПРИ ЗАГРУЗКЕ
  // ==========================================
  translatePage(currentLang); // Переводим статику и вызываем рендеры
  initMasks(); // Инициализируем маски (т.к. форма могла перерисоваться)
  if (document.getElementById('map') && typeof maplibregl !== 'undefined') {
    initMap();
  }
});