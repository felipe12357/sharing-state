import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, firstValueFrom, map, Observable, of, pluck, throwError } from "rxjs";
import { Customer } from "../models/customer.model";
import { CustomerFromServer } from "../models/customers.fromServer";

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
   apiUrlBase:string = 'https://swapi.dev/api'

   constructor(private http: HttpClient){}
   
   getAll():Observable<Customer[]>{
      console.log('entra al servicio');
      return this.http.get<CustomerFromServer>(`${this.apiUrlBase}/people`)
      .pipe(
         map((data:CustomerFromServer)=>{console.log(data); return data.results}),
        catchError(this.handleError())
      );
   }


   private handleError<T>(requestData?: T) {
      return (res: HttpErrorResponse) => {
        return throwError(()=>({res, requestData}));
      };
   }
  
}