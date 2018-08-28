import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-stories-item',
  templateUrl: './stories-item.component.html',
  styleUrls: ['./stories-item.component.css'],
  // animations: [
  //   trigger('itemState', [
  //     state('pulled', style({
  //       transform: 'scale(0.5)'
  //     })),
  //     state('normal', style({
  //       transform: 'scale(1)'
  //     })),
  //     transition('normal => pulled', animate('100ms ease-in')),
  //     // transition('pulled => normal', animate('100ms ease-out'))
  //   ])
  // ]
})
export class StoriesItemComponent implements OnInit {
  @Input() img: string = ''
  @Input() nome: string = ''
  @Input() isSelected

  state = 'normal'

  constructor() { }

  ngOnInit() {
  }

  select(): void {
    this.isSelected = this.isSelected ? false : true

    console.log(this.isSelected);
  }

}
