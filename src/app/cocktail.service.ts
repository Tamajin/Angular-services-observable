import { Injectable } from '@angular/core';
import { Cocktail } from './models/cocktail';

@Injectable({
  providedIn: 'root',
})
export class CocktailService {
  constructor() {}

  getCocktails(): Cocktail[] {
    return [
      {
        name: 'mojito',
        prix: 12,
        image:
          'https://previews.123rf.com/images/radionphoto/radionphoto1702/radionphoto170200022/71577588-mojito-cocktail-alcool-classique-isol%C3%A9-sur-fond-blanc.jpg',
      },
      {
        name: 'mojito2',
        prix: 15,
        image:
          'https://previews.123rf.com/images/radionphoto/radionphoto1702/radionphoto170200022/71577588-mojito-cocktail-alcool-classique-isol%C3%A9-sur-fond-blanc.jpg',
      },
      {
        name: 'mojito3',
        prix: 11,
        image:
          'https://previews.123rf.com/images/radionphoto/radionphoto1702/radionphoto170200022/71577588-mojito-cocktail-alcool-classique-isol%C3%A9-sur-fond-blanc.jpg',
      },
    ];
  }
}
