import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Soulmate } from './soulmate';

describe('Soulmate', () => {
  let component: Soulmate;
  let fixture: ComponentFixture<Soulmate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Soulmate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Soulmate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
