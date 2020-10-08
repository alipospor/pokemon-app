import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


/* Models */
import { PokemonBase } from '../models/pokemon-base.model';
import { PokemonDetalhe } from '../models/pokemon-detalhe.model';
import { Paging } from '../models/paging.model';

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

    obterPorNome(nome: string): Observable<PokemonDetalhe> {

        if (nome) {
            return this.httpClient.get<PokemonDetalhe>(`${this.PATH}/${nome}`);
        }
    }
}