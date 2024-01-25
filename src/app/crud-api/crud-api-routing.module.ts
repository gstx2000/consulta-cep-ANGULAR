import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepApiComponent } from './components/cep-api/cep-api.component';

const routes: Routes = [{
  path: 'cep-api', component: CepApiComponent},
  {path: '', redirectTo: 'cep-api', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudApiRoutes { }
