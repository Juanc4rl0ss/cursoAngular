import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplorirarComponent } from './ejemplorirar.component';

describe('EjemplorirarComponent', () => {
  let component: EjemplorirarComponent;
  let fixture: ComponentFixture<EjemplorirarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EjemplorirarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EjemplorirarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
