import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './Components/menu-superior/menu-superior.component';
import { ListaPessoasComponent } from './Components/lista-pessoas/lista-pessoas.component';
import { HeaderComponent } from './Components/header/header.component';
import { LoginComponent } from './Components/sistema/login/login.component';
import { IndexComponent } from './Components/index/index.component';
import { FooterComponent } from './Components/footer/footer.component';
import { CarrosComponent } from './Components/carros/carros.component';
import { LivrosComponent } from './Components/livros/livros.component';
import { AdicionarComponent } from './Components/lista-pessoas/adicionar/adicionar.component';
import { AdicionarlivroComponent } from './Components/livros/adicionarlivro/adicionarlivro.component';
import { AdicionarcarroComponent } from './Components/carros/adicionarcarro/adicionarcarro.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    ListaPessoasComponent,
    HeaderComponent,
    LoginComponent,
    IndexComponent,
    FooterComponent,
    CarrosComponent,
    LivrosComponent,
    AdicionarComponent,
    AdicionarlivroComponent,
    AdicionarcarroComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
