import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthFailedPageComponent } from './auth-failed-page.component';

describe('AuthFailedPageComponent', () => {
  let component: AuthFailedPageComponent;
  let fixture: ComponentFixture<AuthFailedPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AuthFailedPageComponent]
    });
    fixture = TestBed.createComponent(AuthFailedPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
