import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourItemsPageComponent } from './your-items-page.component';

describe('YourItemsPageComponent', () => {
  let component: YourItemsPageComponent;
  let fixture: ComponentFixture<YourItemsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [YourItemsPageComponent]
    });
    fixture = TestBed.createComponent(YourItemsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
