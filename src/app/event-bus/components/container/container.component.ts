import { Component, OnInit } from '@angular/core';
import { EventBusService, EventType } from 'src/app/services/event-bus.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  usuariosList:string[] = [];
  constructor(private eventbus: EventBusService) { 
    this.eventbus.subjectObservable$.subscribe(val => console.log(val))
  }

  ngOnInit(): void {
     this.eventbus.on(EventType.CustomerSelected).subscribe(val =>this.usuariosList.push(val))
  }

}
