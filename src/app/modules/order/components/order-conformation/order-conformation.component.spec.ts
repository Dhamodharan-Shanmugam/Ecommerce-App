import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderConformationComponent } from './order-conformation.component';

describe('OrderConformationComponent', () => {
  let component: OrderConformationComponent;
  let fixture: ComponentFixture<OrderConformationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderConformationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderConformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
