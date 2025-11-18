import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RealizarcompraComponent } from './realizarcompra.component';

describe('RealizarcompraComponent', () => {
  let component: RealizarcompraComponent;
  let fixture: ComponentFixture<RealizarcompraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RealizarcompraComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RealizarcompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
