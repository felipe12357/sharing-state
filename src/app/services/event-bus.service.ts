import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

    private subject$ = new Subject();
    subjectObservable$ = this.subject$.asObservable()

    on(event: EventType):Observable<any> {
        return this.subjectObservable$.pipe(
                    filter((e: any) => e.name === event),
                    map((e: EmitEventI) => e.value)
                  )
    }

    emit(event: EmitEventI) {
        this.subject$.next(event);
    }
}


export interface EmitEventI {
    name:EventType,
    value:any
}


export enum EventType {
  CustomerSelected
}