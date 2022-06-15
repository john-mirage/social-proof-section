import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RatingListComponent } from './rating-list/rating-list.component';
import { TestimonialListComponent } from './testimonial-list/testimonial-list.component';
import { HeaderComponent } from './header/header.component';
import { RatingComponent } from './rating/rating.component';
import { TestimonialComponent } from './testimonial/testimonial.component';

@NgModule({
  declarations: [
    AppComponent,
    RatingListComponent,
    TestimonialListComponent,
    HeaderComponent,
    RatingComponent,
    TestimonialComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
