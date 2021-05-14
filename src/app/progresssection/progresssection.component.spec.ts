import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresssectionComponent } from './progresssection.component';

describe('ProgresssectionComponent', () => {
  let component: ProgresssectionComponent;
  let fixture: ComponentFixture<ProgresssectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgresssectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgresssectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
