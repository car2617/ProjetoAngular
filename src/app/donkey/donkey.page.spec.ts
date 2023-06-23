import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DonkeyPage } from './donkey.page';

describe('DonkeyPage', () => {
  let component: DonkeyPage;
  let fixture: ComponentFixture<DonkeyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DonkeyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
