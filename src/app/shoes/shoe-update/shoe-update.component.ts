import { Component, OnInit } from '@angular/core';
import {ShoeService} from '../../shared/shoe.service';
import {FormBuilder} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-shoe-update',
  templateUrl: './shoe-update.component.html',
  styleUrls: ['./shoe-update.component.scss']
})
export class ShoeUpdateComponent implements OnInit {

  id: number;
  loading = true;
  shoeForm = this.fb.group({
    productName: [''],
    size: [''],
    color: [''],
    price: [''],
    type: ['']
  });
  constructor(private shoeService: ShoeService,
              private fb: FormBuilder,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.id = +this.route.snapshot.paramMap.get('id');
    this.shoeService.getShoe(this.id).
      subscribe(shoeFromRest => {
        this.loading = false;
        this.shoeForm.patchValue({
          productName: shoeFromRest.productName,
          size: shoeFromRest.size,
          color: shoeFromRest.color,
          price: shoeFromRest.price,
          type: shoeFromRest.type
        });
    });
  }

  save() {
    const shoe = this.shoeForm.value;
    shoe.productid = this.id;
    this.shoeService.updateShoe(shoe).
      subscribe(() => {
        this.router.navigateByUrl('/shoes');
    });
  }

}
