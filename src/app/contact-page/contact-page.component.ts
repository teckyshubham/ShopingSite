import { Component,OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeListings } from '../fake-data';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.css']
})
export class ContactPageComponent implements OnInit {
  email: string = '';
  message: string = '';
  listing: Listing= {
    id: '123',
    name: 'Old Boat',
    description: 'A very old boat. Bargain price',
    price: 700,
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const fakeListing = fakeListings.find(listing => listing.id === id);
    const default1=fakeListings.find(listing => listing.id === '123');
    this.listing={
      id: '123',
      name: 'Old Boat',
      description: 'A very old boat. Bargain price',
      price: 700,
    }
    if (fakeListing !== undefined){
      this.listing = fakeListing;
    }
    this.message = `Hi, I'm interested in your ${this.listing.name.toLowerCase()}!`;
  }

  sendMessage(): void {
    alert('Your message has been sent!');
    this.router.navigateByUrl('/listings');
  }
}
