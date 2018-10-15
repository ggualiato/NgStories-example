import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stories-item',
  templateUrl: './stories-item.component.html',
  styleUrls: ['./stories-item.component.css']
})
export class StoriesItemComponent implements OnInit {
  @Input() img: string = ''
  @Input() nome: string = ''
  @Input() isSelected

  constructor() { }

  ngOnInit() {
  }

  select(): void {
    this.isSelected = this.isSelected ? false : true
  }

}
