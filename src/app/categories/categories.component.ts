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

  constructor(private categoryService: CategoriesService) {}

  ngOnInit(): void {
    this.categoryService.loadData().subscribe((data) => {
      this.categoryArray = data;
      console.log(data);
    });
  }

  onSubmit(formData: any) {
    // categoryData is the object that needs to be saved
    let categoryData: Category = {
      // formData.value => category : " "
      category: formData.value.category,
    };

    this.categoryService.saveData(categoryData);
    formData.reset();
  }
}
