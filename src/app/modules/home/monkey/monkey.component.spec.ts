import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonkeyComponent } from './monkey.component';

describe('MonkeyComponent', () => {
  let component: MonkeyComponent;
  let fixture: ComponentFixture<MonkeyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonkeyComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonkeyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
