import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicTable2Component } from './dynamic-table2.component';

describe('DynamicTable2Component', () => {
  let component: DynamicTable2Component;
  let fixture: ComponentFixture<DynamicTable2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynamicTable2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DynamicTable2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
