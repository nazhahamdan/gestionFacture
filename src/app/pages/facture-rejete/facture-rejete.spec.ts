import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FactureRejete } from './facture-rejete';

describe('FactureRejete', () => {
  let component: FactureRejete;
  let fixture: ComponentFixture<FactureRejete>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FactureRejete]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FactureRejete);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
