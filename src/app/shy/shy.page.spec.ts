import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShyPage } from './shy.page';

describe('ShyPage', () => {
  let component: ShyPage;
  let fixture: ComponentFixture<ShyPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ShyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
