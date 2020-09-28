import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Paging } from '../core/models/paging.model';
import { ServiceBase } from '../core/services/services.base';
import { mergeMap, tap } from 'rxjs/operators';
import { PokemonBase } from '../core/models/pokemon-base.model';
import { Pokemon } from '../core/models/pokemon.model';

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

  pegarDadosPokemonTabela(pokemons: PokemonBase): Pokemon[] {
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
}
