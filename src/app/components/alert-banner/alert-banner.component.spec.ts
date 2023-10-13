import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertBannerComponent } from './alert-banner.component';

describe('AlertBannerComponent', () => {
  let component: AlertBannerComponent;
  let fixture: ComponentFixture<AlertBannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlertBannerComponent]
    });
    fixture = TestBed.createComponent(AlertBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
