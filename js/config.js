/**
 * ЕДИНЫЙ ФАЙЛ КОНФИГУРАЦИИ
 */
const SITE_CONFIG = {
  brand: {
    name: "ПАРКЕТ"
  },
  contacts: {
    phone: "+7 (999) 123-45-67",
    phoneLink: "tel:+79991234567", 
    address: "",
    workingHours: "Ежедневно с 04:00 до 00:00 (МСК)", 
    workingHours_en: "Daily from 04:00 to 00:00 (MSK)",
    venueText: "На месте турнира", 
    venueText_en: "At the venue", 
    venueLink: "tournaments.html"
  },
  links: {
    telegram: "https://t.me/arsius2000", 
    whatsapp: "https://wa.me/79671176258" 
  },
  images: {
    hero: "https://s6.iimage.su/s/14/gKbWiNlxU1EWbB8cjdKqlPvcPwhIz3RLqNjub7prd.png",
    educationMom: "https://i.pinimg.com/736x/32/65/59/326559552f4da7bac5b9905622e0146a.jpg",
    educationPro: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_20aWs0b-EtffgHifRifmT39bl9XZgX9nKSYpuB8tsWYhIQYPrD241ks&s=10"
  },
  
  about: {
    title: "О студии ПАРКЕТ",
    title_en: "About PARKET Studio",
    text1: "Мы — выездная команда стилистов, специализирующаяся на подготовке спортсменов к турнирам по бальным танцам. За 12 лет работы мы собрали более 2400 образов на площадках ФТСАРР и РТС.",
    text1_en: "We are a mobile team of stylists specializing in preparing athletes for ballroom dance tournaments. Over 12 years of work, we have created more than 2400 looks at FTSARR and RTS venues.",
    text2: "Наша главная цель — чтобы вы чувствовали себя уверенно на паркете. Мы строго соблюдаем регламенты федераций, используем только профессиональную косметику и средства сильной фиксации, которые выдерживают несколько туров.",
    text2_en: "Our main goal is for you to feel confident on the dance floor. We strictly follow federation regulations and use only professional cosmetics and strong hold products that withstand several rounds.",
    image: "https://img.magnific.com/free-photo/businesspeople-meeting-office_23-2148908930.jpg?semt=ais_hybrid&w=740&q=80"
  },
  
  team: [
    {
      name: "Анна Смирнова",
      name_en: "Anna Smirnova",
      role: "Топ-мастер, основатель студии",
      role_en: "Top Master, Founder",
      experience: "12 лет опыта",
      experience_en: "12 years of experience",
      desc: "Специализируется на европейской программе и сложных пучках с плетением.",
      desc_en: "Specializes in the standard program and complex braided buns.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVy-Eak3CywmAZsp1MtFFEDnWmTReya-pttUW4J180SQ&s=10"
    },
    {
      name: "Мария Иванова",
      name_en: "Maria Ivanova",
      role: "Премиум-мастер",
      role_en: "Premium Master",
      experience: "8 лет опыта",
      experience_en: "8 years of experience",
      desc: "Эксперт по латиноамериканской программе. Идеальные волны и текстуры.",
      desc_en: "Expert in Latin program. Perfect waves and textures.",
      image: "https://www.film.ru/sites/default/files/people/1589897-2432493.jpg"
    },
    {
      name: "Елена Петрова",
      name_en: "Elena Petrova",
      role: "Стилист по макияжу",
      role_en: "Makeup Artist",
      experience: "6 лет опыта",
      experience_en: "6 years of experience",
      desc: "Создает сценический тон, который не течет под софитами и держится весь день.",
      desc_en: "Creates stage makeup that doesn't run under spotlights and lasts all day.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptZVnO2fFUvrqE_M1McdkiA4C3FBEdaHOtVwVnpQnbAssl5K8K5uQnbQN&s=10"
    }
  ],  
  
  priceCategories: [
    {
      id: "kids",
      title: "Дети (Н/Е классы)",
      title_en: "Kids (H/E classes)",
      services: [
        { name: "Гладкий пучок (регламент)", name_en: "Smooth bun (regulation)", price: 2500, time: 30 },
        { name: "Прическа + сценический тон", name_en: "Hairstyle + stage makeup", price: 4000, time: 60 }
      ]
    },
    {
      id: "juniors",
      title: "Юниоры-1, Юниоры-2",
      title_en: "Juniors-1, Juniors-2",
      services: [
        { name: "Женский образ (Европейская программа)", name_en: "Female look (Standard)", price: 4500, time: 60 },
        { name: "Женский образ (Латина)", name_en: "Female look (Latin)", price: 4500, time: 60 },
        { name: "Мужской стайлинг (укладка + тон)", name_en: "Male styling (hair + tone)", price: 3000, time: 30 }
      ]
    },
    {
      id: "adults",
      title: "Молодежь и Взрослые",
      title_en: "Youth & Adults",
      services: [
        { name: "Полный женский образ (Стандарт)", name_en: "Full female look (Standard)", price: 5500, time: 90 },
        { name: "Полный женский образ (Латина)", name_en: "Full female look (Latin)", price: 5500, time: 90 },
        { name: "Мужской стайлинг", name_en: "Male styling", price: 3500, time: 40 }
      ]
    },
    {
      id: "proam",
      title: "Pro-Am",
      title_en: "Pro-Am",
      services: [
        { name: "Пакет для пары (Мужчина + Женщина)", name_en: "Couple package (Male + Female)", price: 8000, time: 120 },
        { name: "Экспресс-сбор в 4 руки", name_en: "Express 4-hands styling", price: 7000, time: 45 }
      ]
    }
  ],

  modifiers: [
    { id: "crystals", name: "Поклейка страз", name_en: "Rhinestone application", price: 1000, time: 15 },
    { id: "extensions", name: "Накладные пряди", name_en: "Hair extensions", price: 1500, time: 20 },
    { id: "four_hands", name: "Работа в 4 руки", name_en: "4-hands work", price: 3000, time: -20 } 
  ],
  
  grades: [
    { id: "base", name: "Базовый мастер", name_en: "Base Master", multiplier: 1 },
    { id: "top", name: "Топ-мастер", name_en: "Top Master", multiplier: 1.3 },
    { id: "premium", name: "Премиум", name_en: "Premium", multiplier: 1.6 }
  ],

  locations: [
    { id: "hotel", name: "Выезд в отель", name_en: "Hotel visit", price: 1500 },
    { id: "venue", name: "Гримерка на турнире", name_en: "Tournament dressing room", price: 0 }
  ],

  tournaments: [
    { 
      id: "t1", date: "2027-01-20", time: "09:00", 
      title: "Рождественский турнир", title_en: "Christmas Tournament", 
      city: "Санкт-Петербург", city_en: "Saint Petersburg", 
      venue: "Экспофорум", venue_en: "Expoforum",
      mapLink: "https://yandex.ru/maps/?text=Санкт-Петербург%2C%20Экспофорум",
      image: "https://picsum.photos/seed/ChristmasTournament/800/500"
    },
    { 
      id: "t2", date: "2027-02-14", time: "10:00", 
      title: "Кубок Москвы", title_en: "Moscow Cup", 
      city: "Москва", city_en: "Moscow", 
      venue: "Крокус Экспо", venue_en: "Crocus Expo",
      mapLink: "https://yandex.ru/maps/?text=Москва%2C%20Крокус%20Экспо",
      image: "https://picsum.photos/seed/MoscowCup/800/500"
    },
    { 
      id: "t3", date: "2027-03-05", time: "11:00", 
      title: "Весенний бал", title_en: "Spring Ball", 
      city: "Москва", city_en: "Moscow", 
      venue: "Гостиный Двор", venue_en: "Gostiny Dvor",
      mapLink: "https://yandex.ru/maps/?text=Москва%2C%20Гостиный%20Двор",
      image: "https://picsum.photos/seed/SpringBall/800/500"
    },
    { 
      id: "t4", date: "2027-03-21", time: "09:30", 
      title: "Кубок Казани", title_en: "Kazan Cup", 
      city: "Казань", city_en: "Kazan", 
      venue: "Kazan Expo", venue_en: "Kazan Expo",
      mapLink: "https://yandex.ru/maps/?text=Казань%2C%20Kazan%20Expo",
      image: "https://picsum.photos/seed/KazanCup/800/500"
    },
    { 
      id: "t5", date: "2027-04-12", time: "10:00", 
      title: "Бал Авроры", title_en: "Aurora Ball", 
      city: "Санкт-Петербург", city_en: "Saint Petersburg", 
      venue: "СКК Петербургский", venue_en: "Petersburg SCC",
      mapLink: "https://yandex.ru/maps/?text=Санкт-Петербург%2C%20СКК%20Петербургский",
      image: "https://picsum.photos/seed/AuroraBall/800/500"
    },
    { 
      id: "t6", date: "2027-04-25", time: "09:00", 
      title: "Кубок Урала", title_en: "Ural Cup", 
      city: "Екатеринбург", city_en: "Yekaterinburg", 
      venue: "Екатеринбург-ЭКСПО", venue_en: "Ekaterinburg-EXPO",
      mapLink: "https://yandex.ru/maps/?text=Екатеринбург%2C%20Екатеринбург-ЭКСПО",
      image: "https://picsum.photos/seed/UralCup/800/500"
    },
    { 
      id: "t7", date: "2027-05-16", time: "11:00", 
      title: "Черноморская жемчужина", title_en: "Black Sea Pearl", 
      city: "Сочи", city_en: "Sochi", 
      venue: "Дворец спорта «Большой»", venue_en: "Bolshoy Sports Palace",
      mapLink: "https://yandex.ru/maps/?text=Сочи%2C%20Дворец%20спорта%20Большой",
      image: "https://picsum.photos/seed/BlackSeaPearl/800/500"
    },
    { 
      id: "t8", date: "2027-06-06", time: "10:00", 
      title: "Московские звезды", title_en: "Moscow Stars", 
      city: "Москва", city_en: "Moscow", 
      venue: "Крокус Экспо", venue_en: "Crocus Expo",
      mapLink: "https://yandex.ru/maps/?text=Москва%2C%20Крокус%20Экспо",
      image: "https://picsum.photos/seed/MoscowStars/800/500"
    },
    { 
      id: "t9", date: "2027-08-22", time: "12:00", 
      title: "Летний кубок", title_en: "Summer Cup", 
      city: "Нижний Новгород", city_en: "Nizhny Novgorod", 
      venue: "Нижегородская ярмарка", venue_en: "Nizhny Novgorod Fair",
      mapLink: "https://yandex.ru/maps/?text=Нижний%20Новгород%2C%20Нижегородская%20ярмарка",
      image: "https://picsum.photos/seed/SummerCup/800/500"
    },
    { 
      id: "t10", date: "2027-09-10", time: "09:00", 
      title: "Кубок Дона", title_en: "Don Cup", 
      city: "Ростов-на-Дону", city_en: "Rostov-on-Don", 
      venue: "Ростов Арена", venue_en: "Rostov Arena",
      mapLink: "https://yandex.ru/maps/?text=Ростов-на-Дону%2C%20Ростов%20Арена",
      image: "https://picsum.photos/seed/DonCup/800/500"
    },
    { 
      id: "t11", date: "2027-09-26", time: "10:30", 
      title: "Сибирский фестиваль", title_en: "Siberian Festival", 
      city: "Новосибирск", city_en: "Novosibirsk", 
      venue: "Новосибирск Экспоцентр", venue_en: "Novosibirsk Expo Center",
      mapLink: "https://yandex.ru/maps/?text=Новосибирск%2C%20Новосибирск%20Экспоцентр",
      image: "https://picsum.photos/seed/SiberianFestival/800/500"
    },
    { 
      id: "t12", date: "2027-10-15", time: "11:00", 
      title: "Золотая осень", title_en: "Golden Autumn", 
      city: "Москва", city_en: "Moscow", 
      venue: "ВТБ Арена", venue_en: "VTB Arena",
      mapLink: "https://yandex.ru/maps/?text=Москва%2C%20ВТБ%20Арена",
      image: "https://picsum.photos/seed/GoldenAutumn/800/500"
    },
    { 
      id: "t13", date: "2027-10-28", time: "10:00", 
      title: "Кубок Балтики", title_en: "Baltic Cup", 
      city: "Калининград", city_en: "Kaliningrad", 
      venue: "Янтарь-Холл", venue_en: "Yantar Hall",
      mapLink: "https://yandex.ru/maps/?text=Калининград%2C%20Янтарь-Холл",
      image: "https://picsum.photos/seed/BalticCup/800/500"
    },
    { 
      id: "t14", date: "2027-11-12", time: "09:00", 
      title: "Кубок Волги", title_en: "Volga Cup", 
      city: "Самара", city_en: "Samara", 
      venue: "Самара Арена", venue_en: "Samara Arena",
      mapLink: "https://yandex.ru/maps/?text=Самара%2C%20Самара%20Арена",
      image: "https://picsum.photos/seed/VolgaCup/800/500"
    },
    { 
      id: "t15", date: "2027-11-25", time: "10:00", 
      title: "Северная Пальмира", title_en: "Northern Palmyra", 
      city: "Санкт-Петербург", city_en: "Saint Petersburg", 
      venue: "Экспофорум", venue_en: "Expoforum",
      mapLink: "https://yandex.ru/maps/?text=Санкт-Петербург%2C%20Экспофорум",
      image: "https://picsum.photos/seed/NorthernPalmyra/800/500"
    },
    { 
      id: "t16", date: "2027-12-05", time: "10:30", 
      title: "Гран-При Москвы", title_en: "Moscow Grand Prix", 
      city: "Москва", city_en: "Moscow", 
      venue: "Крокус Экспо", venue_en: "Crocus Expo",
      mapLink: "https://yandex.ru/maps/?text=Москва%2C%20Крокус%20Экспо",
      image: "https://picsum.photos/seed/MoscowGrandPrix/800/500"
    },
    { 
      id: "t17", date: "2027-12-19", time: "11:00", 
      title: "Новогодний бал", title_en: "New Year Ball", 
      city: "Москва", city_en: "Moscow", 
      venue: "Гостиный Двор", venue_en: "Gostiny Dvor",
      mapLink: "https://yandex.ru/maps/?text=Москва%2C%20Гостиный%20Двор",
      image: "https://picsum.photos/seed/NewYearBall/800/500"
    }
  ],
  
  portfolio: [
    {
      id: 1,
      title: "Гладкий пучок для юниоров",
      title_en: "Smooth bun for juniors",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFhPC2IktkCnZMGYcd2NAJyVGkbqYsqhi0uugMjS-mHwQN-ZqipLsfqk&s=10",
      imageSide: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFhPC2IktkCnZMGYcd2NAJyVGkbqYsqhi0uugMjS-mHwQN-ZqipLsfqk&s=10",
      imageBack: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFhPC2IktkCnZMGYcd2NAJyVGkbqYsqhi0uugMjS-mHwQN-ZqipLsfqk&s=10",
      age: "kids",
      program: "standard",
      style: "smooth",
      badge: "Фото с паркета",
      badge_en: "Floor photo"
    },
    {
      id: 2,
      title: "Латина с текстурированными волнами",
      title_en: "Latin with textured waves",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNEU_vdcK6qVtfaADkEguMiookJFQpt0ajt5P4uizDg&s=10",
      imageSide: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNEU_vdcK6qVtfaADkEguMiookJFQpt0ajt5P4uizDg&s=10",
      imageBack: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNEU_vdcK6qVtfaADkEguMiookJFQpt0ajt5P4uizDg&s=10",
      age: "adults",
      program: "latin",
      style: "waves",
      badge: "Фото с паркета",
      badge_en: "Floor photo"
    },
    {
      id: 3,
      title: "Классический пучок для Н/Е классов",
      title_en: "Classic bun for H/E classes",
      image: "https://academy-stylist.ru/img/7908666.jpg",
      imageSide: "https://academy-stylist.ru/img/7908666.jpg",
      imageBack: "https://academy-stylist.ru/img/7908666.jpg",
      age: "kids",
      program: "standard",
      style: "clean",
      badge: "Фото с паркета",
      badge_en: "Floor photo"
    },
    {
      id: 4,
      title: "Текстурированный хвост для латины",
      title_en: "Textured ponytail for Latin",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxX4MRDAPU_KxbEZnbDE_0xbRcff3fZFHoVCPcd_r3Q&s=10",
      imageSide: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxX4MRDAPU_KxbEZnbDE_0xbRcff3fZFHoVCPcd_r3Q&s=10",
      imageBack: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxX4MRDAPU_KxbEZnbDE_0xbRcff3fZFHoVCPcd_r3Q&s=10",
      age: "kids",
      program: "latin",
      style: "texture",
      badge: "Фото с паркета",
      badge_en: "Floor photo"
    },
    {
      id: 5,
      title: "Гладкая ракушка без декора",
      title_en: "Smooth shell without decor",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFOSdBIFujgu52rK9a7BqEqPxZfHKa0VtKOn2QwAvsQSxdKdjZzXB3QRa&s=10",
      imageSide: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFOSdBIFujgu52rK9a7BqEqPxZfHKa0VtKOn2QwAvsQSxdKdjZzXB3QRa&s=10",
      imageBack: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFOSdBIFujgu52rK9a7BqEqPxZfHKa0VtKOn2QwAvsQSxdKdjZzXB3QRa&s=10",
      age: "adults",
      program: "standard",
      style: "smooth",
      badge: "Фото с паркета",
      badge_en: "Floor photo"
    },
    {
      id: 6,
      title: "Голливудские волны для латины",
      title_en: "Hollywood waves for Latin",
      image: "https://volosomagia.ru/wp-content/uploads/2017/09/baln-2.jpg",
      imageSide: "https://volosomagia.ru/wp-content/uploads/2017/09/baln-2.jpg",
      imageBack: "https://volosomagia.ru/wp-content/uploads/2017/09/baln-2.jpg",
      age: "adults",
      program: "latin",
      style: "waves",
      badge: "Фото с паркета",
      badge_en: "Floor photo"
    },
    {
      id: 7,
      title: "Высокий пучок с косичкой",
      title_en: "High bun with a braid",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqJZOdL3K-pvTjliBvEVCfQ0cTkZ4eGLj94x6ahg8DZt1rDeMbp7p4e0N&s=10",
      imageSide: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqJZOdL3K-pvTjliBvEVCfQ0cTkZ4eGLj94x6ahg8DZt1rDeMbp7p4e0N&s=10",
      imageBack: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqJZOdL3K-pvTjliBvEVCfQ0cTkZ4eGLj94x6ahg8DZt1rDeMbp7p4e0N&s=10",
      age: "adults",
      program: "standard",
      style: "smooth",
      badge: "Фото с паркета",
      badge_en: "Floor photo"
    },
    {
      id: 8,
      title: "Легкие локоны для ювенальной латины",
      title_en: "Light curls for juvenile Latin",
      image: "https://academy-stylist.ru/img/7908698.jpg",
      imageSide: "https://academy-stylist.ru/img/7908698.jpg",
      imageBack: "https://academy-stylist.ru/img/7908698.jpg",
      age: "kids",
      program: "latin",
      style: "waves",
      badge: "Фото с паркета",
      badge_en: "Floor photo"
    },
    {
      id: 9,
      title: "Объемная текстура с плетением",
      title_en: "Voluminous texture with braiding",
      image: "https://academy-stylist.ru/img/38859307.jpg",
      imageSide: "https://academy-stylist.ru/img/38859307.jpg",
      imageBack: "https://academy-stylist.ru/img/38859307.jpg",
      age: "adults",
      program: "latin",
      style: "texture",
      badge: "Фото с паркета",
      badge_en: "Floor photo"
    },
    {
      id: 10,
      title: "Строгий пучок с пробором (без страз)",
      title_en: "Strict bun with parting (no rhinestones)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-A6wY-V956AGZSMiSbG4Boia3IaXzF69_pkukhdSKiVDsCnoQcBrZtHj6&s=10",
      imageSide: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-A6wY-V956AGZSMiSbG4Boia3IaXzF69_pkukhdSKiVDsCnoQcBrZtHj6&s=10",
      imageBack: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-A6wY-V956AGZSMiSbG4Boia3IaXzF69_pkukhdSKiVDsCnoQcBrZtHj6&s=10",
      age: "adults",
      program: "standard",
      style: "clean",
      badge: "Фото с паркета",
      badge_en: "Floor photo"
    }
  ],

  education: [
    {
      id: "edu1",
      tag: "Для родителей",
      tag_en: "For parents",
      title: "«Прическа за 15 минут»",
      title_en: "«Hairstyle in 15 minutes»",
      description: "Практический урок для мам юных танцоров: как собрать гладкий пучок по регламенту Н/Е классов без страз, чем фиксировать и что положить в турнирный чемоданчик.",
      description_en: "A practical lesson for moms of young dancers: how to make a smooth bun according to H/E class rules without rhinestones, how to fix it and what to put in the tournament suitcase.",
      image: "https://i.pinimg.com/736x/84/5f/df/845fdfec1f9c338e8d8c736bff40c127.jpg",
      time: "12 ноября, 14:00–16:00 (МСК)",
      time_en: "November 12, 14:00–16:00 (MSK)",
      speaker: "Анна Смирнова (Топ-мастер)",
      speaker_en: "Anna Smirnova (Top Master)",
      contactText: "Записаться в Telegram",
      contactText_en: "Join in Telegram",
      contactLink: "https://t.me/GoncharGr"
    },
    {
      id: "edu2",
      tag: "Для стилистов",
      tag_en: "For stylists",
      title: "Курс «Сценический тон»",
      title_en: "«Stage Makeup» Course",
      description: "Базовая подготовка стилиста к работе на турнирах: регламенты федераций, стойкость укладки на 8+ часов, техника крепления шпильками.",
      description_en: "Basic training for a stylist to work at tournaments: federation regulations, styling durability for 8+ hours, pinning techniques.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24luuHHHvca27xpZQJAG_-FigwFhEiBdkA1CWJu13M1qOJOaNnqL2YaA&s=10",
      time: "20–22 декабря, 10:00–18:00 (МСК)",
      time_en: "December 20–22, 10:00–18:00 (MSK)",
      speaker: "Мария Иванова (Премиум-мастер)",
      speaker_en: "Maria Ivanova (Premium Master)",
      contactText: "Узнать подробности",
      contactText_en: "Learn more",
      contactLink: "https://wa.me/79991234567"
    }
  ],

  geography: [
    { name: "Москва", name_en: "Moscow", lat: 55.7558, lng: 37.6173, info: "Более 200 турниров за 12 лет", info_en: "Over 200 tournaments in 12 years" },
    { name: "Санкт-Петербург", name_en: "Saint Petersburg", lat: 59.9343, lng: 30.3351, info: "Кубок Балтики и Северная Пальмира", info_en: "Baltic Cup and Northern Palmyra" },
    { name: "Казань", name_en: "Kazan", lat: 55.7887, lng: 49.1221, info: "Кубок Казани", info_en: "Kazan Cup" },
    { name: "Екатеринбург", name_en: "Yekaterinburg", lat: 56.8389, lng: 60.6057, info: "Кубок Урала", info_en: "Ural Cup" },
    { name: "Сочи", name_en: "Sochi", lat: 43.5855, lng: 39.7231, info: "Черноморская жемчужина", info_en: "Black Sea Pearl" },
    { name: "Новосибирск", name_en: "Novosibirsk", lat: 55.0084, lng: 82.9357, info: "Сибирский фестиваль", info_en: "Siberian Festival" },
    { name: "Калининград", name_en: "Kaliningrad", lat: 54.7104, lng: 20.4522, info: "Кубок Балтики", info_en: "Baltic Cup" }
  ]
};