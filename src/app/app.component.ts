import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  itens = [
    { img: '', nome: 'People' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' },
    // { img: 'https://png.icons8.com/android/1600/user.png', nome: 'People 1' }
  ]

  unformatedData: any

  constructor() {
  }

  ngOnInit() {

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
