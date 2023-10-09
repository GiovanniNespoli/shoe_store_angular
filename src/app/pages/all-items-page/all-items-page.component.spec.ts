import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllItemsPageComponent } from './all-items-page.component';

describe('AllItemsPageComponent', () => {
  let component: AllItemsPageComponent;
  let fixture: ComponentFixture<AllItemsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllItemsPageComponent]
    });
    fixture = TestBed.createComponent(AllItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
