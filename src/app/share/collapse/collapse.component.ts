import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'li-collapse',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss']
})
export class CollapseComponent implements OnInit {

  @Input() isFirst: boolean;

  nameId: string;

  constructor() {
    this.nameId = Math.random().toString(36).substr(2, 9)
  }

  ngOnInit() {
  }

}
