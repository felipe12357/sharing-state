import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventBusRoutingModule } from './event-bus-routing.module';
import { ContainerComponent } from './components/container/container.component';


@NgModule({
  declarations: [
    ContainerComponent
  ],
  imports: [
    CommonModule,
    EventBusRoutingModule
  ]
})
export class EventBusModule { }
