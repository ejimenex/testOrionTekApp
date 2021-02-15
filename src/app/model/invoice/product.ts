import { BaseModel } from "./base-model"
import { DecimalPipe } from '@angular/common'

export class Product extends BaseModel
{
   name:string
   cost:number
   price:number
   stock:number
   unitOfMeasureId:string
   productTypeId:string
   unitOfMeasure:string
   productType:string
}