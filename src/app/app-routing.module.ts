import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PokemonDetalhesComponent } from './pokemon/pokemon-detalhes/pokemon-detalhes.component';
import { PokemonComponent } from './pokemon/pokemon.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      { path: '', component: PokemonComponent },
      { path: 'pokemon-detalhe/:pokemon', component: PokemonDetalhesComponent },
    ],
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
