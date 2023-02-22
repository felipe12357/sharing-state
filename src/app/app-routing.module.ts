import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [{
    path:'event-bus',
    loadChildren:()=> import('./event-bus/event-bus.module').then(m =>m.EventBusModule)
},
{
  path:'redux',
  loadChildren:()=> import('./redux/redux.module').then(m =>m.ReduxModule)
},{
  path:'observable-store',
  loadChildren:()=> import('./observable-store/observable-store.module').then(m =>m.ObservableStoreModule)
},{
  path: '',
  redirectTo: '',
  pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
