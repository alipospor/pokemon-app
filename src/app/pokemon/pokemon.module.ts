import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/* Componentes */
import { PokemonComponent } from './pokemon.component';
import { PokemonDetalhesComponent } from './pokemon-detalhes/pokemon-detalhes.component';


/* Po Ui components */
import { PoTemplatesModule } from '@po-ui/ng-templates';
import { PoModule } from '@po-ui/ng-components';

/* Module */
import { SharedModule } from '../shared/shared.module';
import { Routes } from '@angular/router';


const ROUTES: Routes = [
  { path: '', component: PokemonComponent, pathMatch: 'full' },
  { path: 'detalhe/:pokemon', component: PokemonDetalhesComponent }
];


@NgModule({
  entryComponents: [
    PokemonComponent,
    PokemonDetalhesComponent
  ],
  declarations: [
    PokemonComponent,
    PokemonDetalhesComponent
  ],
  imports: [
    SharedModule,

    PoTemplatesModule,
    PoModule

  ],
  exports: [
    PokemonComponent,
    PokemonDetalhesComponent
  ]
})

export class PokemonModule { }
