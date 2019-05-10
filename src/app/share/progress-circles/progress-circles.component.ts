import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'li-progress-circles',
  templateUrl: './progress-circles.component.html',
  styleUrls: ['./progress-circles.component.scss']
})
export class ProgressCirclesComponent implements OnInit {

  @Input() value: number;
  @Input() positionText: string;

  constructor() { }

  ngOnInit() {
  }

  get mappingValue(): number {
    // (value - in_min) * (out_max - out_min) / (in_max - in_min) + out_min; Formule MapRange
    return this.value * ((-1250) - (-1000)) / 100 + (-1000);
  }

}
