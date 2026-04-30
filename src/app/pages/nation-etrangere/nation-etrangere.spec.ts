import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NationEtrangere } from './nation-etrangere';

describe('NationEtrangere', () => {
  let component: NationEtrangere;
  let fixture: ComponentFixture<NationEtrangere>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NationEtrangere]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NationEtrangere);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
