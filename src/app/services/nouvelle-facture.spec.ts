import { TestBed } from '@angular/core/testing';

import { NouvelleFacture } from './nouvelle-facture';

describe('NouvelleFacture', () => {
  let service: NouvelleFacture;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NouvelleFacture);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
