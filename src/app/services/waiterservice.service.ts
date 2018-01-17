import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class WaiterserviceService {

  baseUrl: string;

  constructor(public http: Http) {
    console.log('Waiter Serivce connected');
    this.baseUrl = 'https://restaurant-webapp.herokuapp.com/';
  }

  getOpenedAccounts() {
    return this.http.get(this.baseUrl + 'accountstatus')
      .map(res => res.json());
  }

  closeAccount(account) {
    return this.http.put(this.baseUrl + 'account/' + account._id, account)
      .map(res => res.json());
  }

  removeItemAccount(removeData) {

    return this.http.put(this.baseUrl + 'account/' + removeData.accountId + '/deleteitem/' + removeData.itemId, removeData)
      .map(res => res.json());
  }

}
