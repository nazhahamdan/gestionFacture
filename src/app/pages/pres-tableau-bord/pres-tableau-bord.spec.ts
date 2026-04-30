import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PresTableauBord } from './pres-tableau-bord';

describe('PresTableauBord', () => {
  let component: PresTableauBord;
  let fixture: ComponentFixture<PresTableauBord>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PresTableauBord]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PresTableauBord);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
