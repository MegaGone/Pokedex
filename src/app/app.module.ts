import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PokemonsComponent } from './components/pokemons/pokemons.component';
import { StatsComponent } from './components/stats/stats.component';
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from './material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { PokemonService } from './Services/pokemon.service';

@NgModule({
  declarations: [
    AppComponent,
    PokemonsComponent,
    StatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
