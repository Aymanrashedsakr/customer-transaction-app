import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCustomerTableComponent } from './my-customer-table.component';

describe('MyCustomerTableComponent', () => {
  let component: MyCustomerTableComponent;
  let fixture: ComponentFixture<MyCustomerTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MyCustomerTableComponent]
    });
    fixture = TestBed.createComponent(MyCustomerTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
