import { Component, Inject, OnInit } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA } from '@angular/material/bottom-sheet';
import { PokemonStats } from '../../models/pokemon.stats';
@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.sass']
})
export class StatsComponent implements OnInit {

  pokemon: PokemonStats;
  classicMode: boolean;

  constructor(@Inject(MAT_BOTTOM_SHEET_DATA) public data: any) {
    this.pokemon = data.pokemon;
    this.classicMode = data.classicMode;
  }

  ngOnInit(): void {
  }

  getAbilities(): string {
    return this.pokemon.abilities.map(x => x.ability.name).join(', ');
  }

  getPrincipalType(list: any[]) {
    return list.filter(x => x.slot === 1)[0]?.type.name;
  }

}