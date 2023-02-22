import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable, tap } from 'rxjs';
import { Customer } from 'src/app/models/customer.model';
import { getCustomersAction } from 'src/app/store/actions/customers.actions';
import { getCustomersLoadingSelector, getCustomersSelector } from 'src/app/store/selectors/customer.selectors';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.scss']
})
export class CustomersComponent implements OnInit {
  isLoading$!: Observable<boolean>; 
  customers$!: Observable<Customer[]>;

  constructor(private store: Store) { }
  
  ngOnInit(): void {
    //3 por medio del selector escucho los cambios del estado
    this.isLoading$=this.store.pipe(select(getCustomersLoadingSelector))
    //6 por medio del selector escucho los cambios del estado
    this.customers$ = this.store.pipe(select(getCustomersSelector))
  }

  getCustomers(){
    //1 pide obtener los customer llamando la action getCustomers
    this.store.dispatch(getCustomersAction());
  }

}
