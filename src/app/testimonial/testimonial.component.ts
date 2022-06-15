import { Component, OnInit, Input } from '@angular/core';
import { Testimonial } from './testimonial';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonial.component.html',
})
export class TestimonialComponent implements OnInit {
  @Input() testimonial: Testimonial = {
    avatar: "",
    name: "",
    quote: "",
  };

  constructor() { }

  ngOnInit(): void {
  }

}
