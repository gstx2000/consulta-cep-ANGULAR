import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: 'ls', loadChildren: ()=> 
  import('./crud-ls/crud-ls.module').then(x => x.CrudLsModule)},
{ path: 'api', loadChildren: ()=> 
import('./crud-api/crud-api.module').then(x => x.CrudApiModule)},
  {path: '**', redirectTo: 'ls'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
