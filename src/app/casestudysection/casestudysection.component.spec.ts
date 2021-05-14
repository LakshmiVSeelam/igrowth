import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasestudysectionComponent } from './casestudysection.component';

describe('CasestudysectionComponent', () => {
  let component: CasestudysectionComponent;
  let fixture: ComponentFixture<CasestudysectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasestudysectionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasestudysectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
