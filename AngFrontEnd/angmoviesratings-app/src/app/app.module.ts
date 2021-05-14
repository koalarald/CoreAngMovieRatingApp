import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesratingslistComponent } from './moviesratingslist/moviesratingslist.component';
import { MoviesratingsdetailsComponent } from './moviesratingsdetails/moviesratingsdetails.component';
import { MoviesratingspeopleComponent } from './moviesratingspeople/moviesratingspeople.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesratingslistComponent,
    MoviesratingsdetailsComponent,
    MoviesratingspeopleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
