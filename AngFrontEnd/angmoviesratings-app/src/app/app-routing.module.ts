import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesratingslistComponent } from './moviesratingslist/moviesratingslist.component';
import { MoviesratingsdetailsComponent } from './moviesratingsdetails/moviesratingsdetails.component';


const routes: Routes = [
  { path: 'movies-ratings-list', component: MoviesratingslistComponent },
  { path: 'movies-ratings-details', component: MoviesratingsdetailsComponent },
  { path: 'movies-ratings-details/:id', component: MoviesratingsdetailsComponent },
  // { path: '**', component: MoviesratingslistComponent}
  
  //{ path: 'superhero/:id', component: HeroDetailComponent, data: { animation: 'hero' } }
  // { path: '',   redirectTo: '/first-component', pathMatch: 'full' } mozliwy redirect
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
