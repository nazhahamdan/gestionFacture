import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionPrestataire } from './gestion-prestataire';

describe('GestionPrestataire', () => {
  let component: GestionPrestataire;
  let fixture: ComponentFixture<GestionPrestataire>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionPrestataire]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionPrestataire);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
