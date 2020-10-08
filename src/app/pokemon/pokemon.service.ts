import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

/* Service */
import { ServiceBase } from '../core/services/services.base';

/* Model */
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

  obterPokemons(paginacao?: Paging) {

    if (!paginacao) {
      paginacao = new Paging();
    }

    return this.obter(paginacao).pipe(
      tap(console.log)
    );
  }

  pegarDadosPokemonTabela(pokemons: PokemonBase): PokemonDetalhe[] {
    let resultPokemons = [];

    if (pokemons.results.length > 0) {
      pokemons.results.forEach(element => {

        this.obterPorNome(element.name).subscribe(
          response => {
            resultPokemons.push(response);
          }
        );
      });

    }
    /* 
        console.log(resultPokemons) */
    return resultPokemons;
  }

  ajustarDados(response?: PokemonBase): PokemonListagem[] {
    /* Iniciando um array de Pokemon listagem */
    let listaPokemon: Array<PokemonListagem> = [];

    if (response) {

      response.results.forEach(pokemon => {

        this.obterPorNome(pokemon.name).subscribe(
          retorno => {
            /* Iniciando um objeto de pokemonlistagem */
            let dadosPokemon: PokemonListagem = new PokemonListagem();

            /* Setando os elementos do objeto PokemonListagem */
            dadosPokemon.ndex = retorno.id;
            dadosPokemon.pokemon = retorno.name;
            dadosPokemon.imagem = retorno.sprites.front_default;

            /* Iniciando elemento */
            dadosPokemon.tipo = [];
            retorno.types.forEach(element => {
              dadosPokemon.tipo.push(element.type.name);
            });

            /* Inserir o Objeto (dadosPokemon) no meu array de pokemonlistagem (listaPokemon) */
            listaPokemon.push(dadosPokemon);
          }
        )
      });

      return listaPokemon;
    }

    return listaPokemon;
  }


}
