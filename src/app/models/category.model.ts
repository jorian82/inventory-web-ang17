export class Category {
  id: number;
  version: number;
  name: string;
  description: string;
  createDate: number;
  updateDate: number;

  constructor(id:number=0,version:number=0,name:string='',description:string='',createDate:number=0, updateDate:number=0){
    this.id = id;
    this.version = version;
    this.name = name;
    this.description = description;
    this.createDate = createDate;
    this.updateDate = updateDate;
  }
}

export interface CategoryResponseRest {
  metadata:Metadata[];
  categoryDTOResponse:CategoryDTOResponse;
}

export interface Metadata {
  type:string;
  code:string;
  data:string;
}

interface CategoryDTOResponse {
  categoryDtoList: Category[];
}
