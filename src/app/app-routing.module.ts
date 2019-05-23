import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManzanaComponent} from './manzana/manzana.component';
import { NaranjaComponent} from './naranja/naranja.component';
import { SandiaComponent} from './sandia/sandia.component';
const routes: Routes = 
[
  {path: 'manzana', component: ManzanaComponent},
  {path: 'naranja', component: NaranjaComponent},
  {path: 'sandia', component: SandiaComponent},
  {path: '**', component: ManzanaComponent} 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
