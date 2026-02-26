import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent {

  drinks = [
    { name: 'Caramel Macchiato', description: 'Rich espresso with caramel.' },
    { name: 'Matcha Latte', description: 'Fresh green tea with milk.' },
    { name: 'Cold Brew', description: 'Smooth cold coffee.' }
  ];

  buy(name: string) {
    alert(name + ' added to cart!');
  }

}