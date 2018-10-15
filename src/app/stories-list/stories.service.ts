import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class StoriesService {

  url: string = 'https://randomuser.me/api/?results=30&inc=picture,name'

  constructor(private http: HttpClient) { }

  getItens(): any {
    return this.http.get(this.url)
  }

}
