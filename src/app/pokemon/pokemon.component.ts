import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

/* Model */
import { PokemonListagem } from '../core/models/pokemon-listagem.model';
import { Paging } from '../core/models/paging.model';

/* Service */
import { PokemonService } from './pokemon.service';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.css']
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