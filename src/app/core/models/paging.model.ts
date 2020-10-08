import { AppConfig } from '../../app.config';

export class Paging {

    private _offset = 0;
    
    public limit = AppConfig.POKE_SIZE;

    public start?: number;

    set offset(offset: number) {
        this._offset = offset;
    }

    toString() {

        if (this.start) {
            this._offset = this.start;
        }

        return `?limit=${this.limit}&offset=${this._offset}`;
    }

}