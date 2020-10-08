export interface PokemonDetalhe {

    abilities: [
        {
            ability: {
                name: string;
                url: string;
            }
        }
    ],
    base_experience: number,
    forms: [],
    game_indicies: [],
    height: number,
    held_items: [],
    id: string,
    is_default: boolean,
    location_area_encounters: string,
    moves: [],
    name: string,
    order: number,
    species: {
        name: string,
        url: string
    },
    sprites: {
        back_default: string;
        back_shiny: string;
        front_default: string;
        front_shiny: string;
        other: {
            dream_world: {
                front_default: string;
                front_female: string;
            },
            official_artwork: {
                front_default: string;
            }
        }
    },
    versions: { any },
    stats: [],
    types: [
        {
            slot: number,
            type: {
                name: string
            }
        }
    ],
    weight: number
}