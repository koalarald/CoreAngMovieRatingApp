import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { MoviesRatingServiceService } from '../shared/movies-rating-service.service';
import { ViewMovie, People, Planet, Starship, Vehicle } from '../shared/MoviesRatingsModels';

@Component({
  selector: 'app-moviesratingslist',
  templateUrl: './moviesratingslist.component.html',
  styleUrls: ['./moviesratingslist.component.css']
})
export class MoviesratingslistComponent implements OnInit {
  viewmoviesratings$: Observable<ViewMovie[]> | undefined;

  constructor(
    private service: MoviesRatingServiceService,
    private route: ActivatedRoute,
    private router: Router,
  ) { }


  ngOnInit(): void {
    // this.route.queryParams.subscribe(params => {
    //   this.MovieRatingId = params['id'];
    // });
    this.viewmoviesratings$ = this.service.getViewMovies();
    this.viewmoviesratings$;
  }

  gotoViewMovie(viewMovie: ViewMovie) {
    const viewMovieId = viewMovie ? viewMovie.id : null;
    this.router.navigate(['/movies-ratings-details', { id: viewMovieId, foo: 'foo' }]);
  }

//without known type
//   this.service.getViewMovies()
//   .subscribe((data: ViewMovie[]) => this.ViewMovieProp = {
//     heroesUrl: data.heroesUrl,
//     textfile:  data.textfile,
//     date: data.date,
// });

//without known type, full clone
//   this.service.getViewMovies()
//   .subscribe((data: ViewMovie[]) => this.ViewMovieProp = { ...data });

}
