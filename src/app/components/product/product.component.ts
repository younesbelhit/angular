import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import * as _ from 'lodash';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  form: FormGroup;
  submitted: boolean = false;
  
  constructor(private productService: ProductService) {
    // const array1 = [['a', 'b'], ['b', 'c']];
    // const array2 = [['a', 'b'], ['b', 'c']];
    // console.log(_.isEqual(array1, array2));
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      summary: new FormControl('', [Validators.required, Validators.minLength(10)]),
      quantity: new FormControl('', [Validators.required, Validators.pattern('^[0-9]+$')]),
      color: new FormControl('', Validators.required),
      size: new FormControl('', Validators.required)
    })
  }

  // convenience getter for easy access to form fields
  get f() { return this.form.controls; }

  onSubmit() {

    this.submitted = true;
    
    // stop here if form is invalid
    if(this.form.invalid) {
      return;
    }
    
    alert('success');

  }

}
