import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubPoliticsComponent } from './sub-politics.component';

describe('SubPoliticsComponent', () => {
  let component: SubPoliticsComponent;
  let fixture: ComponentFixture<SubPoliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubPoliticsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
