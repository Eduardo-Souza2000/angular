import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { LoginComponent } from './sistema/login/login.component';
import { IndexComponent } from './index/index.component';
import { CarroListComponent } from './app/carros/carro-list/carro-list.component';
import { LivrosComponent } from './livros/livros.component';

const routes: Routes = [
{path: "", redirectTo:"login", pathMatch:"full" },
{path: "login", component: LoginComponent},
{path:"admin", component: IndexComponent, children: [
  {path:"pessoas", component: ListaPessoasComponent},
  {path:"carro", component: CarroListComponent},
  {path:"livro", component: LivrosComponent}

]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
