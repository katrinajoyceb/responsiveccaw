import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-testimonials',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.scss']
})
export class TestimonialsComponent implements OnInit {


  testimonials: {review: string, name: string, company: string, photo: string,}[] = [
    {
      review: "We have worked with Caprock Custom Applications for over 2 years for all our web application design needs. A great group of professionals. They are prompt, helpful and very knowledgeable. I highly recommend them to any business or individual to build and maintain your web application to ease your business processes.",
      name: "Amy Wood",
      company: "Flint Ave Marketing",
      photo: "Photo" 
    },
    {
      review: "The most trustworthy and reliable group of people you will find!!! They know the latest and greatest and will be able to do whatever it is you need them to do to make your business better.",
      name: "Derrek Porter",
      company: "Fast Pay Payroll",
      photo: "Photo" 
    },
    {
      review: "We hired Caprock Custom Applications to develop a software application [...] We felt our idea was a little complex and rough around the edges. They programmed and designed something that was better than we imagined. We value quick response times, great work and a great relationship. This is exactly what we paid for and more than we expected.",
      name: "Tia Clary",
      company: "StockShow Box",
      photo: "Photo" 
    },
    {
      review: "There is a well-known agency for governesses in the West End called Westaway's, and there I used to call about once a week in order to see whether anything had turned up which might suit me. Westaway was the name of the founder of the business, but it is really managed by Miss Stoper. She sits in her own little office, and the ladies who are seeking employment wait in an anteroom.",
      name: "Sherlock Holmes",
      company: "Johns Hopkins University",
      photo: "Photo" 
    },
  ];


  first = this.testimonials[0];
  second = this.testimonials[1];
  third = this.testimonials[2];
  fourth = this.testimonials[3];

  constructor() { }

  ngOnInit() {
  }

}
