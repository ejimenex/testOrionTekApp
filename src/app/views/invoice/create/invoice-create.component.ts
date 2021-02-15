import { Component, OnInit } from "@angular/core";
import { AlertService } from "../../../service/alert-sweet.service";
import { Router, ActivatedRoute } from "@angular/router";
import { ProductService } from "../../../service/product.service";
import { Product } from "../../../model/invoice/product";

import { InvoiceService } from "../../../service/invoice.service";


import { Invoice, InvoiceDetail } from "../../../model/invoice/Invoice.model";

@Component({
  templateUrl: "./invoice-create.component.html",
})
export class InvoiceAddComponent implements OnInit {
  product: Product = new Product();
  products=[]
  invoice: Invoice = new Invoice();
  detail: InvoiceDetail[];
  productType = [];
  salesData: any = {};
  total=0

  constructor(
    private router: Router,
    private alertService: AlertService,
    private productService: ProductService,
    private invoiceService: InvoiceService
  ) {}
 
  ngOnInit() {
    this.total=0
    this.detail=[]
    this.onLoad();
  }
 sumTotal(){
   this.total=0
   for(let i=0;i<=this.detail.length;i++)
   {
    this.total +=this.detail[i].total
   }
 }
  addToList() {
    if (!this.salesData.quantity)
      return this.alertService.error("Debe especificar la cantidad");

    this.detail.push({
      productId: this.product.id,
      quantity: this.salesData.quantity,
      total: this.salesData.quantity * this.salesData.price,
      invoiceId: '',
      id: null,
      createdDate: null,
      modifiedBy: null,
      createdBy: '',
      modifiedDate: null,
      price:0
     
    });
       
    this.salesData = {};
    this.sumTotal()
  }
  deleteItem(item){
    this.detail.splice(item,1)
    this.sumTotal()
  }
 

  validateRequidesFileds() {
    let result =
      !this.product.name || !this.product.productTypeId || !this.product.price;
    return result;
  }
  saveInvoice(): void {

    if(this.detail.length==0)
        return this.alertService.error('No hay datos para facturar');
    
  }
  onLoad() {
    this.products=[]
    this.productService.get().subscribe(res=> this.products=res)
  }
  save() {
    if (this.validateRequidesFileds())
      return this.alertService.error("Verificar campos requeridos", "Error");
    this.productService.post(this.product).subscribe(
      (response) => {
        this.router.navigate(["/invoice"]);
        this.alertService.success("Factura registrada correctamente");
      },
      (error) => {
        this.alertService.error(error.error);
      }
    );
  }
}
