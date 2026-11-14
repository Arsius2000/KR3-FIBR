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
    address: ""
  },
  links: {
    telegram: "https://t.me/arsius2000", 
    whatsapp: "https://wa.me/79991234567" 
  },
  images: {
    hero: "https://s6.iimage.su/s/14/gKbWiNlxU1EWbB8cjdKqlPvcPwhIz3RLqNjub7prd.png",
    educationMom: "https://i.pinimg.com/736x/32/65/59/326559552f4da7bac5b9905622e0146a.jpg",
    educationPro: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_20aWs0b-EtffgHifRifmT39bl9XZgX9nKSYpuB8tsWYhIQYPrD241ks&s=10"

  },
  // Блок "О нас" (Текст и команда)
  about: {
    title: "О студии ПАРКЕТ",
    text1: "Мы — выездная команда стилистов, специализирующаяся на подготовке спортсменов к турнирам по бальным танцам. За 12 лет работы мы собрали более 2400 образов на площадках ФТСАРР и РТС.",
    text2: "Наша главная цель — чтобы вы чувствовали себя уверенно на паркете. Мы строго соблюдаем регламенты федераций, используем только профессиональную косметику и средства сильной фиксации, которые выдерживают несколько туров.",
    image: "https://img.magnific.com/free-photo/businesspeople-meeting-office_23-2148908930.jpg?semt=ais_hybrid&w=740&q=80"
  },
  
  team: [
    {
      name: "Анна Смирнова",
      role: "Топ-мастер, основатель студии",
      experience: "12 лет опыта",
      desc: "Специализируется на европейской программе и сложных пучках с плетением.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVy-Eak3CywmAZsp1MtFFEDnWmTReya-pttUW4J180SQ&s=10"
    },
    {
      name: "Мария Иванова",
      role: "Премиум-мастер",
      experience: "8 лет опыта",
      desc: "Эксперт по латиноамериканской программе. Идеальные волны и текстуры.",
      image: "https://www.film.ru/sites/default/files/people/1589897-2432493.jpg"
    },
    {
      name: "Елена Петрова",
      role: "Стилист по макияжу",
      experience: "6 лет опыта",
      desc: "Создает сценический тон, который не течет под софитами и держится весь день.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRptZVnO2fFUvrqE_M1McdkiA4C3FBEdaHOtVwVnpQnbAssl5K8K5uQnbQN&s=10"
    }
  ],  
  // Прайс-лист (табы) 
  priceCategories: [
    {
      id: "kids",
      title: "Дети (Н/Е классы)",
      services: [
        { name: "Гладкий пучок (регламент)", price: 2500, time: 30 },
        { name: "Прическа + сценический тон", price: 4000, time: 60 }
      ]
    },
    {
      id: "juniors",
      title: "Юниоры-1, Юниоры-2",
      services: [
        { name: "Женский образ (Европейская программа)", price: 4500, time: 60 },
        { name: "Женский образ (Латина)", price: 4500, time: 60 },
        { name: "Мужской стайлинг (укладка + тон)", price: 3000, time: 30 }
      ]
    },
    {
      id: "adults",
      title: "Молодежь и Взрослые",
      services: [
        { name: "Полный женский образ (Стандарт)", price: 5500, time: 90 },
        { name: "Полный женский образ (Латина)", price: 5500, time: 90 },
        { name: "Мужской стайлинг", price: 3500, time: 40 }
      ]
    },
    {
      id: "proam",
      title: "Pro-Am",
      services: [
        { name: "Пакет для пары (Мужчина + Женщина)", price: 8000, time: 120 },
        { name: "Экспресс-сбор в 4 руки", price: 7000, time: 45 }
      ]
    }
  ],

  // Модификаторы и опции
  modifiers: [
    { id: "crystals", name: "Поклейка страз", price: 1000, time: 15 },
    { id: "extensions", name: "Накладные пряди", price: 1500, time: 20 },
    { id: "four_hands", name: "Работа в 4 руки", price: 3000, time: -20 } 
  ],
  
  grades: [
    { id: "base", name: "Базовый мастер", multiplier: 1 },
    { id: "top", name: "Топ-мастер", multiplier: 1.3 },
    { id: "premium", name: "Премиум", multiplier: 1.6 }
  ],

  locations: [
    { id: "hotel", name: "Выезд в отель", price: 1500 },
    { id: "venue", name: "Гримерка на турнире", price: 0 }
  ],

  // Календарь турниров (демо-данные)
  tournaments: [
    { 
      id: "t1", 
      date: "2027-01-20", 
      time: "09:00", 
      title: "Рождественский турнир", 
      city: "Санкт-Петербург", 
      venue: "Экспофорум",
      mapLink: "https://yandex.ru/maps/?text=Санкт-Петербург%2C%20Экспофорум" 
    },
    { 
      id: "t2", 
      date: "2027-02-14", 
      time: "10:00", 
      title: "Кубок Москвы", 
      city: "Москва", 
      venue: "Крокус Экспо",
      mapLink: "https://yandex.ru/maps/?text=Москва%2C%20Крокус%20Экспо" 
    },
    { 
      id: "t3", 
      date: "2027-03-05", 
      time: "11:00", 
      title: "Весенний бал", 
      city: "Москва", 
      venue: "Гостиный Двор",
      mapLink: "https://yandex.ru/maps/?text=Москва%2C%20Гостиный%20Двор" 
    },
    { 
      id: "t4", 
      date: "2027-03-21", 
      time: "09:30", 
      title: "Кубок Казани", 
      city: "Казань", 
      venue: "Kazan Expo",
      mapLink: "https://yandex.ru/maps/?text=Казань%2C%20Kazan%20Expo" 
    },
    { 
      id: "t5", 
      date: "2027-04-12", 
      time: "10:00", 
      title: "Бал Авроры", 
      city: "Санкт-Петербург", 
      venue: "СКК Петербургский",
      mapLink: "https://yandex.ru/maps/?text=Санкт-Петербург%2C%20СКК%20Петербургский" 
    },
    { 
      id: "t6", 
      date: "2027-04-25", 
      time: "09:00", 
      title: "Кубок Урала", 
      city: "Екатеринбург", 
      venue: "Екатеринбург-ЭКСПО",
      mapLink: "https://yandex.ru/maps/?text=Екатеринбург%2C%20Екатеринбург-ЭКСПО" 
    },
    { 
      id: "t7", 
      date: "2027-05-16", 
      time: "11:00", 
      title: "Черноморская жемчужина", 
      city: "Сочи", 
      venue: "Дворец спорта «Большой»",
      mapLink: "https://yandex.ru/maps/?text=Сочи%2C%20Дворец%20спорта%20Большой" 
    },
    { 
      id: "t8", 
      date: "2027-06-06", 
      time: "10:00", 
      title: "Московские звезды", 
      city: "Москва", 
      venue: "Крокус Экспо",
      mapLink: "https://yandex.ru/maps/?text=Москва%2C%20Крокус%20Экспо" 
    },
    { 
      id: "t9", 
      date: "2027-08-22", 
      time: "12:00", 
      title: "Летний кубок", 
      city: "Нижний Новгород", 
      venue: "Нижегородская ярмарка",
      mapLink: "https://yandex.ru/maps/?text=Нижний%20Новгород%2C%20Нижегородская%20ярмарка" 
    },
    { 
      id: "t10", 
      date: "2027-09-10", 
      time: "09:00", 
      title: "Кубок Дона", 
      city: "Ростов-на-Дону", 
      venue: "Ростов Арена",
      mapLink: "https://yandex.ru/maps/?text=Ростов-на-Дону%2C%20Ростов%20Арена" 
    },
    { 
      id: "t11", 
      date: "2027-09-26", 
      time: "10:30", 
      title: "Сибирский фестиваль", 
      city: "Новосибирск", 
      venue: "Новосибирск Экспоцентр",
      mapLink: "https://yandex.ru/maps/?text=Новосибирск%2C%20Новосибирск%20Экспоцентр" 
    },
    { 
      id: "t12", 
      date: "2027-10-15", 
      time: "11:00", 
      title: "Золотая осень", 
      city: "Москва", 
      venue: "ВТБ Арена",
      mapLink: "https://yandex.ru/maps/?text=Москва%2C%20ВТБ%20Арена" 
    },
    { 
      id: "t13", 
      date: "2027-10-28", 
      time: "10:00", 
      title: "Кубок Балтики", 
      city: "Калининград", 
      venue: "Янтарь-Холл",
      mapLink: "https://yandex.ru/maps/?text=Калининград%2C%20Янтарь-Холл" 
    },
    { 
      id: "t14", 
      date: "2027-11-12", 
      time: "09:00", 
      title: "Кубок Волги", 
      city: "Самара", 
      venue: "Самара Арена",
      mapLink: "https://yandex.ru/maps/?text=Самара%2C%20Самара%20Арена" 
    },
    { 
      id: "t15", 
      date: "2027-11-25", 
      time: "10:00", 
      title: "Северная Пальмира", 
      city: "Санкт-Петербург", 
      venue: "Экспофорум",
      mapLink: "https://yandex.ru/maps/?text=Санкт-Петербург%2C%20Экспофорум" 
    },
    { 
      id: "t16", 
      date: "2027-12-05", 
      time: "10:30", 
      title: "Гран-При Москвы", 
      city: "Москва", 
      venue: "Крокус Экспо",
      mapLink: "https://yandex.ru/maps/?text=Москва%2C%20Крокус%20Экспо" 
    },
    { 
      id: "t17", 
      date: "2027-12-19", 
      time: "11:00", 
      title: "Новогодний бал", 
      city: "Москва", 
      venue: "Гостиный Двор",
      mapLink: "https://yandex.ru/maps/?text=Москва%2C%20Гостиный%20Двор" 
    }
  ],

  // Портфолио 
  portfolio: [
    {
      id: 1,
      title: "Гладкий пучок для юниоров",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtFhPC2IktkCnZMGYcd2NAJyVGkbqYsqhi0uugMjS-mHwQN-ZqipLsfqk&s=10",
      age: "kids",
      program: "standard",
      style: "smooth",
      badge: "Фото с паркета"
    },
    {
      id: 2,
      title: "Латина с текстурированными волнами",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrNEU_vdcK6qVtfaADkEguMiookJFQpt0ajt5P4uizDg&s=10",
      age: "adults",
      program: "latin",
      style: "waves",
      badge: "Фото с паркета"
    },
    {
      id: 3,
      title: "Классический пучок для Н/Е классов",
      image: "https://academy-stylist.ru/img/7908666.jpg",
      age: "kids",
      program: "standard",
      style: "clean", // Без страз
      badge: "Фото с паркета"
    },
    {
      id: 4,
      title: "Текстурированный хвост для латины",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrxX4MRDAPU_KxbEZnbDE_0xbRcff3fZFHoVCPcd_r3Q&s=10",
      age: "kids",
      program: "latin",
      style: "texture",
      badge: "Фото с паркета"
    },
    {
      id: 5,
      title: "Гладкая ракушка без декора",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOFOSdBIFujgu52rK9a7BqEqPxZfHKa0VtKOn2QwAvsQSxdKdjZzXB3QRa&s=10",
      age: "adults",
      program: "standard",
      style: "smooth",
      badge: "Фото с паркета"
    },
    {
      id: 6,
      title: "Голливудские волны для латины",
      image: "https://volosomagia.ru/wp-content/uploads/2017/09/baln-2.jpg",
      age: "adults",
      program: "latin",
      style: "waves",
      badge: "Фото с паркета"
    },
    {
      id: 7,
      title: "Высокий пучок с косичкой",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWqJZOdL3K-pvTjliBvEVCfQ0cTkZ4eGLj94x6ahg8DZt1rDeMbp7p4e0N&s=10",
      age: "adults",
      program: "standard",
      style: "smooth",
      badge: "Фото с паркета"
    },
    {
      id: 8,
      title: "Легкие локоны для ювенальной латины",
      image: "https://academy-stylist.ru/img/7908698.jpg",
      age: "kids",
      program: "latin",
      style: "waves",
      badge: "Фото с паркета"
    },
    {
      id: 9,
      title: "Объемная текстура с плетением",
      image: "https://academy-stylist.ru/img/38859307.jpg",
      age: "adults",
      program: "latin",
      style: "texture",
      badge: "Фото с паркета"
    },
    {
      id: 10,
      title: "Строгий пучок с пробором (без страз)",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-A6wY-V956AGZSMiSbG4Boia3IaXzF69_pkukhdSKiVDsCnoQcBrZtHj6&s=10",
      age: "adults",
      program: "standard",
      style: "clean",
      badge: "Фото с паркета"
    }
  ],
   education: [
    {
      id: "edu1",
      tag: "Для родителей",
      title: "«Прическа за 15 минут»",
      description: "Практический урок для мам юных танцоров: как собрать гладкий пучок по регламенту Н/Е классов без страз, чем фиксировать и что положить в турнирный чемоданчик.",
      image: "https://i.pinimg.com/736x/84/5f/df/845fdfec1f9c338e8d8c736bff40c127.jpg",
      time: "12 ноября, 14:00–16:00 (МСК)",
      speaker: "Анна Смирнова (Топ-мастер)",
      contactText: "Записаться в Telegram",
      contactLink: "https://t.me/GoncharGr"
    },
    {
      id: "edu2",
      tag: "Для стилистов",
      title: "Курс «Сценический тон»",
      description: "Базовая подготовка стилиста к работе на турнирах: регламенты федераций, стойкость укладки на 8+ часов, техника крепления шпильками.",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS24luuHHHvca27xpZQJAG_-FigwFhEiBdkA1CWJu13M1qOJOaNnqL2YaA&s=10",
      time: "20–22 декабря, 10:00–18:00 (МСК)",
      speaker: "Мария Иванова (Премиум-мастер)",
      contactText: "Узнать подробности",
      contactLink: "https://wa.me/79991234567"
    }
  ]
};