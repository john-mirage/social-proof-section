import { Component, OnInit } from '@angular/core';
import { RATINGS } from './rating-list';

@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
})
export class RatingListComponent implements OnInit {
  ratings = RATINGS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
