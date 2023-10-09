import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAllItemsComponent } from './store-all-items.component';

describe('StoreAllItemsComponent', () => {
  let component: StoreAllItemsComponent;
  let fixture: ComponentFixture<StoreAllItemsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreAllItemsComponent]
    });
    fixture = TestBed.createComponent(StoreAllItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
