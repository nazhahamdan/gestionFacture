import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuSal } from './menu-sal';

describe('MenuSal', () => {
  let component: MenuSal;
  let fixture: ComponentFixture<MenuSal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MenuSal]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuSal);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
