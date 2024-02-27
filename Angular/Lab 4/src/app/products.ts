export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
  rating: number;
  kaspi_link: string;
  category: string;
  likes: number;
}

export const products = [
  {
    id: 1,
    name: 'Samsung UE43T5300AUXCE 109cm',
    price: 150000,
    description: 'Watch HDR content with enhanced clarity and accurate color reproduction',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-large",
    rating: 4.9,
    kaspi_link: 'https://kaspi.kz/shop/p/samsung-ue43t5300auxce-109-sm-chernyi-100182013/?c=750000000',
    category: 'TVs',
    likes: 0,
  },
  {
    id: 2,
    name: 'Samsung QE65QN900AUXCE 165cm',
    price: 2870000,
    description: 'Unbelievable picture: Quantum Mini LEDs deliver deep blacks, incredible brightness, and lifelike colors in near-8K resolution',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h47/h2c/64056338808862.jpg?format=gallery-large",
    rating: 4.8,
    kaspi_link: 'https://kaspi.kz/shop/p/samsung-qe65qn900auxce-165-sm-chernyi-102724545/?c=750000000',
    category: 'TVs',
    likes: 0,
  },
  {
    id: 3,
    name: 'LG OLED65G3RLA 165',
    price: 1500000,
    description: 'Dive into OLED perfection with the LG OLED65G3RLA 165cm (65") TV',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h03/h16/82632103067678.jpg?format=gallery-large",
    rating: 5,
    kaspi_link: 'https://kaspi.kz/shop/p/lg-oled65g3rla-165-sm-chernyi-112414590/?c=750000000',
    category: 'TVs',
    likes: 0,
  },
  {
    id: 4,
    name: 'Blackton Bt 4302B 109',
    price: 93000,
    description: 'Great budget TV with big screen. Full HD',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h24/h1d/84655752183838.jpg?format=gallery-large',
    rating: 0,
    kaspi_link: 'https://kaspi.kz/shop/p/blackton-bt-4302b-109-sm-chernyi-115151472/?c=750000000',
    category: 'TVs',
    likes: 0,
  },
  {
    id: 5,
    name: 'Sony PlayStation 5 Slim',
    price: 264649,
    description: 'Next-gen gaming console with ultra-high-speed SSD, 4K graphics, and immersive 3D audio',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-large',
    rating: 4.9,
    kaspi_link: 'https://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
    category: 'Consoles',
    likes: 0,
  },
  {
    id: 6,
    name: 'Xbox Series X 1TB',
    price: 247000,
    description: 'Powerful gaming with 4K resolution, high frame rates, and fast load times',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-large',
    rating: 4.9,
    kaspi_link: 'https://kaspi.kz/shop/p/xbox-series-x-1tb-chernyi-100824897/?c=750000000',
    category: 'Consoles',
    likes: 0,
  },
  {
    id: 7,
    name: 'Amazon Kindle Paper 2021',
    price: 97000,
    description: 'Compact e-reader with glare-free display, adjustable light, and long battery life',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/hcb/64375762681886.jpg?format=gallery-large',
    rating: 5,
    kaspi_link: 'https://kaspi.kz/shop/p/amazon-kindle-paper-2021-chernyi-102838488/?c=750000000',
    category: 'E-readers',
    likes: 0,
  },
  {
    id: 8,
    name: 'Apple Watch SE 40mm',
    price: 130000,
    description: 'Fitness, heart tracking, and style in a sleek and compact design.',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-large',
    rating: 4.9,
    kaspi_link: 'https://kaspi.kz/shop/p/apple-watch-se-40-mm-chernyi-100568123/?c=750000000',
    category: 'Watches',
    likes: 0,
  },
  {
    id: 9,
    name: 'Varmilo VEM108 Warrior-Soar',
    price: 147890,
    description: 'The Varmilo VEM108 Warrior-Soar combines functionality and aesthetics with its military-themed design',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hda/hae/82441930735646.jpg?format=gallery-large',
    rating: 0,
    kaspi_link: 'https://kaspi.kz/shop/p/varmilo-vem108-warrior-soar-a36a036a8a3a01a032-zelenyi-112268194/?c=750000000',
    category: 'Keyboards',
    likes: 0,
  },
  {
    id: 10,
    name: 'Keychron Q1 Q1M3',
    price: 130000,
    description: 'The Keychron Q1 Q1M3 is a fully assembled mechanical keyboard that combines premium features and unlimited customization possibilities',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/h09/67666941640734.jpg?format=gallery-large',
    rating: 5,
    kaspi_link: 'https://kaspi.kz/shop/p/keychron-q1-q1m3-chernyi-107959129/?c=750000000',
    category: 'Keyboards',
    likes: 0,
  },
  {
    id: 11,
    name: 'Ajazz AK820 ',
    price: 24000,
    description: 'Дизайн: игровая\n' +
      'Тип: механическая\n' +
      'Назначение: для настольного компьютера\n' +
      'Тип подключения: проводная\n' +
      'Тип механических клавиш: Linea',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hde/hf9/84418208956446.jpg?format=gallery-large',
    rating: 5,
    kaspi_link: 'https://kaspi.kz/shop/p/ajazz-ak820-seryi-114228960/?c=750000000',
    category: 'Keyboards',
    likes: 0,
  },
  {
    id: 12,
    name: 'Apple Watch SE 2 Gen',
    price: 133506,
    description: 'Поддержка платформ: iOS\n' +
      '    Материал корпуса: алюминий\n' +
      '    Цвет корпуса: черно-синий\n' +
      '    Форма корпуса: прямоугольная\n' +
      '    Интерфейсы: Bluetooth, ,Wi-Fi\n' +
      '    Технология экрана: OLED',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h5e/84373305294878.jpg?format=gallery-large',
    rating: 5,
    kaspi_link: 'https://kaspi.kz/shop/p/apple-watch-se-2-gen-2023-gps-m-l-44-mm-cherno-sinii-114111998/?c=750000000',
    category: 'Watches',
    likes: 0,
  },
  {
    id: 13,
    name: 'Huawei Watch GT 4 46mm',
    price: 68349,
    description: 'Поддержка платформ: Android, ,iOS\n' +
      '    Материал корпуса: нерж. сталь\n' +
      '    Цвет корпуса: серебристый-черный\n' +
      '    Форма корпуса: круглая\n' +
      '    Интерфейсы: Bluetooth\n' +
      '    Технология экрана: AMOLED',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h20/83882559864862.jpg?format=gallery-large',
    rating: 5,
    kaspi_link: 'https://resources.cdn-kaspi.kz/img/m/p/hc8/h20/83882559864862.jpg?format=gallery-large',
    category: 'Watches',
    likes: 0,
  },
  {
    id: 14,
    name: 'Samsung Galaxy Watch 5 Pro',
    price: 77500,
    description: 'Поддержка платформ: Android\n' +
      '    Материал корпуса: титан\n' +
      '    Цвет корпуса: серый\n' +
      '    Форма корпуса: круглая\n' +
      '    Интерфейсы: Bluetooth, ,Wi-Fi\n' +
      '    Технология экрана: Super AMOLED\n' +
      '    Объем оперативной памяти: 1.5 Гб\n' +
      '    Объем встроенной памяти: 16 Гб\n' +
      '    Время работы: 40 часов',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h88/64414071029790.jpg?format=gallery-large',
    rating: 5,
    kaspi_link: 'https://kaspi.kz/shop/p/samsung-galaxy-watch-5-pro-45-mm-seryi-106174847/?c=750000000',
    category: 'Watches',
    likes: 0,
  },
  {
    id: 15,
    name: 'ONYX EDISON',
    price: 169990,
    description: 'Встроенная подсветка: Да',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hdb/hac/66423827431454.jpg?format=gallery-large',
    rating: 5,
    kaspi_link: 'https://kaspi.kz/shop/p/onyx-edison-belyi-107846569/?c=750000000',
    category: 'E-readers',
    likes: 0,
  },
  {
    id: 16,
    name: 'POCKET BOOK 700 Era PB700-U-16-WW',
    price: 113513 ,
    description: 'Встроенная подсветка: Да',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/h21/64463008923678.jpg?format=gallery-large',
    rating: 5,
    kaspi_link: 'https://kaspi.kz/shop/p/pocket-book-700-era-pb700-u-16-ww-chernyi-106600203/?c=750000000',
    category: 'E-readers',
    likes: 0,
  },
  {
    id: 17,
    name: 'PocketBook 628',
    price: 82000,
    description: 'Встроенная подсветка: Да',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h40/h1e/63950230683678.jpg?format=gallery-large',
    rating: 5,
    kaspi_link: 'https://kaspi.kz/shop/p/pocketbook-628-krasnyi-100862217/?c=750000000',
    category: 'E-readers',
    likes: 0,
  },
  {
    id: 18,
    name: 'Xbox Series S',
    price: 170000,
    description: 'Тип: стационарная\n' +
      'Объем SSD: 512.0 Гб\n' +
      'Поддержка UHD (4K): Да\n' +
      'Тип носителя для игр: нет',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/hf5/63937788182558.jpg?format=gallery-large',
    rating: 5,
    kaspi_link: 'https://kaspi.kz/shop/p/xbox-series-s-belyi-100793537/?c=750000000',
    category: 'Consoles',
    likes: 0,
  },
  {
    id: 19,
    name: ' Ajazz AK820',
    price: 24000,
    description: '    Дизайн: игровая\n' +
      '    Тип: механическая\n' +
      '    Назначение: для настольного компьютера\n' +
      '    Тип подключения: проводная\n' +
      '    Тип механических клавиш: GX Blue',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/hab/h6c/84416275054622.jpg?format=gallery-large',
    rating: 5,
    kaspi_link: 'https://kaspi.kz/shop/p/ajazz-ak820-fioletovyi-114228954/?c=750000000',
    category: 'Keyboards',
    likes: 0,
  },
  {
    id: 20,
    name: 'LEAVEN K620',
    price: 9700,
    description: '    Дизайн: игровая\n' +
      '    Тип: механическая\n' +
      '    Назначение: для настольного компьютера\n' +
      '    Тип подключения: проводная',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h73/h8c/64562900140062.jpg?format=gallery-large',
    rating: 5,
    kaspi_link: 'https://kaspi.kz/shop/p/leaven-k620-chernyi-106785769/?c=750000000',
    category: 'Keyboards',
    likes: 0,
  },
];
