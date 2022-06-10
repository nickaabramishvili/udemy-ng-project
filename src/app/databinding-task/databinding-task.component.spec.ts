import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatabindingTaskComponent } from './databinding-task.component';

describe('DatabindingTaskComponent', () => {
  let component: DatabindingTaskComponent;
  let fixture: ComponentFixture<DatabindingTaskComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatabindingTaskComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatabindingTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
