import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailFacture } from './detail-facture';

describe('DetailFacture', () => {
  let component: DetailFacture;
  let fixture: ComponentFixture<DetailFacture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailFacture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailFacture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
