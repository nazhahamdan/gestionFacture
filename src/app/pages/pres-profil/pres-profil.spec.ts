import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresProfil } from './pres-profil';

describe('PresProfil', () => {
  let component: PresProfil;
  let fixture: ComponentFixture<PresProfil>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresProfil]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresProfil);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
