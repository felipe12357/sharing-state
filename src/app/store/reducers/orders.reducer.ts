import { createReducer, on } from "@ngrx/store";
import { Order } from "src/app/models/order.model";
import { getOrders } from "../actions/orders.actions";

export const ORDERS_REDUCER_KEY ='ORDERS_key';

export interface IOrdersState {
    Orders: Order[];
    Order: Order | null;
    loading: boolean;
    error: boolean;
  }

export const initialState: IOrdersState = {
    Orders: [],
    Order: null,
    loading: false,
    error: false
};


export const orderReducer = createReducer(
    initialState,
    //2 el reducer escucha la action y actualiza el estado
    on(getOrders, (state) =>{ return {...state,loading:true} })
); 