import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckItComponent } from './check-it.component';

describe('CheckItComponent', () => {
  let component: CheckItComponent;
  let fixture: ComponentFixture<CheckItComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckItComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckItComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
