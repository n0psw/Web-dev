export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    img: string;
    img2: string;
    img3: string;
    url: string;
    rating: number;
  }
  
  export const products = [
    {
      id: 1,
      name: 'IPhone 15',
      price: 899,
      description: 'The best phone',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/he2/h1d/83559338442782.png?format=gallery-medium',
      img2: 'https://resources.cdn-kaspi.kz/img/m/p/h49/hd7/83559338475550.png?format=gallery-medium',
      img3: 'https://resources.cdn-kaspi.kz/img/m/p/h23/hce/83559138459678.png?format=gallery-medium',
      url: 'https://kaspi.kz/shop/p/apple-iphone-15-128gb-chernyi-113137790/?c=750000000',
      rating: 2,
    },
    {
      id: 2,
      name: 'IPhone 15 Pro',
      price: 999,
      description: 'The best phone',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h00/83559620739102.jpg?format=gallery-medium',
      img2: 'https://resources.cdn-kaspi.kz/img/m/p/hbf/h7c/83559620804638.jpg?format=gallery-medium',
      img3: 'https://resources.cdn-kaspi.kz/img/m/p/h54/haa/83559620870174.jpg?format=gallery-medium',
      url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-256gb-seryi-113138213/?c=750000000',
      rating: 3,
    },
    {
      id: 3,
      name: 'IPhone 15 Pro Max',
      price: 1099,
      description: 'The best phone',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h64/h50/83559848575006.png?format=gallery-medium',
      img2: 'https://resources.cdn-kaspi.kz/img/m/p/hc5/hce/83559848640542.png?format=gallery-medium',
      img3: 'https://resources.cdn-kaspi.kz/img/m/p/hab/hed/83559848706078.png?format=gallery-medium',
      url: 'https://kaspi.kz/shop/p/apple-iphone-15-pro-max-256gb-sinii-113138428/?c=750000000',
      rating: 4,
    },
    {
      id: 4,
      name: 'Apple AirPods 2nd generation',
      price: 199,
      description: 'The best headphones',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h12/hc8/84594232688670.jpg?format=gallery-medium',
      img2: 'https://resources.cdn-kaspi.kz/img/m/p/hfb/h52/84594232819742.jpg?format=gallery-medium',
      img3: 'https://resources.cdn-kaspi.kz/img/m/p/ha0/h83/84594232885278.jpg?format=gallery-medium',
      url: 'https://kaspi.kz/shop/p/apple-airpods-2nd-generation-belyi-114927908/?c=750000000',
      rating: 5,
    },
    {
      id: 5,
      name: 'Apple AirPods 3',
      price: 299,
      description: 'The best headphones',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h31/hd7/64362668556318.jpg?format=gallery-medium',
      img2: 'https://resources.cdn-kaspi.kz/img/m/p/he8/h47/64362670358558.jpg?format=gallery-medium',
      img3: 'https://resources.cdn-kaspi.kz/img/m/p/h63/h66/64362740416542.jpg?format=gallery-medium',
      url: 'https://kaspi.kz/shop/p/apple-airpods-3-with-lightning-charging-case-belyi-106667987/?c=750000000',
      rating: 4,
    },
    {
      id: 6,
      name: 'Apple AirPods Pro 2nd generation',
      price: 399,
      description: 'The best headphones',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h07/84108189630494.jpg?format=gallery-medium',
      img2: 'https://resources.cdn-kaspi.kz/img/m/p/h03/h0e/84108189696030.jpg?format=gallery-medium',
      img3: 'https://resources.cdn-kaspi.kz/img/m/p/h14/h8a/84108189761566.jpg?format=gallery-medium',
      url: 'https://kaspi.kz/shop/p/apple-airpods-pro-2nd-generation-with-wireless-magsafe-charging-case-belyi-113677582/?c=750000000',
      rating: 3,
    },
    {
      id: 7,
      name: 'Apple iPad Air',
      price: 799,
      description: 'The best tablet',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/hff/h81/64382011146270.jpg?format=gallery-medium',
      img2: 'https://resources.cdn-kaspi.kz/img/m/p/hee/h25/64382014128158.jpg?format=gallery-medium',
      img3: 'https://resources.cdn-kaspi.kz/img/m/p/h1f/h3f/64382016389150.jpg?format=gallery-medium',
      url: 'https://kaspi.kz/shop/p/apple-ipad-air-2022-wi-fi-10-9-djuim-8-gb-64-gb-seryi-104235453/?c=750000000',
      rating: 2,
    },
    {
      id: 8,
      name: 'Apple iPad mini',
      price: 599,
      description: 'The best tablet',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h40/h26/63991942381598.jpg?format=gallery-medium',
      img2: 'https://resources.cdn-kaspi.kz/img/m/p/hb6/h7c/63991945035806.jpg?format=gallery-medium',
      img3: 'https://resources.cdn-kaspi.kz/img/m/p/hed/hfd/63991948574750.jpg?format=gallery-medium',
      url: 'https://kaspi.kz/shop/p/apple-ipad-mini-2021-wi-fi-8-3-djuim-4-gb-64-gb-serebristyi-102301519/?c=750000000',
      rating: 4,
    },
    {
      id: 9,
      name: 'Apple MacBook Air 15',
      price: 1399,
      description: 'The best laptop',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h65/h41/81547557240862.jpg?format=gallery-medium',
      img2: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h60/81547557306398.jpg?format=gallery-medium',
      img3: 'https://resources.cdn-kaspi.kz/img/m/p/h1c/hd3/81547557371934.jpg?format=gallery-medium',
      url: 'https://kaspi.kz/shop/p/apple-macbook-air-15-2023-mqkw3-sinii-111217728/?c=750000000',
      rating: 5,
    },
    {
      id: 10,
      name: 'Apple MacBook Pro 16',
      price: 1699,
      description: 'The best laptop',
      img: 'https://resources.cdn-kaspi.kz/img/m/p/h88/h18/64372891975710.jpg?format=gallery-medium',
      img2: 'https://resources.cdn-kaspi.kz/img/m/p/h4a/h4f/64372927299614.jpg?format=gallery-medium',
      img3: 'https://resources.cdn-kaspi.kz/img/m/p/hd3/hb3/64372936474654.jpg?format=gallery-medium',
      url: 'https://kaspi.kz/shop/p/apple-macbook-pro-16-mk183-seryi-102892102/?c=750000000',
      rating: 5,
    },
  ];
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */