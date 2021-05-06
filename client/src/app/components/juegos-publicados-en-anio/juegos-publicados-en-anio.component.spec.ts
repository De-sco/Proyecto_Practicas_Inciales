import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JuegosPublicadosEnAnioComponent } from './juegos-publicados-en-anio.component';

describe('JuegosPublicadosEnAnioComponent', () => {
  let component: JuegosPublicadosEnAnioComponent;
  let fixture: ComponentFixture<JuegosPublicadosEnAnioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JuegosPublicadosEnAnioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JuegosPublicadosEnAnioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
