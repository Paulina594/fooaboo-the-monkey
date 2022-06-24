import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackgroundChoiceComponent } from './background-choice.component';

describe('BackgroundChoiceComponent', () => {
  let component: BackgroundChoiceComponent;
  let fixture: ComponentFixture<BackgroundChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackgroundChoiceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BackgroundChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
