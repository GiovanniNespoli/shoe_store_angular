import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopIconComponentComponent } from './shop-icon-component.component';

describe('ShopIconComponentComponent', () => {
  let component: ShopIconComponentComponent;
  let fixture: ComponentFixture<ShopIconComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ShopIconComponentComponent]
    });
    fixture = TestBed.createComponent(ShopIconComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
