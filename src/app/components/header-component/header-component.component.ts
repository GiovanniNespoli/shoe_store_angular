import { Component } from '@angular/core';
import { SellNumberService } from 'src/app/shared/service/sell-number.service';

@Component({
  selector: 'app-header-component',
  templateUrl: './header-component.component.html',
  styleUrls: ['./header-component.component.css'],
})
export class HeaderComponentComponent {
  name: string = 'Giovanni';
  public isMenuOpen: boolean = false;
  public onSidenavClick(): void {
    this.isMenuOpen = false;
  }

  sellNumbers: number = 0;

  constructor(private sellNumbersService: SellNumberService) {
    console.log('Teste', this.showAllSellNumbers());
  }

  showAllSellNumbers() {
    this.sellNumbersService
      .getSellNumber()
      .subscribe((numbers) => (this.sellNumbers = numbers.length));
  }
}
