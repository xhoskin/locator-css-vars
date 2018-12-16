import { Component } from '@angular/core';
import { Car } from './car';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cars: Car[] = [
    {
      title: 'Toyota Camry',
      info: '30 283 км, 2015 г.',
      price: '1 200 000'
    },
    {
      title: 'Kia Rio',
      info: '10 20 км, 2015 г.',
      price: '500 000'
    },
  ];
}
