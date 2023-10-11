import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaPessoasComponent } from './Components/lista-pessoas/lista-pessoas.component';
import { LoginComponent } from './Components/sistema/login/login.component';
import { IndexComponent } from './Components/index/index.component';
import { LivrosComponent } from './Components/livros/livros.component';
import { AdicionarComponent } from './Components/lista-pessoas/adicionar/adicionar.component';
import { AdicionarlivroComponent } from './Components/livros/adicionarlivro/adicionarlivro.component';
import { AdicionarcarroComponent } from './Components/carros/adicionarcarro/adicionarcarro.component';
import { CarrosComponent } from './Components/carros/carros.component';


const routes: Routes = [
{path: "", redirectTo:"login", pathMatch:"full" },
{path: "login", component: LoginComponent},
{path:"admin", component: IndexComponent, children: [
  {path:"pessoas", component: ListaPessoasComponent},
  {path:"pessoas/adicionar", component: AdicionarComponent},



  {path:"carro", component: CarrosComponent},
  {path:"carro/adicionar", component: AdicionarcarroComponent},

  {path:"livro", component: LivrosComponent},
  {path:"livro/adicionar", component: AdicionarlivroComponent},

]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
