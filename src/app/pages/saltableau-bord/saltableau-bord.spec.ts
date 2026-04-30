import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SALTableauBord } from './saltableau-bord';

describe('SALTableauBord', () => {
  let component: SALTableauBord;
  let fixture: ComponentFixture<SALTableauBord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SALTableauBord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SALTableauBord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
