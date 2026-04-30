import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresGestionFacture } from './pres-gestion-facture';

describe('PresGestionFacture', () => {
  let component: PresGestionFacture;
  let fixture: ComponentFixture<PresGestionFacture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresGestionFacture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresGestionFacture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
