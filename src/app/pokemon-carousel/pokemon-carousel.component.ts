import { Component } from '@angular/core';
import { PokemonCarouselService } from '../pokemon-carousel.service';

@Component({
  selector: 'app-pokemon-carousel',
  templateUrl: './pokemon-carousel.component.html',
  styleUrls: ['./pokemon-carousel.component.css']
})
export class PokemonCarouselComponent {

  pokemanDetails:any=[]
  
  constructor(private _pokemonCarouselService:PokemonCarouselService){
    _pokemonCarouselService.getPokemanDetals().subscribe(
      (data:any)=>{
        this.pokemanDetails=data;
      },
      (err:any)=>{
        alert("Internal Server error")
      }
    )
  }


}
