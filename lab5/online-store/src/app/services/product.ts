import { Injectable, signal } from '@angular/core';
import { Category } from '../models/category.model';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  private categories: Category[] = [
    { id: 1, name: 'Books' },
    { id: 2, name: 'Devices' },
    { id: 3, name: 'Toys' },
    { id: 4, name: 'Jewelry' }
  ];
  
  private productsSignal = signal<Product[]>([
    // Books (categoryId: 1)
    { id: 101, name: 'Книга Исабеков Д.: Сүйекші', description: 'Дулат Исабековтің шығармаларында қоғам, әлеумет, не тарих емес, адам жаны әрдайым басты планда.', price: 1500, rating: 4.9, likes: 0, categoryId: 1, image: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/hd7/63877660246046.jpg?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/isabekov-d-s-ieksh--102332094/?c=750000000' },
    { id: 102, name: 'Книга Исабеков Д.: Гауһар тас', description: 'Погрузитесь в мир казахской классики с книгой "Гауһар тас" от талантливого автора Дулата Исабекова', price: 1800, rating: 4.8, likes: 0, categoryId: 1, image: 'https://resources.cdn-kaspi.kz/img/m/p/hd7/h6d/65021525098526.jpg?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/isabekov-d-gau-ar-tas-106028074/?c=750000000' },
    { id: 103, name: 'Книга Клир Д.: Атомные привычки', description: 'Лучшая деловая книга 2018 года по версии Fast Company.', price: 3470, rating: 4.9, likes: 0, categoryId: 1, image: 'https://resources.cdn-kaspi.kz/img/m/p/h4c/h9a/86244289314846.png?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/klir-d-atomnye-privychki-117680550/?c=750000000' },
    { id: 104, name: 'Книга Қошым-Ноғай Б.: Әліппе', description: 'Әліппе баланы қазақ тілінде оқытып үйрету үшін дәстүрлі тәсілдерге негізделіп жасалған.', price: 1800, rating: 4.6, likes: 0, categoryId: 1, image: 'https://resources.cdn-kaspi.kz/img/m/p/pfe/pe8/35666124.jpg?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/-oshym-no-ai-b-l-ppe-26011863/?c=750000000' },
    { id: 105, name: 'Книга Налоговый Кодекс 2026', description: 'Налоговый Кодекс Республики Казахстан вступающий в действие с 1 января 2026 года 376 страниц на русском языке.', price: 4950, rating: 4.7, likes: 0, categoryId: 1, image: 'https://resources.cdn-kaspi.kz/img/m/p/p77/p28/94515624.png?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/nalogovyi-kodeks-2026-145848714/?c=750000000' },

    // Devices (categoryId: 2)
    { id: 201, name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый', description: 'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.', price: 762455, rating: 5, likes: 100, categoryId: 2, image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000' },
    { id: 202, name: 'Смартфон Apple iPhone 15 128Gb черный', description: 'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн.', price: 385447, rating: 4, likes: 0, categoryId: 2, image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000' },
    { id: 203, name: 'Электронная книга ONYX BOOX Go Color 7 (Gen II) черный', description: 'ONYX BOOX Go Color 7 (Gen II) — современный цветной ридер, который сочетает в себе высокое разрешение и удобство использования.', price: 129990, rating: 3, likes: 0, categoryId: 2, image: 'https://resources.cdn-kaspi.kz/img/m/p/p97/p58/50611308.png?format=gallery-large', images: [], link: 'https://kaspi.kz/shop/p/onyx-boox-go-color-7-gen-ii-chernyi-140657740/?c=750000000' },
    { id: 204, name: 'Фитнес-браслет WHOOP 5.0 PEAK черный + подписка 12 месяцев', description: 'WHOOP 5.0 Peak — продвинутый фитнес-браслет для здоровья, восстановления и продуктивности.', price: 146166, rating: 3, likes: 0, categoryId: 2, image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p59/50063334.png?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/whoop-5-0-peak-chernyi-podpiska-12-mesjatsev-141065130/?c=750000000' },

    // Toys (categoryId: 3)
    { id: 301, name: 'Сортер Kabi Геометрия 5в1', description: 'Популярная развивающая игрушка.', price: 763, rating: 4.9, likes: 0, categoryId: 3, image: 'https://resources.cdn-kaspi.kz/img/m/p/h15/ha8/64309288468510.jpg?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/sorter-kabi-geometrija-5v1-mul-tikolor-101702936/?c=750000000' },
    { id: 302, name: 'Мягкая игрушка пингвин, 21 см', description: 'Мягкая игрушка в виде пингвина высотой 21 см станет отличным подарком для детей от 2 лет', price: 1490, rating: 4.7, likes: 0, categoryId: 3, image: 'https://resources.cdn-kaspi.kz/img/m/p/h55/h63/67735203971102.jpg?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/mjagkaja-igrushka-pingvin-vysota-21-sm-mul-tikolor-108379343/?c=750000000' },
    { id: 303, name: 'Планшет BOTAQAN BTN00002', description: 'Балаларға арналған ең үздік Smart Botaqan планшеті сізге көмекке келеді.', price: 29000, rating: 4.6, likes: 0, categoryId: 3, image: 'https://resources.cdn-kaspi.kz/img/m/p/h0f/h0e/85980769255454.jpg?format=gallery-large', images: [], link: 'https://kaspi.kz/shop/p/planshet-botaqan-btn00002-plastik-104884779/?c=750000000' },
    { id: 304, name: 'Фотоаппарат Кошка', description: 'Фотоаппарат Кошка — весёлое и увлекательное устройство для юных фотографов, позволяющее запечатлеть самые яркие моменты и мгновенно распечатать их!', price: 12050, rating: 4.5, likes: 0, categoryId: 3, image: 'https://resources.cdn-kaspi.kz/img/m/p/h33/h7f/84428554567710.jpg?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/fotoapparat-koshka-plastik-114271249/?c=750000000' },
    { id: 305, name: 'Конструктор LELEBROTHER Военный корабль , деталей 524 шт', description: 'Количество деталей указано по стандарту китайских производителей: считается не количество отдельных предметов, а количество "частиц" — то есть выступающих точек (как у LEGO).', price: 3964, rating: 4.4, likes: 0, categoryId: 3, image: 'https://resources.cdn-kaspi.kz/img/m/p/pea/p24/55987185.jpg?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/lelebrother-voennyi-korabl-8870-detalei-524-sht-120634927/?c=750000000' },

    // Jewelry (categoryId: 4)
    { id: 401, name: 'Серьги N бижутерный сплав, стразы', description: 'Серьги N — стильный аксессуар, который добавит изысканности вашему образу.', price: 217, rating: 4.8, likes: 0, categoryId: 4, image: 'https://resources.cdn-kaspi.kz/img/m/p/hca/h18/69466220003358.jpg?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/ser-gi-n-bizhuternyi-splav-strazy-109090969/?c=750000000' },
    { id: 402, name: 'Серьги SOKOLOV 94023517 вес 2.53 г серебро, фианит', description: 'Эти изысканные серьги от бренда SOKOLOV станут прекрасным дополнением к любому наряду.', price: 16982, rating: 4.9, likes: 0, categoryId: 4, image: 'https://resources.cdn-kaspi.kz/img/m/p/hef/h03/63961828917278.jpg?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/ser-gi-sokolov-94023517-ves-2-53-g-serebro-fianit-101000139/?c=750000000' },
    { id: 403, name: 'Конго SOKOLOV 94140045 вес 1.67 г серебро, без вставок', description: 'Серьги-конго SOKOLOV 94140045 — это стильный аксессуар, который добавит изысканности вашему образу. Изготовленные из серебра 925 пробы, они отличаются легкостью и комфортом в носке.', price: 12500, rating: 4.7, likes: 0, categoryId: 4, image: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h81/64226199175198.jpg?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/kongo-sokolov-94140045-ves-1-67-g-serebro-bez-vstavok-102798796/?c=750000000' },
    { id: 404, name: 'Кольцо Ipekyolu Jewellery 0.5 карат 2100/021123AY', description: 'то изысканное кольцо из белого золота, размер 18.5, идеально подходит для женщин, которые ценят элегантность и стиль.', price: 2482, rating: 4.5, likes: 0, categoryId: 4, image: 'https://resources.cdn-kaspi.kz/img/m/p/pdf/p96/93190219.bin?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/ipekyolu-jewellery-0-5-karat-2100-021123ay-razmer-18-5-ves-2-g-serebro-muassanit-114422455/?c=750000000' },
    { id: 405, name: 'Кольцо SOKOLOV 94011721 размер 17 вес 0.88 г серебро, фианит', description: 'Изящное кольцо SOKOLOV 94011721** — это прекрасный выбор для женщин, ценящих классическую красоту и элегантность.', price: 7203, rating: 4.6, likes: 0, categoryId: 4, image: 'https://resources.cdn-kaspi.kz/img/m/p/p9f/pfd/34628193.jpg?format=gallery-medium', images: [], link: 'https://kaspi.kz/shop/p/sokolov-94011721-razmer-17-ves-0-88-g-serebro-fianit-104387956/?c=750000000' }
  ]);

  getCategories() {
    return this.categories;
  }

  getProducts() {
    return this.productsSignal();
  }

  getProductsByCategory(categoryId: number) {
    return this.productsSignal().filter(p => p.categoryId === categoryId);
  }

  likeProduct(productId: number) {
    this.productsSignal.update(products =>
      products.map(p => 
        p.id === productId ? { ...p, likes: p.likes + 1 } : p
      )
    );
  }

  deleteProduct(productId: number) {
    this.productsSignal.update(products =>
      products.filter(p => p.id !== productId)
    );
  }
}