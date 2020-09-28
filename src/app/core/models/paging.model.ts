import { AppConfig } from '../../app.config';

export class Paging {

    private _page = 0;
    
    public limit = AppConfig.POKE_SIZE;

    public start?: number;

    set page(page: number) {
        this._page = page;
    }

    toString() {

        if (this.start) {
            this._page = this.start;
        }

        return `?limit=${this.limit}&offset=${this._page}`;
    }

}