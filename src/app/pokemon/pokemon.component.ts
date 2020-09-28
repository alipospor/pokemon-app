import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paging } from '../core/models/paging.model';

import { PokemonService } from './pokemon.service';

import { PokemonBase } from 'src/app/core/models/pokemon-base.model';
import { PokemonTable } from '../core/models/pokemon-table.model';

import { PoListViewModule } from '@po-ui/ng-components';
import { PoPageModule } from '@po-ui/ng-components';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})

export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  private _paginacao: Paging = new Paging();

  public tablePokemon: Array<PokemonTable> = [];

  ngOnInit() {
    this.pokemonService.obterPokemons()
      .subscribe(dados => {
        
        this.ajustarDadosListagem(dados);
      }
      );

  }

  pokemon(nome?: string) {
    console.log(nome)
  }

  ajustarDadosListagem(pokemons?: PokemonBase) {
    let auxiliar: PokemonTable[] = [];

    if (pokemons) {

      pokemons.results.forEach(pokemon => {
        this.pokemonService.obterPorNome(pokemon.name).subscribe(
          retorno => {
            let custom: PokemonTable = new PokemonTable();

            custom.ndex = retorno.id;
            custom.pokemon = retorno.name;
            custom.imagem = retorno.sprites.front_default;

            custom.tipo = '';

            retorno.types.forEach(element => {
              custom.tipo += element.type.name + ", ";
            });

            custom.tipo = custom.tipo.substr(0, custom.tipo.length - 2).toUpperCase();

            auxiliar.push(custom);
          }
        )
      });

      this.tablePokemon = auxiliar;
    }

  }

}