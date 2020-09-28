import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { PokemonService } from '../pokemon.service';

import { Pokemon } from 'src/app/core/models/pokemon.model';
import { ColorService } from 'src/app/core/services/color-service.service';

@Component({
  selector: 'app-pokemon-detalhes',
  templateUrl: './pokemon-detalhes.component.html',
  styleUrls: ['./pokemon.component.css']
})

export class PokemonDetalhesComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private collor: ColorService
  ) { }

  /* Variavel que guarda os dados do pokemon */
  public pokemon: Pokemon;
  /* Variavel que organiza os nomes das habilidades do pokemon */
  public pokemonAbilities: string;
  /* Armazena o tipo do pokemon */
  public pokemonType: string[];
  /* Armazeza as sprites */
  public pokemonSprites: string[];


  ngOnInit() {
    let nome: string = this.route.snapshot.paramMap.get('pokemon');

    this.pokemonService.obterPorNome(nome).subscribe(
      response => {
        this.prencherDetalhe(response);
      }
    )
  }

  prencherDetalhe(detalhes?: Pokemon) {
    let pokemonAbilities: string[] = [];
    this.pokemonType = [];

    detalhes.abilities.forEach(habilidade => {
      if (habilidade.ability.name) {
        pokemonAbilities.push(habilidade.ability.name);
      }

    });

    detalhes.types.forEach(type => {
      this.pokemonType.push(type.type.name);
    });

    this.pokemonAbilities = pokemonAbilities.join(", ");
    this.pokemon = detalhes;
    /* this.insertSprites(this.pokemon); */

    console.log(pokemonAbilities.join(", "))
    console.log(this.pokemonType)
  }

  /* Função para incrementar a cor de acordo com o Tipo do elemento do pokemon */
  returnCollor(type: string): string {
    return this.collor.returnCollor(type);
  }
}
