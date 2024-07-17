import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http:HttpClient) { }
  private apiUrl ='http://localhost:3000'




  

  getCustomers() {
    return this.http.get(`${this.apiUrl}/customers`);
  }

  getTransactions() {
    return this.http.get(`${this.apiUrl}/transactions`);
  }



  getTransactionsByCustomer(customerId: number) {
    return this.http.get(`${this.apiUrl}/transactions?customer_id=${customerId}`);
  }





}
