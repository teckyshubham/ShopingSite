// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Listing } from '../types';
import { fakeMyListings } from '../fake-data';

@Component({
  selector: 'app-edit-listing-page',
  templateUrl: './edit-listing-page.component.html',
  styleUrls: ['./edit-listing-page.component.css']
})
export class EditListingPageComponent {
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
    // this.listing = fakeMyListings.find(listing => listing.id === id);
    const fakeListing = fakeMyListings.find(listing => listing.id === id);
    const default1=fakeMyListings.find(listing => listing.id === '123');
    this.listing={
      id: '123',
      name: 'Old Boat',
      description: 'A very old boat. Bargain price',
      price: 700,
    }
    if (fakeListing !== undefined){
      this.listing = fakeListing;
    }
  }

  onSubmit(): void {
    alert('Saving changes to the listing...');
    this.router.navigateByUrl('/my-listings');
  }
}
