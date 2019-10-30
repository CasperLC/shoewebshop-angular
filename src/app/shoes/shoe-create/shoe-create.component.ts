import { Component, OnInit } from '@angular/core';
import {ShoeService} from '../../shared/shoe.service';
import { FormBuilder } from '@angular/forms';
import {Shoe} from '../../shared/models/shoe-model';
import {Router} from '@angular/router';

@Component({
  selector: 'app-shoe-create',
  templateUrl: './shoe-create.component.html',
  styleUrls: ['./shoe-create.component.scss']
})
export class ShoeCreateComponent implements OnInit {

  shoeForm = this.fb.group({
    productName: [''],
    size: [''],
    color: [''],
    price: [''],
    type: ['']
  });
  constructor(private shoeSerice: ShoeService,
              private fb: FormBuilder,
              private router: Router) { }

  ngOnInit() {
  }
  save() {
    const shoeFromFields = this.shoeForm.value;
    this.shoeSerice.addShoe(shoeFromFields as Shoe).
      subscribe(() => {
        this.router.navigateByUrl('/shoes');
      });
  }

}
