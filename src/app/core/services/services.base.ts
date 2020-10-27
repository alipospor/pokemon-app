import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from "rxjs/operators";

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

    obter(paginacao?: Paging): Observable<T> {


        if (!paginacao) {
            paginacao = this.paginacaoDefault();
        }

        console.log(paginacao);

        return this.httpClient.get<T>(`${this.PATH}${paginacao.toString()}`)
            .pipe(catchError(this._handleError))
    }

    obterPorNome(nome: string): Observable<T> {

        if (nome) {
            return this.httpClient.get<T>(`${this.PATH}/${nome}`);
        }
    }

    private _handleError(error: HttpErrorResponse) {
        if (error.error instanceof ErrorEvent) {
            // A client-side or network error occurred. Handle it accordingly.
            console.error('An error occurred:', error.error.message);
        } else {
            // The backend returned an unsuccessful response code.
            // The response body may contain clues as to what went wrong,
            console.error(
                `Backend returned code ${error.status}, ` + `body was: ${error.error}`
            );
        }
        // return an observable with a user-facing error message
        return throwError('Something bad happened; please try again later.');
    }
}