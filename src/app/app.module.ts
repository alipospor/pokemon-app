import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PoAccordionModule, PoAvatarModule, PoDividerModule, PoInfoModule, PoListViewModule, PoModule, PoPageModule, PoTagModule } from '@po-ui/ng-components';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PoTemplatesModule } from '@po-ui/ng-templates';

import { PokemonComponent } from './pokemon/pokemon.component';
import { PokemonDetalhesComponent } from './pokemon/pokemon-detalhes/pokemon-detalhes.component';
import { CamelCasePipe } from './shared/pipes/camel-case.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PokemonComponent,
    PokemonDetalhesComponent,
    CamelCasePipe,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    PoModule,
    RouterModule.forRoot([]),
    PoAvatarModule,
    PoListViewModule,
    PoPageModule,
    PoDividerModule,
    PoInfoModule,
    PoTagModule,
    FormsModule,
    PoAccordionModule,
    PoTemplatesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
