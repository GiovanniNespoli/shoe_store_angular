import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StoreListComponentComponent } from './store-list-component.component';

describe('StoreListComponentComponent', () => {
  let component: StoreListComponentComponent;
  let fixture: ComponentFixture<StoreListComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StoreListComponentComponent]
    });
    fixture = TestBed.createComponent(StoreListComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
