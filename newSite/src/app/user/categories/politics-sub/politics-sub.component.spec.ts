import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsSubComponent } from './politics-sub.component';

describe('PoliticsSubComponent', () => {
  let component: PoliticsSubComponent;
  let fixture: ComponentFixture<PoliticsSubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoliticsSubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PoliticsSubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
