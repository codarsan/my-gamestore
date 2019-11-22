import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CategoryService } from '../services/category.service';
import { ICategory } from '../domain/ICategory';

@Injectable({
  providedIn: 'root'
})
export class CategoryResolver implements Resolve<ICategory[]> {
  constructor(private categoryService: CategoryService) {
  }
  resolve(): ICategory[] {
    const categories: ICategory[] = [];
    this.categoryService.findAllCategories().subscribe(response => {
      for (let index = 0; index < response.length; index++) {
        categories.push(response[index]);
      }
    }, error => console.log(error));
    return categories;
  }
}
