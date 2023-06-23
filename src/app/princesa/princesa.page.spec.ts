import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PrincesaPage } from './princesa.page';

describe('PrincesaPage', () => {
  let component: PrincesaPage;
  let fixture: ComponentFixture<PrincesaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PrincesaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
