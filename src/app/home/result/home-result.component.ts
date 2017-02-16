import { Component, Input } from '@angular/core';
import { Card } from '../../object/card';

@Component({
  selector: 'card-result',
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ '../home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home-result.component.html'
})
export class HomeResultComponent {
  @Input()
  public cardLists: Card[];
  public notFoundMessage = 'No card is found';

  public isCardFound(): boolean {
    return this.cardLists != null &&
           this.cardLists.length > 0;
  }
}
