import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustommersComponent } from './components/custommers/custommers.component';

const routes: Routes = [
  {path:'',component:CustommersComponent}
];
@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ObservableStoreRoutingModule { }