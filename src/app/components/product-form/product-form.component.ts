import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ICategory } from 'src/app/domain/ICategory';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';


@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.scss']
})
export class ProductFormComponent implements OnInit {

  REGION = [
    { name: 'EU' },
    { name: 'US' },
    { name: 'JP' }
  ];
  cats: ICategory[];
  submitted = false;
  productFormGroup = this.productBuilder.group({
    productNameControl: ['', Validators.required],
    categoryControl: [null, Validators.required],
    descriptionControl: ['', Validators.required],
    yearControl: ['', Validators.required],
    priceControl: ['', Validators.required],
    regionControl: [null, Validators.required],
    imageControl: ['', Validators.required]
  });

  constructor(private productBuilder: FormBuilder, private productService: ProductService,
    private categoryService: CategoryService, private route: ActivatedRoute) { }

  getCategoryName() {
    this.categoryService.findCategoryByName(this.productFormGroup.value.categoryControl.value)
      .subscribe(response => console.log(response), error => console.log(error));
  }

  addNewProduct() {
    const form = this.productFormGroup.value;
    let postedCat: ICategory;
    this.categoryService.findCategoryByName(form.categoryControl)
      .subscribe(response => postedCat = response,
        error => console.log(error),
        () => {
          this.productService
            .createProduct(form.productNameControl, postedCat,
                       form.descriptionControl, form.yearControl,
                       form.priceControl, form.regionControl, form.imageControl)
            .subscribe(response => console.log(response), error => console.log(error));
          this.submitted = true;
          this.productFormGroup.reset();
         });
  }

  ngOnInit() {
    this.submitted = false;
    this.cats = this.route.snapshot.data['categories'];
  }

}

