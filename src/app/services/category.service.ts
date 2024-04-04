import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_PATH } from '../components/shared/constants';
import { CategoryResponseRest } from '../models/category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public getCategories() {
    // return this.http.get<Category[]>('')
    // .pipe(map( (response:any) => {
    //   if(response.metadata[0].code!=="200"){
    //     return [];
    //   }
    //   return response.categoryResponse;//.map(item=>new Category(item.id,item.version,item.name,item.description,item.createDate,item.updateDate))
    // }));
    return this.http.get<CategoryResponseRest>(API_PATH+'/category');
  }
}
