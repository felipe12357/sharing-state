import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReduxRoutingModule } from './redux-routing.module';
import { CustomersComponent } from './componentes/customers/customers.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer } from '../store/reducers/customers.reducer';


@NgModule({
  declarations: [
    CustomersComponent
  ],
  imports: [
    CommonModule,
    ReduxRoutingModule
  ]
})
export class ReduxModule { }
