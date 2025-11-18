import { NgModule, provideBrowserGlobalErrorListeners } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing-module';
import { App } from './app';
import { HomeComponent } from './components/home.component/home.component';
import { MenuComponent } from './components/menu.component/menu.component';
import { LoginComponent } from './components/login.component/login.component';
import { PerfilComponent } from './components/perfil.component/perfil.component';
import { ComprasComponent } from './components/compras.component/compras.component';
import { RealizarcompraComponent } from './components/realizarcompra.component/realizarcompra.component';
import { CubosmarcaComponent } from './components/cubosmarca.component/cubosmarca.component';
import { FormsModule } from '@angular/forms';
import { provideHttpClient } from '@angular/common/http';
import { CubosService } from '../service/CubosService';
import { AuthService } from '../service/AuthService';

@NgModule({
  declarations: [
    App,
    HomeComponent,
    MenuComponent,
    LoginComponent,
    PerfilComponent,
    ComprasComponent,
    RealizarcompraComponent,
    CubosmarcaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideHttpClient(),
    provideBrowserGlobalErrorListeners(),
    CubosService,
    AuthService
  ],
  bootstrap: [App]
})
export class AppModule { }
