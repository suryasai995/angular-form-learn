import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NaveBarComponent } from './nave-bar/nave-bar.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TdfComponent } from './tdf/tdf.component';

const routes: Routes = [
  {path:"",component:NaveBarComponent},
  {path:"tdForm",component:TdfComponent},
  {path:"rtForm",component:ReactiveFormComponent},
  {path:"***",component:AppComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
