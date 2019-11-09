import { Component, OnInit } from '@angular/core';
import {ShoeService} from '../../shared/shoe.service';
import {Shoe} from '../../shared/models/shoe-model';

@Component({
  selector: 'app-shoe-list',
  templateUrl: './shoe-list.component.html',
  styleUrls: ['./shoe-list.component.scss']
})
export class ShoeListComponent implements OnInit {

  loading = true;
  shoes: Shoe[];
  constructor(private shoeService: ShoeService) { }

  getShoes() {
    this.shoeService.getShoes().
      subscribe(shoes => {
        this.loading = false;
        this.shoes = shoes;
      });
  }
  deleteShoe(id: number) {
    this.shoeService.deleteShoe(id)
      .subscribe(() => {
        this.getShoes();
      });
  }
  ngOnInit() {
    this.getShoes();
  }

}
