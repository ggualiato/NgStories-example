import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itens = [
    { img: 'http://placekitten.com/200/350', nome: 'Giovanni' },
    { img: 'http://placekitten.com/300/380', nome: 'Diogo' },
    { img: 'http://placekitten.com/400/300', nome: 'Farias' },
    { img: 'http://placekitten.com/400/500', nome: 'Pacheco' },
    { img: 'http://placekitten.com/350/500', nome: 'Diego' },
    { img: 'http://placekitten.com/200/200', nome: 'Gualiato' },
    { img: 'http://placekitten.com/200/300', nome: 'Lucas' },
    { img: 'http://placekitten.com/200/300', nome: 'Matheus' },
    { img: 'http://placekitten.com/200/300', nome: 'Gustavo' },
    { img: 'http://placekitten.com/200/300', nome: 'Pachequilha' },
    { img: 'http://placekitten.com/300/300', nome: 'Rato' },
    { img: 'http://placekitten.com/200/300', nome: 'Jamal' },
    { img: 'http://placekitten.com/208/300', nome: 'Giovanni' },
    { img: 'http://placekitten.com/200/300', nome: 'Giovanni' },
    { img: 'http://placekitten.com/200/300', nome: 'Giovanni' },
    { img: 'http://placekitten.com/290/300', nome: 'Giovanni' }
  ]

  selectedItem: Object

  selectItem(item: Object): void {
    if (this.selectedItem == item) {
      this.selectedItem = {
        
      }
    } else {
      this.selectedItem = item
    }
  }
}
