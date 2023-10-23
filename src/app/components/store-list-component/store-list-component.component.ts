import { Component } from '@angular/core';
import { SellNumberService } from 'src/app/shared/service/sell-number.service';

@Component({
  selector: 'app-store-list-component',
  templateUrl: './store-list-component.component.html',
  styleUrls: ['./store-list-component.component.css'],
})
export class StoreListComponentComponent {
  sellNumbers: number = 0;

  constructor(private sellNumbersService: SellNumberService) {}

  postProduct() {
    return this.sellNumbersService
      .postSellNumber({
        id: Math.random().toString(),
        number: Math.random(),
      })
      .subscribe();
  }
}
