import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  private id: number;
  private sub: any;

  constructor(private router: ActivatedRoute) { }

  ngOnInit() {
    
    this.sub = this.router.params.subscribe(params => {
      this.id = parseInt(params['id']);
    });

    console.log(this.router.snapshot.paramMap.get('id'));

  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }

}
