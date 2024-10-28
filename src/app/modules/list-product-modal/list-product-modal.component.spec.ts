import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductModalComponent } from './list-product-modal.component';

describe('ListProductModalComponent', () => {
  let component: ListProductModalComponent;
  let fixture: ComponentFixture<ListProductModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListProductModalComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
