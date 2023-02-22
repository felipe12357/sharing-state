import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustommersComponent } from './components/custommers/custommers.component';
import { ObservableStoreRoutingModule } from './observable-store-routing.module';



@NgModule({
  declarations: [
    CustommersComponent
  ],
  imports: [
    CommonModule,
    ObservableStoreRoutingModule
  ]
})
export class ObservableStoreModule { }
