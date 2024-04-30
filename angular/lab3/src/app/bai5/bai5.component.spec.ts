import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Bai5Component } from './bai5.component';

describe('Bai5Component', () => {
  let component: Bai5Component;
  let fixture: ComponentFixture<Bai5Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Bai5Component]
    });
    fixture = TestBed.createComponent(Bai5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
