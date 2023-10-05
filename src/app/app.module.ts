import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuSuperiorComponent } from './menu-superior/menu-superior.component';
import { ListaPessoasComponent } from './lista-pessoas/lista-pessoas.component';
import { HeaderComponent } from './header/header.component';
import { LoginComponent } from './sistema/login/login.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { CarrosComponent } from './carros/carros.component';
import { LivrosComponent } from './livros/livros.component';
import { AdicionarComponent } from './lista-pessoas/adicionar/adicionar.component';
import { EditarComponent } from './lista-pessoas/editar/editar.component';

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
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
