import { Component, OnInit } from '@angular/core';
import {ShoeService} from '../../shared/shoe.service';
import {ActivatedRoute} from '@angular/router';
import {Shoe} from '../../shared/models/shoe-model';
import {isNumber} from 'util';

@Component({
  selector: 'app-shoe-details',
  templateUrl: './shoe-details.component.html',
  styleUrls: ['./shoe-details.component.scss']
})
export class ShoeDetailsComponent implements OnInit {

  shoe: Shoe;
  constructor(private shoeService: ShoeService,
              private route: ActivatedRoute) { }
  ngOnInit() {
    this.getShoe();
  }
  getShoe(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.shoeService.getShoe(id).
      subscribe(shoe => this.shoe = shoe);
  }

}
