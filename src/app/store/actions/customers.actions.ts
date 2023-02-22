import { createAction, props } from "@ngrx/store";
import { Customer } from "src/app/models/customer.model";

export const getCustomersAction =  createAction('[Customer] GET_CUSTOMERES');
export const loadedCustomersAction =  createAction('[Customer] Loaded_CUSTOMERES',props<{customers: Customer[]}>());