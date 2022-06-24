import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpeakCloudComponent } from './speak-cloud.component';

describe('SpeakCloudComponent', () => {
  let component: SpeakCloudComponent;
  let fixture: ComponentFixture<SpeakCloudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SpeakCloudComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SpeakCloudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
