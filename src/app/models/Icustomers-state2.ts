import { Customer } from "./customer.model";

export interface ICustomerState2 {
    customers: Customer[];
    customer: Customer | null;
    loading: boolean;
    error: boolean;
  }