import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationMarocaine } from './nation-marocaine';

describe('NationMarocaine', () => {
  let component: NationMarocaine;
  let fixture: ComponentFixture<NationMarocaine>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationMarocaine]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationMarocaine);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
