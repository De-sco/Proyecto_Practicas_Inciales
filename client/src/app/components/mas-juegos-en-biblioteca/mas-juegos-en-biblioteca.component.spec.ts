import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MasJuegosEnBibliotecaComponent } from './mas-juegos-en-biblioteca.component';

describe('MasJuegosEnBibliotecaComponent', () => {
  let component: MasJuegosEnBibliotecaComponent;
  let fixture: ComponentFixture<MasJuegosEnBibliotecaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MasJuegosEnBibliotecaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MasJuegosEnBibliotecaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
