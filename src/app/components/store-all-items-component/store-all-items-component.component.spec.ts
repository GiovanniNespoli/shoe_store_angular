import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreAllItemsComponentComponent } from './store-all-items-component.component';

describe('StoreAllItemsComponentComponent', () => {
  let component: StoreAllItemsComponentComponent;
  let fixture: ComponentFixture<StoreAllItemsComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreAllItemsComponentComponent]
    });
    fixture = TestBed.createComponent(StoreAllItemsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
