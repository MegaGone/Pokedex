import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonList } from "../models/pokemons.list";
import { PokemonStats } from "../models/pokemon.stats";
import { map } from "rxjs/operators";
@Injectable({ providedIn: 'root' })

export class PokemonService {
    private baseUrl = 'https://pokeapi.co/api/v2/';

    constructor(private http: HttpClient) { }

    getPokemonList(offset: number, limit: number = 20): Observable<PokemonList[]> {
        return this.http.get<PokemonList[]>(this.baseUrl + 'pokemon?offset=' + offset + '&limit=' + limit)
            .pipe(
                map((x: any) => x.results)
            );
    }

    getPokemonDetail(pokemon: number | string): Observable<PokemonStats> {
        return this.http.get<PokemonStats>(this.baseUrl + 'pokemon/' + pokemon);
    }
}