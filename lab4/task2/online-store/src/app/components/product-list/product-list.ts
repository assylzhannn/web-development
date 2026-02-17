import { Component } from '@angular/core';
import { ProductModel } from '../../models/product.model';
import { ProductCard } from '../product-card/product-card';
import { NgFor } from '@angular/common';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductCard, NgFor],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products: ProductModel[] = [
    {
      id: 1,
      name: 'Смартфон Apple iPhone 17 Pro 256Gb оранжевый',
      description:'Apple iPhone 17 Pro 256Gb — это воплощение инноваций и стиля, сочетающее в себе непревзойденную производительность, потрясающую камеру и яркий OLED-дисплей.',
      price: 762455,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p18/p96/64168413.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p29/p1e/64464409.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pfc/p95/64168414.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pc3/p95/64168416.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/apple-iphone-17-pro-256gb-oranzhevyi-145467625/?c=750000000'
    },
    {
      id: 2,
      name: 'Смартфон Apple iPhone 15 128Gb черный',
      description:'Apple iPhone 15 - смартфон, сочетающий в себе передовую оптику, мощный процессор, долгоиграющую батарею и запоминающийся дизайн.',
      price: 385447,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h1d/hfc/86303745998878.jpg?format=gallery-medium',
      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/h65/h81/86275143532574.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h6d/h89/86275143565342.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hbf/h6b/86275143598110.jpg?format=gallery-medium'
     ],
     link: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000'    
    },
    {
      id:3,
      name: 'Электронная книга ONYX BOOX Go Color 7 (Gen II) черный',
      description:'ONYX BOOX Go Color 7 (Gen II) — современный цветной ридер, который сочетает в себе высокое разрешение и удобство использования.',
      price: 129990,
      rating:3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p97/p58/50611308.png?format=gallery-large',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pc1/p5e/50611322.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p86/p5f/50611329.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p4f/p08/50611338.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/onyx-boox-go-color-7-gen-ii-chernyi-140657740/?c=750000000'
    },
    {
      id:4,
      name: 'Фитнес-браслет WHOOP 5.0 PEAK черный + подписка 12 месяцев',
      description: 'WHOOP 5.0 Peak — продвинутый фитнес-браслет для здоровья, восстановления и продуктивности. ',
      price: 146166,
      rating: 3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p23/p59/50063334.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pab/pce/50063335.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pe8/p49/53950455.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/p46/53950456.jpeg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/whoop-5-0-peak-chernyi-podpiska-12-mesjatsev-141065130/?c=750000000'
    },
    {
      id:5,
      name: 'Клавиатура Ultra-S ULTKB01 белый',
      description: 'Механическая проводная клавиатура от ULTRA-S — это сочетание стиля, надежности и максимального комфорта для геймеров и профессионалов 💻🎮.',
      price: 14237,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p72/p2a/60798561.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pe3/p2a/60798565.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p1b/p2b/60798567.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p37/p2b/60798568.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/ultra-s-ultkb01-belyi-144686947/?c=750000000'
    },
    {
      id:6,
      name: 'Wi-Fi роутер Huawei H-153/381',
      description: 'cell Aulet 5G📦 Қораптан бірден дайын — жинақта Kcell SIM-картасы бар. Тек қосыңыз да, пайдаланыңыз!',
      price: 32990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pc2/p93/55806953.png?format=gallery-medium',
      images:[
        'https://resources.cdn-kaspi.kz/img/m/p/pa6/p93/55806954.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p8a/p93/55806955.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p6e/p93/55806956.png?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/wi-fi-router-huawei-h-153-381-143295438/?c=750000000'
    },
    {
      id:7,
      name: 'Xerox Phaser 3020BI белый',
      description: 'Xerox Phaser 3020 - это монохромный лазерный принтер, который отлично подойдет для персонального использования. Белый матовый корпус и стильный дизайн будут смотреться органомично на любом письменном столе.',
      price: 69990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hd2/hf9/63757710032926.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h5c/hf3/63757713440798.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha3/h9b/63757714096158.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h15/hf9/63757715472414.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/xerox-phaser-3020bi-belyi-1500208/?c=750000000'
    },
    {
      id:8,
      name: 'Стабилизатор напряжения Ресанта АСН-1000/1-Ц',
      description: 'Ресанта АСН-1000/1-Ц — это надежный стабилизатор напряжения, который обеспечивает стабильную работу ваших электроприборов и защищает их от перепадов напряжения.',
      price: 19890,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hb0/he3/63765255815198.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h8d/h03/63765262106654.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/ha8/hc8/63765267087390.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h22/h8b/63765276262430.jpg?format=gallery-medium'
      ],
      link: 'https://kaspi.kz/shop/p/stabilizator-naprjazhenija-resanta-asn-1000-1-ts-5400768/?c=750000000'
    },
    {
      id:9,
      name:'Увлажнитель воздуха MiBaby Mi001 белый',
      description: 'Портативный увлажнитель воздуха используют, как аромадиффузор и наслаждаются ароматерапией в квартире или офисе. Бытовая и климатическая техника должна быть у каждого, особенно, когда есть новорожденные дети.',
      price: 4999,
      rating:3,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p67/p2d/8582066.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p2a/p23/8582069.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p54/p2b/8582071.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p28/p32/8582073.jpeg?format=gallery-medium'
      ] ,
      link:'https://kaspi.kz/shop/p/uvlazhnitel-vozduha-mibaby-mi001-belyi-130030210/?c=750000000'
    },
    {
      id: 10,
      name:'Тепловентилятор Denx DX3905 красный',
      description: 'Тепловентилятор Denx — тёплый комфорт за минуты.Замерзаете в гараже, офисе или на даче? C Тепловентилятор Denx вы получите уютное тепло всего за пару минут! ' ,
      price: 7900,
      rating: 4,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pa3/p1c/72215749.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p86/p1c/72215748.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p47/p1f/72215752.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pa3/p1c/72215749.png?format=gallery-medium'
      ],
      link:'https://kaspi.kz/shop/p/teploventiljator-denx-dx3905-krasnyi-147894617/?c=750000000'
    }
  ];

}
