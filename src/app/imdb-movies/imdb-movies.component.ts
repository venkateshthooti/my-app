import { Component } from '@angular/core';
import { ImdbMoviesService } from '../imdb-movies.service';

@Component({
  selector: 'app-imdb-movies',
  templateUrl: './imdb-movies.component.html',
  styleUrls: ['./imdb-movies.component.css']
})
export class ImdbMoviesComponent {

  movies:any=[];

  constructor(private _imdbMoviesService:ImdbMoviesService){
    _imdbMoviesService.getImdbMovies().subscribe(
      (data:any)=>{
        this.movies=data;
      },
      (err:any)=>{
        alert("Internal server error")
      }
    )
  }
  getRating(rating:any):any{
    return Math.floor(rating)
  }

  // ngOnInIt(){

  // }

}
