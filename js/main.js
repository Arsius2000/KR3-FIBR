document.addEventListener('DOMContentLoaded', () => {
  
  // ==========================================
  // 1. ПОДСТАНОВКА ДАННЫХ ИЗ КОНФИГА (SITE_CONFIG)
  // ==========================================
  
  // Текст
  document.querySelectorAll('[data-cfg-text]').forEach(el => {
    const path = el.getAttribute('data-cfg-text').split('.');
    let value = SITE_CONFIG;
    path.forEach(key => value = value ? value[key] : null);
    if (value) el.textContent = value;
  });

  // Ссылки
  document.querySelectorAll('[data-cfg-href]').forEach(el => {
    const path = el.getAttribute('data-cfg-href').split('.');
    let value = SITE_CONFIG;
    path.forEach(key => value = value ? value[key] : null);
    if (value) el.href = value;
  });

  // Картинки
  document.querySelectorAll('[data-cfg-src]').forEach(el => {
    const path = el.getAttribute('data-cfg-src').split('.');
    let value = SITE_CONFIG;
    path.forEach(key => value = value ? value[key] : null);
    if (value) el.src = value;
  });

  // ==========================================
  // 2. РЕНДЕР ПРАЙС-ЛИСТА (services.html)
  // ==========================================
  const tabsNav = document.getElementById('priceTabsNav');
  const tabsContent = document.getElementById('priceTabsContent');
  const modifiersContainer = document.getElementById('priceModifiers');

  if (tabsNav && tabsContent && modifiersContainer) {
    SITE_CONFIG.priceCategories.forEach((cat, index) => {
      const li = document.createElement('li');
      li.className = 'nav-item';
      li.innerHTML = `
        <button class="nav-link ${index === 0 ? 'active' : ''}" id="tab-${cat.id}" data-bs-toggle="tab" data-bs-target="#content-${cat.id}" type="button" role="tab">
          ${cat.title}
        </button>
      `;
      tabsNav.appendChild(li);

      const div = document.createElement('div');
      div.className = `tab-pane fade ${index === 0 ? 'show active' : ''}`;
      div.id = `content-${cat.id}`;
      div.setAttribute('role', 'tabpanel');
      
      let servicesHtml = '';
      cat.services.forEach(srv => {
        servicesHtml += `
          <div class="price-card">
            <div class="price-info">
              <h5>${srv.name}</h5>
            </div>
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

    SITE_CONFIG.modifiers.forEach(mod => {
      modifiersContainer.innerHTML += `
        <div class="modifier-card">
          <h6>${mod.name}</h6>
          <span class="price">+${mod.price} ₽</span>
          ${mod.time !== 0 ? `<div class="text-muted mt-1" style="font-size:0.8rem;">${mod.time > 0 ? '+' : ''}${mod.time} мин</div>` : ''}
        </div>
      `;
    });
  }

  // ==========================================
  // 3. РЕНДЕР ТУРНИРОВ (index.html и tournaments.html)
  // ==========================================
  const tournamentList = document.getElementById('tournamentList');
  if (tournamentList) {
    // Если мы на главной странице (index.html), показываем только 3 турнира. На tournaments.html — все.
    const isHomePage = window.location.pathname.endsWith('index.html') || window.location.pathname === '/' || window.location.pathname === '';
    const tournamentsToShow = isHomePage ? SITE_CONFIG.tournaments.slice(0, 3) : SITE_CONFIG.tournaments;

    tournamentsToShow.forEach(t => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4';
      const timeStr = t.time ? ` в ${t.time} (МСК)` : '';
      
      const mapUrl = t.mapLink;
      const locHtml = mapUrl 
        ? `<a href="${mapUrl}" target="_blank" rel="noopener" class="map-link" title="Открыть на карте">${t.city}, ${t.venue}</a>`
        : `${t.city}, ${t.venue}`;
      
      col.innerHTML = `
        <div class="tournament-card">
          <div class="t-date">
            <i class="bi bi-calendar-event me-1"></i>${t.date}${timeStr}
          </div>
          <h4 class="t-title">${t.title}</h4>
          <div class="t-loc">
            <i class="bi bi-geo-alt"></i> 
            ${locHtml}
          </div>
          <button class="btn btn-outline-dark-soft w-100 btn-book-tour" data-id="${t.id}" data-date="${t.date}">
            Записаться на турнир
          </button>
        </div>
      `;
      tournamentList.appendChild(col);
    });

    // Переход на форму записи с параметрами
    document.querySelectorAll('.btn-book-tour').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const id = btn.dataset.id;
        const date = btn.dataset.date;
        window.location.href = `booking.html?tournament=${id}&date=${date}`;
      });
    });
  }

  // ==========================================
  // 4. ФИЛЬТРАЦИЯ И МОДАЛКА ПОРТФОЛИО (portfolio.html)
  // ==========================================
  const portfolioGrid = document.getElementById('portfolioGrid');
  const filterBtns = document.querySelectorAll('.filter-btn');
  
  if (portfolioGrid) {
    SITE_CONFIG.portfolio.forEach(item => {
      const col = document.createElement('div');
      col.className = 'col-sm-6 col-lg-4 portfolio-item';
      col.dataset.age = item.age;
      col.dataset.program = item.program;
      col.dataset.style = item.style;
      
      col.innerHTML = `
        <div class="portfolio-card" 
             data-title="${item.title}" 
             data-img-front="${item.image}" 
             data-img-side="${item.imageSide || item.image}" 
             data-img-back="${item.imageBack || item.image}"
             data-bs-toggle="modal" 
             data-bs-target="#portfolioModal"
             style="cursor: pointer;">
          <img src="${item.image}" alt="${item.title}" loading="lazy">
          ${item.badge ? `<span class="portfolio-badge">${item.badge}</span>` : ''}
        </div>
      `;
      portfolioGrid.appendChild(col);
    });

    document.querySelectorAll('.portfolio-card').forEach(card => {
      card.addEventListener('click', () => {
        const titleEl = document.getElementById('portfolioModalTitle');
        const frontEl = document.getElementById('modalImgFront');
        const sideEl = document.getElementById('modalImgSide');
        const backEl = document.getElementById('modalImgBack');
        
        if(titleEl) titleEl.textContent = card.dataset.title;
        if(frontEl) frontEl.src = card.dataset.imgFront;
        if(sideEl) sideEl.src = card.dataset.imgSide;
        if(backEl) backEl.src = card.dataset.imgBack;
      });
    });

    const activeFilters = { age: 'all', program: 'all', style: 'all' };

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        const group = e.target.closest('.filter-group').dataset.filterGroup;
        const val = e.target.dataset.filter;
        
        e.target.closest('.filter-buttons').querySelectorAll('.filter-btn').forEach(b => b.classList.remove('is-active'));
        e.target.classList.add('is-active');
        
        activeFilters[group] = val;
        filterPortfolio();
      });
    });

    function filterPortfolio() {
      const items = document.querySelectorAll('.portfolio-item');
      let visibleCount = 0;
      
      items.forEach(item => {
        const matchAge = activeFilters.age === 'all' || item.dataset.age === activeFilters.age;
        const matchProg = activeFilters.program === 'all' || item.dataset.program === activeFilters.program;
        const matchStyle = activeFilters.style === 'all' || item.dataset.style === activeFilters.style;
        
        if (matchAge && matchProg && matchStyle) {
          item.style.display = 'block';
          setTimeout(() => item.style.opacity = 1, 50);
          visibleCount++;
        } else {
          item.style.opacity = 0;
          setTimeout(() => item.style.display = 'none', 300);
        }
      });
      
      const emptyMsg = document.getElementById('portfolioEmpty');
      if (emptyMsg) {
        emptyMsg.classList.toggle('d-none', visibleCount > 0);
      }
    }
  }

  // ==========================================
  // 5. РЕНДЕР ОБУЧЕНИЯ (services.html)
  // ==========================================
  const educationList = document.getElementById('educationList');
  const educationEmpty = document.getElementById('educationEmpty');

  if (educationList) {
    if (SITE_CONFIG.education && SITE_CONFIG.education.length > 0) {
      SITE_CONFIG.education.forEach(edu => {
        const col = document.createElement('div');
        col.className = 'col-md-6';
        
        col.innerHTML = `
          <article class="edu-card card-soft h-100 p-3 d-flex flex-column">
            <img src="${edu.image}" class="img-fluid rounded mb-3" alt="${edu.title}" loading="lazy">
            <span class="edu-tag">${edu.tag}</span>
            <h3 class="edu-title">${edu.title}</h3>
            <p class="text-muted mb-4 flex-grow-1">${edu.description}</p>
            
            <div class="edu-meta mb-4">
              <div class="edu-meta-item"><i class="bi bi-clock text-gold me-2"></i>${edu.time}</div>
              <div class="edu-meta-item"><i class="bi bi-person text-gold me-2"></i>${edu.speaker}</div>
            </div>
            
            <a href="${edu.contactLink}" target="_blank" rel="noopener" class="btn btn-outline-dark-soft mt-auto">
              <i class="bi bi-chat-dots me-2"></i>${edu.contactText}
            </a>
          </article>
        `;
        educationList.appendChild(col);
      });
    } else {
      if (educationEmpty) educationEmpty.classList.remove('d-none');
    }
  }

  // ==========================================
  // 5.5. РЕНДЕР КОМАНДЫ (about.html)
  // ==========================================
  const teamGrid = document.getElementById('teamGrid');
  if (teamGrid && SITE_CONFIG.team) {
    SITE_CONFIG.team.forEach(member => {
      const col = document.createElement('div');
      col.className = 'col-md-6 col-lg-4';
      
      col.innerHTML = `
        <div class="team-card card-soft h-100 p-3 text-center">
          <img src="${member.image}" class="img-fluid rounded mb-3" style="height: 300px; object-fit: cover; width: 100%;" alt="${member.name}">
          <h4 class="mb-1">${member.name}</h4>
          <p class="text-gold fw-bold mb-2" style="font-size: 0.9rem;">${member.role}</p>
          <span class="badge bg-light text-dark border mb-3">${member.experience}</span>
          <p class="text-muted" style="font-size: 0.9rem;">${member.desc}</p>
        </div>
      `;
      teamGrid.appendChild(col);
    });
  }

  // ==========================================
  // 6. ФОРМА И КАЛЬКУЛЯТОР (booking.html)
  // ==========================================
  const form = document.getElementById('bookingForm');
  
  if (form) {
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

    // Заполнение селектов
    if (selects.tournament) {
      selects.tournament.innerHTML = `<option value="">Без турнира (свободная дата)</option>` + 
        SITE_CONFIG.tournaments.map(t => `<option value="${t.id}" data-date="${t.date}">${t.date} - ${t.title}</option>`).join('');
      
      // 1. При выборе турнира подставляем дату и меняем локацию
      selects.tournament.addEventListener('change', function() {
        const selectedOption = this.options[this.selectedIndex];
        const date = selectedOption.getAttribute('data-date');
        const tourId = this.value;
        
        if (date) {
          const dateInput = document.getElementById('bookingDate');
          if (dateInput) {
            dateInput.value = date;
            dateInput.style.backgroundColor = '#d1e7dd'; // Зеленая подсветка
            setTimeout(() => dateInput.style.backgroundColor = '', 1000);
          }
        }

        // АВТОМАТИЧЕСКИ МЕНЯЕМ ЛОКАЦИЮ
        if (selects.location) {
          if (tourId !== "") {
            selects.location.value = "venue"; // "Гримерка на турнире"
          } else {
            selects.location.value = "hotel"; // Возвращаем "Выезд в отель" по умолчанию
          }
          calculate(); // Пересчитываем стоимость и время
        }
      });

      // 2. Если клиент вручную меняет дату — сбрасываем турнир
      const dateInput = document.getElementById('bookingDate');
      if (dateInput) {
        dateInput.addEventListener('change', function() {
          if (selects.tournament.value !== "") {
            selects.tournament.value = ""; // Сбрасываем на "Без турнира"
            this.style.backgroundColor = '#fff3cd'; // Желтая подсветка
            setTimeout(() => this.style.backgroundColor = '', 1000);
          }
        });
      }
    }
    
    if (selects.category) {
      selects.category.innerHTML = SITE_CONFIG.priceCategories.map(c => `<option value="${c.id}">${c.title}</option>`).join('');
    }
    if (selects.grade) {
      selects.grade.innerHTML = SITE_CONFIG.grades.map(g => `<option value="${g.id}">${g.name}</option>`).join('');
    }
    if (selects.location) {
      selects.location.innerHTML = SITE_CONFIG.locations.map(l => `<option value="${l.id}">${l.name}</option>`).join('');
    }

    if (optionsContainer) {
      SITE_CONFIG.modifiers.forEach(mod => {
        optionsContainer.innerHTML += `
          <label class="option-checkbox">
            <input type="checkbox" value="${mod.id}" data-price="${mod.price}" data-time="${mod.time}">
            <span>${mod.name}</span>
            <span class="option-price">+${mod.price}₽</span>
          </label>
        `;
      });
    }

    // Логика калькулятора
    function calculate() {
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
      const srvName = srvOption.value;
      
      if (calcUI.service) calcUI.service.textContent = srvName;
      if (calcUI.base) calcUI.base.textContent = basePrice + ' ₽';

      const gradeId = selects.grade ? selects.grade.value : '';
      const grade = SITE_CONFIG.grades.find(g => g.id === gradeId);
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

      const locId = selects.location ? selects.location.value : '';
      const loc = SITE_CONFIG.locations.find(l => l.id === locId);
      const locPrice = loc ? loc.price : 0;
      const locName = loc ? loc.name : '';

      if (calcUI.location) {
        calcUI.location.textContent = locPrice > 0 ? `${locName} (+${locPrice} ₽)` : locName;
      }

      const totalPrice = Math.round((basePrice * multiplier) + optionsPrice + locPrice);
      let totalTime = baseTime + optionsTime;
      if (totalTime < 15) totalTime = 15;

      if (calcUI.total) calcUI.total.textContent = totalPrice.toLocaleString('ru-RU') + ' ₽';
      if (calcUI.time) calcUI.time.textContent = totalTime + ' мин';
    }

    function updateServices() {
      if (!selects.category || !selects.service) return;
      const catId = selects.category.value;
      const cat = SITE_CONFIG.priceCategories.find(c => c.id === catId);
      if (!cat) return;
      
      selects.service.innerHTML = cat.services.map(s => 
        `<option value="${s.name}" data-price="${s.price}" data-time="${s.time}">${s.name} — ${s.price}₽ (${s.time} мин)</option>`
      ).join('');
      calculate();
    }

    if (selects.category) selects.category.addEventListener('change', updateServices);
    if (selects.service) selects.service.addEventListener('change', calculate);
    if (selects.grade) selects.grade.addEventListener('change', calculate);
    if (selects.location) selects.location.addEventListener('change', calculate);
    document.querySelectorAll('#optionsList input').forEach(cb => cb.addEventListener('change', calculate));

    updateServices();

    // Чтение URL параметров для формы (переход со страницы услуг)
    const urlParams = new URLSearchParams(window.location.search);
    const tourParam = urlParams.get('tournament');
    const dateParam = urlParams.get('date');

    if (tourParam && selects.tournament) {
      selects.tournament.value = tourParam;
      // Вызываем событие change, чтобы сработала подстановка даты и смена локации
      selects.tournament.dispatchEvent(new Event('change'));
    }
    if (dateParam) {
      const dateInput = document.getElementById('bookingDate');
      if (dateInput) dateInput.value = dateParam;
    }

    // Вспомогательная функция формирования текста заявки
    function generateOrderText() {
      const name = document.getElementById('clientName').value;
      const phone = document.getElementById('clientPhone').value;
      const date = document.getElementById('bookingDate').value;
      const time = document.getElementById('readyTime').value;
      const tourId = selects.tournament ? selects.tournament.value : '';
      const tourText = tourId ? SITE_CONFIG.tournaments.find(t => t.id === tourId).title : 'Свободная дата';
      
      let text = `*Новая заявка с сайта*\n\n`;
      text += `*Имя:* ${name}\n`;
      text += `*Телефон:* ${phone}\n`;
      text += `*Дата:* ${date} к ${time} (МСК)\n`;
      text += `*Турнир:* ${tourText}\n`;
      text += `*Услуга:* ${calcUI.service ? calcUI.service.textContent : '—'}\n`;
      text += `*Опции:* ${calcUI.optionsNames ? calcUI.optionsNames.textContent || 'нет' : 'нет'}\n`;
      text += `*Место:* ${calcUI.location ? calcUI.location.textContent : '—'}\n`;
      text += `*Итого:* ${calcUI.total ? calcUI.total.textContent : '0'} (${calcUI.time ? calcUI.time.textContent : '—'})\n`;
      
      return text;
    }

    // Отправка формы
    const modalElement = document.getElementById('successModal');
    const modal = modalElement ? new bootstrap.Modal(modalElement) : null;

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      if (!form.checkValidity()) {
        form.classList.add('was-validated');
        return;
      }

      if (!modal) return;

      const rawText = generateOrderText();
      const summaryEl = document.getElementById('modalSummary');
      
      if (summaryEl) {
        summaryEl.textContent = rawText.replace(/\*/g, ''); 
        summaryEl.dataset.rawText = rawText; 
      }
      
      const waBase = SITE_CONFIG.links.whatsapp.split('/').pop();
      const tgBase = SITE_CONFIG.links.telegram.split('/').pop();
      const waLink = `https://wa.me/${waBase}?text=${encodeURIComponent(rawText)}`;
      const tgLink = `https://t.me/${tgBase}`;

      const btnWa = document.getElementById('modalSendWa');
      const btnTg = document.getElementById('modalSendTg');
      if (btnWa) btnWa.href = waLink;
      if (btnTg) btnTg.href = tgLink;

      const copyHint = document.getElementById('copyHint');
      if (copyHint) {
        copyHint.textContent = 'Копировать текст';
        copyHint.classList.replace('bg-success', 'bg-secondary');
      }

      modal.show();
      form.reset();
      form.classList.remove('was-validated');
      updateServices();
    });

    // Копирование из модалки
    const summaryBlock = document.getElementById('modalSummary');
    const copyHintBadge = document.getElementById('copyHint');

    if (summaryBlock) {
      summaryBlock.addEventListener('click', () => {
        const textToCopy = summaryBlock.dataset.rawText || summaryBlock.textContent;
        navigator.clipboard.writeText(textToCopy).then(() => {
          const originalBg = summaryBlock.style.backgroundColor;
          summaryBlock.style.backgroundColor = '#d1e7dd'; 
          
          if (copyHintBadge) {
            copyHintBadge.textContent = 'Скопировано!';
            copyHintBadge.classList.replace('bg-secondary', 'bg-success');
          }

          setTimeout(() => {
            summaryBlock.style.backgroundColor = originalBg || '';
            if (copyHintBadge) {
              copyHintBadge.textContent = 'Копировать текст';
              copyHintBadge.classList.replace('bg-success', 'bg-secondary');
            }
          }, 2000);
        }).catch(err => console.error('Ошибка копирования: ', err));
      });
    }
  }

  // ==========================================
  // 7. МАСКА ДЛЯ ТЕЛЕФОНА (booking.html)
  // ==========================================
  const phoneInput = document.getElementById('clientPhone');
  
  if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
      const cursorPosition = this.selectionStart;
      const oldValue = this.value;
      const digitsBeforeCursor = oldValue.slice(0, cursorPosition).replace(/\D/g, '').length;
      
      let rawInput = this.value.replace(/\D/g, '');
      
      if (rawInput.startsWith('7') || rawInput.startsWith('8')) {
        rawInput = rawInput.substring(1);
      }
      
      let formatted = '+7 ';
      if (rawInput.length > 0) formatted += '(' + rawInput.substring(0, 3);
      if (rawInput.length >= 4) formatted += ') ' + rawInput.substring(3, 6);
      if (rawInput.length >= 7) formatted += '-' + rawInput.substring(6, 8);
      if (rawInput.length >= 9) formatted += '-' + rawInput.substring(8, 10);
      
      this.value = formatted;
      
      let newCursorPos = 0;
      let digitCount = 0;
      for (let i = 0; i < this.value.length; i++) {
        if (/\d/.test(this.value[i])) {
          digitCount++;
        }
        if (digitCount === digitsBeforeCursor) {
          newCursorPos = i + 1;
          break;
        }
      }
      
      if (newCursorPos === 0 && digitsBeforeCursor > 0) {
        newCursorPos = this.value.length;
      }
      
      this.setSelectionRange(newCursorPos, newCursorPos);
    });

    phoneInput.addEventListener('keydown', function(e) {
      if (e.key === 'Backspace') {
        const value = this.value;
        if (value.endsWith(') ') || value.endsWith('-')) {
          e.preventDefault();
          this.value = value.slice(0, -1);
        }
        if (value === '+7 ' && this.selectionStart <= 3) {
          e.preventDefault();
        }
      }
    });

    phoneInput.addEventListener('blur', function() {
      if (this.value.trim() === '' || this.value.trim() === '+7') {
        this.value = '+7 ';
      }
    });
  }

});