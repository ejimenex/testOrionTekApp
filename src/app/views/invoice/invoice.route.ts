import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {InvoiceListComponent  } from './list/invoice-list.component';
import { InvoiceAddComponent } from './create/invoice-create.component';



const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Facturas'
    },
    
    children: [
   {
      path: '',
      component:InvoiceListComponent,
   },
      {
        path: 'add',
        component: InvoiceAddComponent    
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {}
