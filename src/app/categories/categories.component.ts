import { Component, OnInit } from '@angular/core';
import { CategoriesService } from '../services/categories.service';
import { Category } from '../models/category';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {
  categoryArray: any;
  formCategory = '';
  formStatus = 'Add';
  categoryId = '';
  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    // GET REQUEST/READ
    this.categoryService.loadData().subscribe((data) => {
      this.categoryArray = data;
    });
  }

  onSubmit(formData: any) {
    // categoryData is the object that needs to be saved
    let categoryData: Category = {
      // formData.value => category : " "
      category: formData.value.category,
    };
    // POST REQUEST/CREATE
    if (this.formStatus == 'Add') {
      this.categoryService.saveData(categoryData);
      formData.reset();
    }
    // UPDATE
    else if (this.formStatus == 'Edit') {
      this.categoryService.updateData(this.categoryId, categoryData);
      this.formStatus = 'Add';
      formData.reset();
    }
  }

  onDelete(catId: string) {
    this.categoryService.deleteData(catId);
  }

  onEdit(category: any, catId: string) {
    this.formCategory = category;
    this.formStatus = 'Edit';
    this.categoryId = catId;
  }
}
