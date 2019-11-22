import { ProductService } from '../../services/product.service';
import { IProduct } from './../../domain/IProduct';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  data: IProduct[];
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.productService.getAllProducts().subscribe(
      res => {this.data = res; },
      err => console.log(`there was an exception : {err} `)
    );
  }

}
