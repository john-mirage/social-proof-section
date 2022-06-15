import { Component, OnInit } from '@angular/core';
import { TESTIMONIALS } from './testimonial-list';

@Component({
  selector: 'app-testimonial-list',
  templateUrl: './testimonial-list.component.html',
})
export class TestimonialListComponent implements OnInit {
  testimonials = TESTIMONIALS;

  constructor() { }

  ngOnInit(): void {
  }

}
