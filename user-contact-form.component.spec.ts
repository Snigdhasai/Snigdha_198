import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserContactFromComponent } from './user-contact-form.component';

describe('UserContactFromComponent', () => {
  let component: UserContactFromComponent;
  let fixture: ComponentFixture<UserContactFromComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserContactFromComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserContactFromComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
