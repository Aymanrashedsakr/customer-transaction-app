import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionChartComponent } from './transaction-chart.component';

describe('TransactionChartComponent', () => {
  let component: TransactionChartComponent;
  let fixture: ComponentFixture<TransactionChartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TransactionChartComponent]
    });
    fixture = TestBed.createComponent(TransactionChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
