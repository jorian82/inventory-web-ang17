import { Component, inject } from '@angular/core';
import { MaterialModule } from '../../../shared/material.module';
import { MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';
import { CategoryService } from '../../../../services/category.service';
import { Category } from '../../../../models/category.model';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.scss'
})
export class AddCategoryComponent {
  categorySaved: boolean = false;

  public dialogRef = inject(MatDialogRef<AddCategoryComponent>);
  private categoryService = inject(CategoryService);

  saveCategory() {
    // this.categoryService.saveCategory(new Category())
    //     .subscribe({
    //       next: data => {
    //         if(data.metadata[0].code=='201') {
    //           console.log("Category created");
    //           this.categorySaved = true;
    //         }
    //         return this.categorySaved;
    //       },
    //       error: error => {
    //         console.log("Error: ",error);
    //         return false;
    //       }
    //     });
    // return this.categorySaved;
    console.log("Category saved: ", new Category());
    return false;
  }
}
