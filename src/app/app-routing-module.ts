import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home.component/home.component';
import { LoginComponent } from './components/login.component/login.component';
import { CubosmarcaComponent } from './components/cubosmarca.component/cubosmarca.component';
import { ComprasComponent } from './components/compras.component/compras.component';
import { RealizarcompraComponent } from './components/realizarcompra.component/realizarcompra.component';
import { PerfilComponent } from './components/perfil.component/perfil.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "login", component: LoginComponent},
  {path: "cubosmarca/:marca", component: CubosmarcaComponent},
  {path: "compras", component: ComprasComponent},
  {path: "realizarcompra", component: RealizarcompraComponent},
  {path: "perfil", component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
