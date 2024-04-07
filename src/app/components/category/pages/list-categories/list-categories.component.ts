import { MaterialModule } from './../../../shared/material.module';
import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Category, CategoryResponseRest } from '../../../../models/category.model';
import { CategoryService } from '../../../../services/category.service';
import { Subscription } from 'rxjs';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { AddCategoryComponent } from '../add-category/add-category.component';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.scss'
})
export class ListCategoriesComponent implements OnInit, OnDestroy {
  private list: Category[] = [];
  subscriptions: Subscription[] = [];

  private categoryService = inject(CategoryService);
  public dialog = inject(MatDialog);

  displayedColumns: string[] = ['id', 'name', 'description', 'actions'];
  dataSource = new MatTableDataSource<Category>();

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.getCategoriesList();
  }

  getCategoriesList(){
    this.list = [];
    this.subscriptions.push(
      this.categoryService.getCategories()
          .subscribe({
            next: (data) => {
              // console.log('lista categorias: ', data.categoryDTOResponse);
              // data.categoryDTOResponse.categoryDtoList.forEach(item => this.list.push(new Category(item.id,item.version,item.name,item.description)))
              this.list = data.categoryDTOResponse.categoryDtoList;
              this.dataSource = new MatTableDataSource<Category>(this.list);
            },
            error: (error) => {}
          })
    );

  }

  openAddCategoryDialog(){
    const dialogRef = this.dialog.open(AddCategoryComponent, {
      width: '50%'
    });
    dialogRef.afterClosed().subscribe( result => {
      if(result) {
        this.getCategoriesList();
        console.log("Category saved and list updated");
      } else {
        console.log("Error adding the category");
      }
    })
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.subscriptions.map(subs => subs.unsubscribe());
  }


}
