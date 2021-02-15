// Angular
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgModule } from "@angular/core";
import { TranslateLoader, TranslateModule } from "@ngx-translate/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
// Components Routing
import { InvoiceListComponent } from "./list/invoice-list.component";
import { InvoiceAddComponent } from "./create/invoice-create.component";
import { InvoiceRoutingModule } from "./invoice.route";
import { ProductService } from "../../service/product.service";
import { InvoiceService, InvoiceDetailService } from '../../service/invoice.service';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    InvoiceRoutingModule,
    TranslateModule,
  ],
  declarations: [
    InvoiceAddComponent,
    InvoiceListComponent
  ],
 entryComponents:[],
  providers: [
    ProductService,
    InvoiceService,
    InvoiceDetailService,
  ],
})
export class InvoiceModule {}
