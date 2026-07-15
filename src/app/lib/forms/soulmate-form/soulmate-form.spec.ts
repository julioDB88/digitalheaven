import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoulmateForm } from './soulmate-form';

describe('SoulmateForm', () => {
  let component: SoulmateForm;
  let fixture: ComponentFixture<SoulmateForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoulmateForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoulmateForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
