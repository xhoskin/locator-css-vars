import { Component, OnInit, Input } from '@angular/core';
import { Car } from '../car';

@Component({
  selector: 'car-card',
  templateUrl: './car-card.component.html',
  styleUrls: ['./car-card.component.css']
})
export class CarCardComponent implements OnInit {
  @Input() car: Car;

  constructor() { }

  ngOnInit() {
  }

}
