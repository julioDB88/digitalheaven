import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Who } from './who';

describe('Who', () => {
  let component: Who;
  let fixture: ComponentFixture<Who>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Who]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Who);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
