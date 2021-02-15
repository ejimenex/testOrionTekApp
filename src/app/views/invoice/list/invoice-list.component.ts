import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { InvoiceService } from "../../../service/invoice.service";

@Component({
  templateUrl: "./invoice-list.component.html",
  styleUrls: ["./../../../views/table.css"],
})
export class InvoiceListComponent implements OnInit {
  invoices = [];

  constructor(
    private router: Router,
    private invoiceService: InvoiceService
  ) {}
  ngOnInit() {
    this.getAll();
  }
  

  new() {
    this.router.navigate(["invoice/add"]);
  }
  getAll() {
    this.invoiceService
      .get()
      .subscribe((response) => {
        this.invoices = response
      });
  }
}
