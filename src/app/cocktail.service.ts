import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cocktail } from './models/cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor(public http: HttpClient) {}

  getCocktails(): Observable<Cocktail[]> {
    return this.http.get<Cocktail[]>('app/cocktails.json');
  }
}
