import { ICustomer } from 'src/app/interfaces/customer';
import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';
import { Chart, registerables } from 'chart.js';
import { ITransaction } from 'src/app/interfaces/transaction';

// Register Chart.js plugins
Chart.register(...registerables);

@Component({
  selector: 'app-transaction-chart',
  templateUrl: './transaction-chart.component.html',
  styleUrls: ['./transaction-chart.component.css']
})
export class TransactionChartComponent implements OnInit {
customers:ICustomer[]=[]
filteredCustomers: ICustomer[] = [];
transactions: any[] = [];
transactionChart: any;
filteredCustomersInput:ICustomer[]=[]
filterText = ""




  constructor( private _DataService:DataService){}

  ngOnInit(): void {
    this._DataService.getCustomers().subscribe((data:ICustomer[])=>{
       this.customers = data ;
       this.filteredCustomersInput = this.customers;

      //  this.filteredCustomers = this.customers;

    })

    this._DataService.getTransactions().subscribe((data:ITransaction[])=>{

    })

  }
  applyFilter() {
    this.filteredCustomersInput = this.customers.filter(customer =>
      customer.name.toLowerCase().includes(this.filterText.toLowerCase())
    );
  }

  filterCustomers(event: any): void {
    const filterValue = event.target.value;
    if (filterValue) {
      this.filteredCustomersInput = this.customers.filter( customer => customer.name === filterValue );
    } else {
      this.filteredCustomersInput = this.customers;
    }
  }

  selectCustomer(customer: ICustomer): void {
    this._DataService.getTransactionsByCustomerId(customer.id).subscribe((data:any [])=>{
      this.transactions=data
      this.updateChart()

    })

  }


  updateChart(): void {
    const labelData = this.transactions.map(t => t.date);
    const amountData = this.transactions.map(t => t.amount);
    const chart = Chart.getChart('transactionChart');
    if (chart) {
      chart.destroy();
    }

    this.transactionChart = new Chart('transactionChart', {
      type: 'doughnut',
      data: {
        labels: labelData,
        datasets: [{
          label: 'Transaction Amount',
          data: amountData,
          backgroundColor:[
            'rgb(255, 99, 132)',
            'rgb(54, 162, 235)',],
            hoverOffset: 10,
            hoverBorderWidth: 3,
            hoverBorderColor: 'rgba(0, 0, 0, 0.8)',


        }]

      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

}




















}
