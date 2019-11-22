import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import { FormBuilder, Validators } from '@angular/forms';
import { ICategory } from 'src/app/domain/ICategory';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  submitted = false;

  constructor(private service: CategoryService, private fb: FormBuilder) {}

  categoryForm = this.fb.group({
    categoryName: ['', Validators.required]
  });

  createCategory(): void {
    this.service.createCategory(this.categoryForm.value.categoryName)
        .subscribe(() => { this.categoryForm.reset();
                           this.submitted = true; },
         error => console.log(error)
         );
  }
  ngOnInit() {
    this.submitted = false;
  }

}
