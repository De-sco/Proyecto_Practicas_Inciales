import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './components/navigator/navigator.component';
import { GameListComponent } from './components/game-list/game-list.component';

// Aqui hay que importar lo que esta en la api (en el el video min: 1:52)
import { GamesService } from './services/games.service';
import { InicioComponent } from './components/inicio/inicio.component';
import { ComentariosComponent } from './components/comentarios/comentarios.component';
import { EditarJuegoComponent } from './components/editar-juego/editar-juego.component';
import { BibliotecaJuegosComponent } from './components/biblioteca-juegos/biblioteca-juegos.component';
import { PerfilComponent } from './components/perfil/perfil.component';
import { UsuariosRegistradosComponent } from './components/usuarios-registrados/usuarios-registrados.component';
import { MasJuegosEnBibliotecaComponent } from './components/mas-juegos-en-biblioteca/mas-juegos-en-biblioteca.component';
import { MejorPromedioPorConsolaComponent } from './components/mejor-promedio-por-consola/mejor-promedio-por-consola.component';
import { JuegosPublicadosEnAnioComponent } from './components/juegos-publicados-en-anio/juegos-publicados-en-anio.component';
import { AgregarJuegoComponent } from './components/agregar-juego/agregar-juego.component';

@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    GameListComponent,
    InicioComponent,
    ComentariosComponent,
    EditarJuegoComponent,
    BibliotecaJuegosComponent,
    PerfilComponent,
    UsuariosRegistradosComponent,
    MasJuegosEnBibliotecaComponent,
    MejorPromedioPorConsolaComponent,
    JuegosPublicadosEnAnioComponent,
    AgregarJuegoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [
    GamesService // Proporciona los metodos para pedir los datos
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
