import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MejorPromedioPorConsolaComponent } from './mejor-promedio-por-consola.component';

describe('MejorPromedioPorConsolaComponent', () => {
  let component: MejorPromedioPorConsolaComponent;
  let fixture: ComponentFixture<MejorPromedioPorConsolaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MejorPromedioPorConsolaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MejorPromedioPorConsolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
