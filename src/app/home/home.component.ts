import {
  Component,
  OnInit
} from '@angular/core';

import { AppState } from '../app.service';
import { HomeService } from './home.service';
import { HomeResultComponent } from './result/home-result.component';
import { Title } from './title';
import { XLargeDirective } from './x-large';
import { Card } from '../object/card';

@Component({
  // The selector is what angular internally uses
  // for `document.querySelectorAll(selector)` in our index.html
  // where, in this case, selector is the string 'home'
  selector: 'home',  // <home></home>
  // We need to tell Angular's Dependency Injection which providers are in our app.
  providers: [
    Title
  ],
  // Our list of styles in our component. We may add more to compose many styles together
  styleUrls: [ './home.component.css' ],
  // Every Angular template is first compiled by the browser before Angular runs it's compiler
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  // Set our default values
  public errorMessage: string;
  public searchString = '';
  public cardLists: Card[];

  // TypeScript public modifiers
  constructor(
    public appState: AppState,
    public title: Title,
    private homeService: HomeService
  ) {}

  public trackByCard(index: number, card: any) {
    return card.cardId;
  }

  public ngOnInit() {
    console.log('hello `Home` component');
    // this.title.getData().subscribe(data => this.data = data);
  }

  public submitState(value: string) {
    this.homeService.searchCard(value)
                    .then(
                      (cards) => this.cardLists = cards,
                      (error) => this.errorMessage = <any> error);
  }
}
