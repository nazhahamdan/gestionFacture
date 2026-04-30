import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgessTraitement } from './progess-traitement';

describe('ProgessTraitement', () => {
  let component: ProgessTraitement;
  let fixture: ComponentFixture<ProgessTraitement>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProgessTraitement]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgessTraitement);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
