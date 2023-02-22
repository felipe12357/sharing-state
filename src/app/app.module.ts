import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { StoreModule } from '@ngrx/store';
import { customerReducer,CUSTOMER_REDUCER_KEY } from './store/reducers/customers.reducer';
import { orderReducer, ORDERS_REDUCER_KEY } from './store/reducers/orders.reducer';
import { EffectsModule } from '@ngrx/effects';
import { CustomersEffects } from './store/effects/customers.effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([CustomersEffects]),
    //importante el nombre de la propiedad debe ser el mismo q se utiliza en el archivo de selectors
     StoreModule.forRoot({ 
      [CUSTOMER_REDUCER_KEY]: customerReducer,
      [ORDERS_REDUCER_KEY]: orderReducer
     }),
     //Esto es para habilitar las herramientas de redux en el navegador
     //importante debe estar despues de la configuracion del store
     StoreDevtoolsModule.instrument({
      maxAge: 25
    }),
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
