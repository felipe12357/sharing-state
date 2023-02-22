import { Component, OnInit } from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { CustomersStoreObservableService } from 'src/app/services/customers-store-observable.service';

@Component({
  selector: 'app-custommers',
  templateUrl: './custommers.component.html',
  styleUrls: ['./custommers.component.scss']
})
export class CustommersComponent implements OnInit {

  customerList$!: Observable<Customer[]>;
  storeSub!: Subscription;

  customerList: Customer[] =[];

  constructor(private CustomersStoreObservableService:CustomersStoreObservableService) { }

  ngOnInit(): void {
    //forma1
    this.customerList$ = this.CustomersStoreObservableService.stateChanged.pipe(map(data => data.customers));
  
   //forma2
  /*  
   this.storeSub = this.CustomersStoreObservableService.stateChanged.subscribe(state => {
      if (state) {
        this.customerList = state.customers;
      } 
    });  */ 


  }

  ngOnDestroy() {
    //con la forma 2 debo manejar  la desuscripcion
    if (this.storeSub) {
        this.storeSub.unsubscribe();
    }        
}

  getHistory(){
    this.CustomersStoreObservableService.getHistory()
  }

  getCustomers(){
    this.CustomersStoreObservableService.get();
  }

  addCustomer(){
    this.CustomersStoreObservableService.add({
      id: 123,
      name: 'string',
      city: 'string',
      orderTotal: 4
    })
    this.CustomersStoreObservableService.get();
  }

}
