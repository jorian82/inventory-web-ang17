import { Component, OnDestroy, OnInit } from '@angular/core';
import { Category, CategoryResponseRest } from '../../../../models/category.model';
import { CategoryService } from '../../../../services/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-list-categories',
  standalone: true,
  imports: [],
  templateUrl: './list-categories.component.html',
  styleUrl: './list-categories.component.scss'
})
export class ListCategoriesComponent implements OnInit, OnDestroy {
  private list:Category[] = [];
  subscriptions: Subscription[] = [];

  constructor( private categoryService: CategoryService){}

  ngOnInit(): void {
    // throw new Error('Method not implemented.');
    this.subscriptions.push(
      this.categoryService.getCategories()
          .subscribe({
            next: (data) => {
              console.log('lista categorias: ', data);
            },
            error: (error) => {}
          })
    )
  }

  ngOnDestroy(): void {
    // throw new Error('Method not implemented.');
    this.subscriptions.map(subs => subs.unsubscribe());
  }


}
