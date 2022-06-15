import { Component, OnInit } from '@angular/core';
import { TESTIMONIALS } from './testimonial-list';

@Component({
  selector: 'app-testimonial-list',
  templateUrl: './testimonial-list.component.html',
  styleUrls: ['./testimonial-list.component.css']
})
export class TestimonialListComponent implements OnInit {
  testimonials = TESTIMONIALS;

  constructor() { }

  ngOnInit(): void {
  }

}
