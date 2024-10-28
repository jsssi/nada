import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterProductModalComponent } from './register-product-modal.component';

describe('RegisterProductModalComponent', () => {
  let component: RegisterProductModalComponent;
  let fixture: ComponentFixture<RegisterProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegisterProductModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegisterProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
