import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ViewMovie } from './MoviesRatingsModels';

@Injectable({
  providedIn: 'root'
})
export class MoviesRatingServiceService {

  constructor(private http: HttpClient) { }

  // getViewMovies(): Observable<ViewMovie[]> {

  //   getViewMovies() {
  //   //return this.http.get<ViewMovie[]>("http://localhost:12044/");


  //   return this.http.get<ViewMovie[]>("http://localhost:12044/api/moviesratings/", { observe: 'response' })
  //   .pipe(
  //     catchError(this.handleError)
  //   );

  // }

  getViewMovies() {
    //return this.http.get<ViewMovie[]>("http://localhost:12044/");
    // const options = {
    //   responseType: 'text' as const,
    //   observe: 'body' as const,
    // };
    // this.http.get('http://localhost:12044/api/moviesratings/', options);

    return this.http.get<ViewMovie[]>("http://localhost:12044/api/moviesratings/");
    // .pipe(
    //   retry(3), // retry a failed request up to 3 times
    //   catchError(this.handleError) // then handle the error
    // );

  }

  getViewMovie(id: string | null) {
    //return this.http.get<ViewMovie[]>("http://localhost:12044/");
    //const url = `${this.heroesUrl}/${id}`;

    //return this.http.get<ViewMovie>('http://localhost:12044/api/moviesratings/${id}');
    return this.http.get<ViewMovie>("http://localhost:12044/api/moviesratings/" + id);

  }

  postViewMovie(vm: ViewMovie | null) {
    //return this.http.get<ViewMovie[]>("http://localhost:12044/");
    //const url = `${this.heroesUrl}/${id}`;

    //return this.http.get<ViewMovie>('http://localhost:12044/api/moviesratings/${id}');
    
    return this.http.post<ViewMovie>("http://localhost:12044/api/moviesratings/" + vm?.id, vm);

  }

  // showViewMoviesResponse() {
    
  //   this.getViewMovies()
  //     // resp is of type `HttpResponse<Config>`
  //     .subscribe(resp => {
  //       // display its headers
  //       const keys = resp.headers.keys();
  //       const headers = keys.map(key =>
  //         `${key}: ${resp.headers.get(key)}`);
  
  //       // access the body directly, which is typed as `Config`.
  //       const bodycontent = { ... resp.body };
  //       bodycontent;
  //     });
  // }
  

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // Return an observable with a user-facing error message.
    return throwError(
      'Something bad happened; please try again later.');
  }

  // interaction through observables in service
  // requires import { Subscription } from 'rxjs'; and subscribing observables in components
  // also generating values through methods from service with .next on subjects

  //  // Observable string sources
  //  private missionAnnouncedSource = new Subject<string>();
  //  private missionConfirmedSource = new Subject<string>();
 
  //  // Observable string streams
  //  missionAnnounced$ = this.missionAnnouncedSource.asObservable();
  //  missionConfirmed$ = this.missionConfirmedSource.asObservable();
 
  //  // Service message commands
  //  announceMission(mission: string) {
  //    this.missionAnnouncedSource.next(mission);
  //  }
 
  //  confirmMission(astronaut: string) {
  //    this.missionConfirmedSource.next(astronaut);
  //  }
}


