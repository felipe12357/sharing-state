import { Customer } from "./customer.model";

export interface CustomerFromServer
{
    count:number,
    next:string,
    previous:string,
    results:Customer[]
}