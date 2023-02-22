import { createFeatureSelector, createSelector } from "@ngrx/store";
import * as fromCustomerReducer from "../reducers/customers.reducer";

export const getCustomerState = createFeatureSelector<fromCustomerReducer.ICustomerState>(fromCustomerReducer.CUSTOMER_REDUCER_KEY);

export const getCustomersLoadingSelector = createSelector(getCustomerState,(state:fromCustomerReducer.ICustomerState)=>{
  return state.loading
})

export const getCustomersSelector = createSelector(getCustomerState,(state:fromCustomerReducer.ICustomerState)=>{
  return state.customers
})



  
 