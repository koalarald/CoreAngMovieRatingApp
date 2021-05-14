import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { ViewMovie, People, Planet, Starship, Vehicle } from '../shared/MoviesRatingsModels';

@Component({
  selector: 'app-moviesratingspeople',
  templateUrl: './moviesratingspeople.component.html',
  styleUrls: ['./moviesratingspeople.component.css']
})
export class MoviesratingspeopleComponent implements OnInit {
  @Input() charactersArray: People[] | undefined;
  @Output() newPeopleEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  peopleEventGenerated(value: string) {
    this.newPeopleEvent.emit(value);
  }

}
