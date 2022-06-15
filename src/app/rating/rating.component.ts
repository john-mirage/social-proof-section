import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
})
export class RatingComponent implements OnInit {
  @Input() company = "";

  constructor() { }

  ngOnInit(): void {
  }

}
