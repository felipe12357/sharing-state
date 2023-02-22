import { Injectable } from "@angular/core";
import { Actions,createEffect, ofType } from "@ngrx/effects";
import { catchError, EMPTY, map, of, switchMap } from "rxjs";
import { CustomersService } from "src/app/services/customers.service";
import { getCustomersAction, loadedCustomersAction } from "../actions/customers.actions";
@Injectable()
export class CustomersEffects {

    //4 escucha las actiones de tipo get customers
    loadCustomers$ = createEffect(() => this.actions$
    .pipe(
      ofType(getCustomersAction), 
      switchMap(() =>this.customersService.getAll() //consulta la informacion del servidor
        .pipe(
            //5 dispara la action loadedCustomers enviando los customers y actualizar el estado

            //Aca espera un objecto con la propiedad customers
            //map(customers =>loadedCustomersAction({customers:customers})), //se puede hacer asi
          map(customers =>loadedCustomersAction({customers})) //o asi usando destructing
          //de esta forma no es necesario crear la action:
         // map(customers => ({ type: '[Customer] Loaded_CUSTOMERES', payload: customers })) 
        ))
    ));

    constructor(private customersService:CustomersService,private actions$: Actions){
    }
 

} 
   