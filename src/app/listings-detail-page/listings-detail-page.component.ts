import { Component ,OnInit} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { fakeListings } from '../fake-data';
import { Listing } from '../types';
@Component({
  selector: 'app-listings-detail-page',
  templateUrl: './listings-detail-page.component.html',
  styleUrls: ['./listings-detail-page.component.css']
})
export class ListingsDetailPageComponent {
   listing: Listing= {
    id: '123',
    name: 'Old Boat',
    description: 'A very old boat. Bargain price',
    price: 700,
  };

  constructor(
    private route: ActivatedRoute,
    
    
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

  }
}
