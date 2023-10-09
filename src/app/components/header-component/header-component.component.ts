import { Component } from '@angular/core';

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

  constructor() {}
}
