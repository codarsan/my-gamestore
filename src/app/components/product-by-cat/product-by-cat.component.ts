import { Component, OnInit, OnDestroy } from '@angular/core';
import { IProduct } from 'src/app/domain/IProduct';
import { ProductService } from 'src/app/services/product.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-product-by-cat',
  templateUrl: './product-by-cat.component.html',
  styleUrls: ['./product-by-cat.component.scss']
})
export class ProductByCatComponent implements OnInit, OnDestroy {

  data: IProduct[];
  navigationSubscription;

  constructor(private productService: ProductService, private router: Router) {
    this.navigationSubscription = this.router.events.subscribe((e: any) => {
      // If it is a NavigationEnd event re-initalise the component
      if (e instanceof NavigationEnd) {
        this.initialiseList();
      }
    });
  }

  initialiseList() {
    this.productService.findByCategory().subscribe(response => this.data = response, error => console.log(error));
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    if (this.navigationSubscription) {
       this.navigationSubscription.unsubscribe();
    }
  }
}
