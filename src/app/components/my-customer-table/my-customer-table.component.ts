import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/interfaces/customer';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-my-customer-table',
  templateUrl: './my-customer-table.component.html',
  styleUrls: ['./my-customer-table.component.css']
})
export class MyCustomerTableComponent implements OnInit {
  customers: ICustomer[] =[]

  constructor(private _DataService:DataService){}


  ngOnInit(): void {
    this._DataService.getCustomers().subscribe((data:ICustomer[])=>
      this.customers = data
    )

}

}
