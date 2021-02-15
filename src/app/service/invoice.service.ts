import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { endpoint } from '../constant/endpoind';
import { BaseService } from './base-service';
import { Invoice, InvoiceDetail } from '../model/invoice/Invoice.model';


@Injectable()
export class InvoiceService extends BaseService<Invoice, number> {

  constructor(_httpClient: HttpClient) {
    super(_httpClient, environment.url + endpoint.invoice );
  }

 
}
@Injectable()
export class InvoiceDetailService extends BaseService<InvoiceDetail, number> {

  constructor(_httpClient: HttpClient) {
    super(_httpClient, environment.url + endpoint.invoiceDetail);
  }
  getByInvoiceNumber(id){
    return this._httpClient.get<InvoiceDetail[]>(environment.url + endpoint.invoiceDetail+'/getByInvoice/'+id)
  }
 
}