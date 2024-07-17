import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICustomer } from '../interfaces/customer';
import { ITransaction } from '../interfaces/transaction';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = "http://localhost:3000"

  constructor(private http:HttpClient) {}

  getCustomers(): Observable<ICustomer[]> {
    return this.http.get<ICustomer[]>(`${this.apiUrl}/customers`);
  }

  getTransactions(): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(`${this.apiUrl}/transactions`);
  }

  getTransactionsByCustomerId(customerId: number): Observable<ITransaction[]> {
    return this.http.get<ITransaction[]>(`${this.apiUrl}/transactions?customer_id=${customerId}`);
  }}
