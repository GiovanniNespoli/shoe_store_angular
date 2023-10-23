import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ISellNumber } from 'src/app/models/sellNumber.model';

@Injectable({
  providedIn: 'root',
})
export class SellNumberService {
  apiUrl = 'https://6335a65aea0de5318a1837de.mockapi.io/store/totalSellNumber';

  constructor(private httpClient: HttpClient) {}

  getSellNumber() {
    return this.httpClient.get<ISellNumber[]>(this.apiUrl);
  }

  postSellNumber(sellNumber: ISellNumber) {
    return this.httpClient.post<ISellNumber>(this.apiUrl, sellNumber );
  }
}
