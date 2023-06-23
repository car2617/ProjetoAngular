import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DiddyPage } from './diddy.page';

describe('DiddyPage', () => {
  let component: DiddyPage;
  let fixture: ComponentFixture<DiddyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(DiddyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
