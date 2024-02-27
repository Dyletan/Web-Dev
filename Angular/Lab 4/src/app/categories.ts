import {Product} from "./products";

export interface Category {
  id: number;
  name: string;
  image: string;
}

export const categories: Category[] = [
  {
    id: 1,
    name: 'TVs',
    image: "https://resources.cdn-kaspi.kz/img/m/p/h70/hca/63880820457502.jpg?format=gallery-large",
  },
  {
    id: 2,
    name: 'Watches',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/ha3/h60/63868199403550.jpg?format=gallery-large',
  },
  {
    id: 3,
    name: 'Keyboards',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h9f/h09/67666941640734.jpg?format=gallery-large',
  },
  {
    id: 4,
    name: 'Consoles',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h26/ha1/63982141407262.jpg?format=gallery-large',
  },
  {
    id: 5,
    name: 'E-readers',
    image: 'https://resources.cdn-kaspi.kz/img/m/p/h8b/hcb/64375762681886.jpg?format=gallery-large',
  },
  ]
