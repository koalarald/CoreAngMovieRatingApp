import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { Observable, pipe } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MoviesRatingServiceService } from '../shared/movies-rating-service.service';
import { ViewMovie, People, Planet, Starship, Vehicle } from '../shared/MoviesRatingsModels';

@Component({
  selector: 'app-moviesratingsdetails',
  templateUrl: './moviesratingsdetails.component.html',
  styleUrls: ['./moviesratingsdetails.component.css']
})
export class MoviesratingsdetailsComponent implements OnInit {
  MovieRatingId!: string | null;
  viewmoviesrating$: Observable<ViewMovie> | undefined;
  viemovieForm: FormGroup;
  viewMovieLoaded!: ViewMovie;
  

  constructor(
    private service: MoviesRatingServiceService,
    private route: ActivatedRoute,
    private router: Router,
    private fb: FormBuilder
  ) {
      this.viemovieForm = new FormGroup({});
   }

  ngOnInit(): void {

    this.viemovieForm = this.fb.group({
          id: [''],
          title: [''],
          rating: ['', Validators.required],
          episode_id: [''],
          opening_crawl: [''],
          director: [''],
          producer: ['']
        });
     
    // this.viewmoviesrating$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.MovieRatingId = params.get('id');
    //     return this.service.getViewMovie(this.MovieRatingId);
    //   })
    // );

    this.viewmoviesrating$ = this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this.service.getViewMovie(params.get('id')))
    );

    this.route.queryParams.subscribe(params => {
      this.MovieRatingId = params['id'];
    });


    this.viewmoviesrating$.subscribe(res => {
      this.viewMovieLoaded = res;
      this.viemovieForm.patchValue(res);
    });

    
  

    // this.viewmoviesrating$ = this.service.getViewMovie(this.MovieRatingId);
    
    // this.route.paramMap.pipe(
    //   switchMap((params: ParamMap) =>
    //     this.MovieRatingId = params.get('id'))
    // );


    // this.service.getViewMovie(this.MovieRatingId).subscribe(vm => {
      
    //   this.viemovieForm = this.fb.group({
    //     id: [vm.id],
    //     title: [vm.title, Validators.required],
    //     episode_id: [vm.episode_id],
    //     opening_crawl: [vm.opening_crawl],
    //     director: [vm.director],
    //     producer: [vm.producer]
    //   });
   

    // this.heroes$ = this.route.paramMap.pipe(
    //   switchMap(params => {
    //     // (+) before `params.get()` turns the string into a number
    //     this.selectedId = +params.get('id');
  
  }

  SaveViewMovie() {
    if (this.viemovieForm.valid) {
      this.viewMovieLoaded.rating = this.viemovieForm.controls["rating"].value;
      this.service.postViewMovie(this.viewMovieLoaded).subscribe(resN => {
        console.log("Saved");
        this.router.navigate(['/movies-ratings-list']);
      });

      console.log(this.viemovieForm.value);
    }


  }

  WorkWithPeopleEvent(value: string) {
    console.log(value);

  }
}
