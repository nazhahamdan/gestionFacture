import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresAcceuil } from './pres-acceuil';

describe('PresAcceuil', () => {
  let component: PresAcceuil;
  let fixture: ComponentFixture<PresAcceuil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresAcceuil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresAcceuil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
