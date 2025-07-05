import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
products = [
  {
    name: 'Traditional Kumkum Box',
    image: 'assets/products/kumkum.jpg',
    description: 'A perfect gift for spiritual ceremonies.'
  },
  {
    name: 'Brass Diya',
    image: 'assets/products/diya.jpg',
    description: 'Elegant return gift with cultural touch.'
  },
  {
    name: 'Eco Plant Pot',
    image: 'assets/products/plant.jpg',
    description: 'Gift of green with customizable pot.'
  }
];

}
