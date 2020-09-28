import { PoCheckboxGroupOption, PoTableColumn } from "@po-ui/ng-components";

export class columnsOptions {

    constructor(
        public readonly columnsOptions: Array<PoTableColumn> = [
            { color: 'color-06', tooltip: 'Adiciona um novo item' },
            /* { property: 'Pokemon', type: 'Text' },
            { property: 'Imagem', type: 'Link' },
            { property: 'Tipo', type: 'Text' }, */
        ]
    ) { }

}