import { Injectable } from "@angular/core";
import { ObservableStore } from "@codewithdan/observable-store";
import { BehaviorSubject, map, Observable, of, take } from "rxjs";
import { Customer } from "../models/customer.model";


import { CustomersService } from "./customers.service";

export enum CustomersStoreActions {
    GetCustomers = 'get_customers',
    GetCustomer = 'get_customer'
}

export interface StoreState {
    customers: Customer[];
    customer?: Customer;
}

@Injectable({
    providedIn: 'root'
  })
export class CustomersStoreObservableService extends ObservableStore<StoreState> {
    initialState = {
        customers: [],
       // customer: {}
    }

    constructor(private customersService:CustomersService) { 
       
        super({ trackStateHistory: true });
        this.setState(this.initialState, 'INIT_STATE');
    }

    async get(){
        const { customers } = this.getState();
        if (customers.length==0) {
           // call server and get data
            // assume async call here that returns observable
            const customers = await this.customersService.getAll().toPromise();
            this.setState({ customers }, CustomersStoreActions.GetCustomers)
        }
    }

    add(customer: Customer) {
        let state = this.getState();
        state.customers.push(customer);
        this.setState({ customers: state.customers }, 'ADD_CUSTOMER');
    }

    remove() {
        let state = this.getState();
        state.customers.splice(state.customers.length - 1, 1);
        this.setState({ customers: state.customers }, 'REMOVE_CUSTOMER');
    }

    getHistory(){
        console.log(this.stateHistory);
    }

}
