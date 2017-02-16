import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions, URLSearchParams } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';

import { Card } from '../object/card';

@Injectable()
export class HomeService {
  private apikey = 'dBWIlWqISKmshm0STMR7beE5z7vgp1XFnbLjsnwS9AN2yIc7Kk';
  private hsUrlBase = 'https://omgvamp-hearthstone-v1.p.mashape.com/';
  private hsUrlSearch = this.hsUrlBase + 'cards/search/';

  constructor(private http: Http) {}

  public searchCard(name: string): Promise<Card[]> {
    let finalUrlSearch = this.hsUrlSearch + name;
    let headers = new Headers({ 'X-Mashape-Key': this.apikey });

    let params: URLSearchParams = new URLSearchParams();
    params.set('collectible', '1');

    let options = new RequestOptions({
      headers: headers,
      search: params
    });

    return this.http.get(finalUrlSearch, options)
                    .toPromise()
                    .then(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  private handleError(error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `$(error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Promise.reject(errMsg);
  }
}
