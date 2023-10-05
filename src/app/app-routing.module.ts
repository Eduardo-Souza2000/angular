import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { LoginComponent } from './sistema/login/login.component';
import { IndexComponent } from './index/index.component';
import { CarroListComponent } from './app/carros/carro-list/carro-list.component';
import { LivrosComponent } from './livros/livros.component';
import { AdicionarComponent } from './lista-pessoas/adicionar/adicionar.component';
import { AdicionarlivroComponent } from './livros/adicionarlivro/adicionarlivro.component';
import { AdicionarcarroComponent } from './carros/adicionarcarro/adicionarcarro.component';
import { EditarComponent } from './lista-pessoas/editar/editar.component';
import { EditarcarroComponent } from './carros/editarcarro/editarcarro.component';
import { EditarlivroComponent } from './livros/editarlivro/editarlivro.component';


const routes: Routes = [
{path: "", redirectTo:"login", pathMatch:"full" },
{path: "login", component: LoginComponent},
{path:"admin", component: IndexComponent, children: [
  {path:"pessoas", component: ListaPessoasComponent},
  {path:"pessoas/adicionar", component: AdicionarComponent},
  {path:"pessoas/editar/:id", component: EditarComponent},


  {path:"carro", component: CarroListComponent},
  {path:"carro/adicionar", component: AdicionarcarroComponent},
  {path:"carro/editar/:id", component: EditarcarroComponent},


  {path:"livro", component: LivrosComponent},
  {path:"livro/adicionar", component: AdicionarlivroComponent},
  {path:"livro/editar/:id", component: EditarlivroComponent}

]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
