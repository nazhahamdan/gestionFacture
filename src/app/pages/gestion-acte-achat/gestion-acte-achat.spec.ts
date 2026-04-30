import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionActeAchat } from './gestion-acte-achat';

describe('GestionActeAchat', () => {
  let component: GestionActeAchat;
  let fixture: ComponentFixture<GestionActeAchat>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GestionActeAchat]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GestionActeAchat);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
