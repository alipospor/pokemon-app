import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { PoButtonGroupItem } from '@po-ui/ng-components';

/* Model */
import { PokemonListagem } from '../core/models/pokemon-listagem.model';
import { Paging } from '../core/models/paging.model';

/* Service */
import { PokemonService } from './pokemon.service';
import { PokemonBase } from '../core/models/pokemon-base.model';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})

export class PokemonComponent implements OnInit {

  constructor(private service: PokemonService) { }

  private _paginacao: Paging = new Paging();

  public pokemonList: PokemonListagem[] = [];

  ngOnInit() {

    this.service.obterPokemons().subscribe(
      dados => {
        this.pokemonList = this.service.getPokemons(dados);
      }
    );
  }

  pokemon(nome?: string) {
    console.log(nome)
  }


}