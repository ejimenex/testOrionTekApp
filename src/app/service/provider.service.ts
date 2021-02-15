import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { endpoint } from '../constant/endpoind';
import { BaseService } from './base-service';
import { Provider } from '../model/invoice/provider';

@Injectable()
export class ProviderService extends BaseService<Provider, number> {

  constructor(_httpClient: HttpClient) {
    super(_httpClient, environment.url + endpoint.providers);
  }
  getFiltered(pageNumber:number,filter:any) {
    return this._httpClient.get<any>(environment.url + endpoint.providers+`/GetPaged?pagenumber=${pageNumber}&pagesize=10&name=${filter.name}`,this.httpOptions)
  }
}
