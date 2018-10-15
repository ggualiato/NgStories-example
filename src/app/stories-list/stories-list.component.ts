import { Component, OnInit } from '@angular/core';
import { StoriesService } from 'app/stories-list/stories.service';

@Component({
  selector: 'app-stories-list',
  templateUrl: './stories-list.component.html',
  styleUrls: ['./stories-list.component.css'],
  providers: [StoriesService]
})
export class StoriesListComponent implements OnInit {

  itens: Array<Object> = []
  selectedItem: Object

  constructor(
    private storiesService: StoriesService
  ) { }

  ngOnInit() {
    this.storiesService.getItens().subscribe((data) => {
      this.formatData(data.results)
    })
  }

  formatData(rawData: Array<any>) {
    rawData.forEach(el => {
      const newObj = {
        img: el.picture.medium,
        nome: el.name.first
      }

      this.itens.push(newObj)
    })
  }

  selectItem(item: Object): void {
    if (this.selectedItem == item) {
      this.selectedItem = {

      }
    } else {
      this.selectedItem = item
    }
  }

}
