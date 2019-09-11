import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IShowBasics } from '../ishow-basics';
import {map} from 'rxjs/operators';

interface IShowBasicsData{
  name: string
  image: string
  summary: string
}

@Injectable({
  providedIn: 'root'
})
export class ShowService {

  constructor(private httpClient: HttpClient) { }

  getMainShow(search: string|number){
    return this.httpClient.get<IShowBasicsData>(`${environment.baseUrl}www.tvmaze.com/api#show-main-information/shows/:id${name}&appid=${environment.appId}`).pipe(map(data => this.transformToIShowBasics(data)))

  }
  private transformToIShowBasics(data: IShowBasicsData): IShowBasics { return { name: data.name, image: `http://static.tvmaze.com/uploads/images/medium_portrait/81/202627${data.image}.jpg`,summary: data.summary}}
}
function newFunction() {
  return `rxjs/operators`;
}

