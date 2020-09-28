import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Paging } from '../models/paging.model';
import { PokemonBase } from '../models/pokemon-base.model';
import { Pokemon } from '../models/pokemon.model';

export abstract class ServiceBase<T> {

    protected abstract readonly PATH: string;

    constructor(protected httpClient: HttpClient) { }

    paginacaoDefault(): Paging {
        return new Paging();
    }

    obter(paginacao?: Paging): Observable<PokemonBase> {


        if (!paginacao) {
            paginacao = this.paginacaoDefault();
        }

        console.log(paginacao);

        return this.httpClient.get<PokemonBase>(`${this.PATH}${paginacao.toString()}`);
    }

    obterPorNome(nome: string): Observable<Pokemon> {

        if (nome) {
            return this.httpClient.get<Pokemon>(`${this.PATH}/${nome}`);
        }
    }
}