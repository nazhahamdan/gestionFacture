import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SALgestionFactures } from './salgestion-factures';

describe('SALgestionFactures', () => {
  let component: SALgestionFactures;
  let fixture: ComponentFixture<SALgestionFactures>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SALgestionFactures]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SALgestionFactures);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
