import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Paging } from '../core/models/paging.model';

/* Model */
import { PokemonListagem } from '../core/models/pokemon-listagem.model';

/* Service */
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html'
})

export class PokemonComponent implements OnInit {

  constructor(private pokemonService: PokemonService) { }

  private _paginacao: Paging = new Paging();

  public pokemonList: PokemonListagem[] = [];

  ngOnInit() {
    this.pokemonService.obterPokemons()
      .subscribe(dados => {

        this.pokemonList = this.pokemonService.ajustarDados(dados);
      }
      );

  }

  pokemon(nome?: string) {
    console.log(nome)
  }


}