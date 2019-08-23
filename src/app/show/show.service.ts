import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

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

}
