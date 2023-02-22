import { Component } from '@angular/core';

import { EventBusService, EventType } from './services/event-bus.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testProject';

  constructor(private eventbus: EventBusService){
    setTimeout(()=>this.eventbus.emit({name:EventType.CustomerSelected,value:'Felipe'}),3000)
  }
}
