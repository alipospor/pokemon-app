import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

/* Service */
import { ServiceBase } from '../core/services/services.base';

/* Models */
import { PokemonDetalhe } from '../core/models/pokemon-detalhe.model';
import { PokemonBase } from '../core/models/pokemon-base.model';
import { Paging } from '../core/models/paging.model';
import { PokemonListagem } from '../core/models/pokemon-listagem.model';


@Injectable({
  providedIn: 'root'
})
export class PokemonService extends ServiceBase<any> {

  protected readonly PATH = 'https://pokeapi.co/api/v2/pokemon';

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
  }

  obterPokemons(paginacao?: Paging): Observable<PokemonBase> {

    if (!paginacao) {
      paginacao = new Paging();
    }

    return this.obter(paginacao);
  }

  obterDetalhesNome(nome: string): Observable<PokemonDetalhe> {

    return this.obterPorNome(nome);
  }

  /* Funções para prencher os dados de pokemons de acordo com a minha listagem */
  getPokemons(pokemons: PokemonBase): PokemonListagem[] {
    /* Iniciando um array de Pokemon listagem */
    let listaPokemon: Array<PokemonListagem> = [];

    if (pokemons) {

      pokemons.results.forEach(pokemon => {
        let dadosPokemon: PokemonListagem = new PokemonListagem();

        /* order mais conhecido como ID */
        dadosPokemon.order = + pokemon.url.split('/')[pokemon.url.split('/').length - 2]

        this.getDetails(dadosPokemon);

        listaPokemon.push(dadosPokemon);
      });

      return listaPokemon;
    }

    return listaPokemon;
  }


  getDetails(pokemon: PokemonListagem): PokemonListagem {

    this.obterPorNome(pokemon.order.toString()).subscribe(
      dados => {
        /* Setando os elementos do objeto PokemonListagem */
        pokemon.name = dados.name;
        pokemon.imagem = dados.sprites.front_default;

        /* Iniciando elemento */
        pokemon.tipo = [];
        dados.types.forEach(element => {
          pokemon.tipo.push(element.type.name);
        });

      }
    );

    return pokemon;
  }
}
