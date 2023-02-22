import { createReducer, on } from "@ngrx/store";
import { Customer } from "src/app/models/customer.model";
import { getCustomersAction, loadedCustomersAction } from "../actions/customers.actions";

export const CUSTOMER_REDUCER_KEY ='customers_key';

export interface ICustomerState {
    customers: Customer[];
    customer: Customer | null;
    loading: boolean;
    error: boolean;
  }

export const initialState: ICustomerState = {
    customers: [],
    customer: null,
    loading: false,
    error: false
};


export const customerReducer = createReducer(
    initialState,
    //2 el reducer escucha la action y actualiza el estado
    on(getCustomersAction, (state) =>{ return {...state,loading:true} }),
    //5 el reducer escucha la action y actualiza los customers y el estado loading
    on(loadedCustomersAction, (state,{customers}) =>{ return {...state,customers:customers,loading:false} })
); 

