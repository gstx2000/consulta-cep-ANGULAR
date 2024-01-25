import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CepLsComponent } from './components/cep-ls/cep-ls.component';

const routes: Routes = [{
  path: 'cep-ls', component: CepLsComponent},
  {path: '', redirectTo: 'cep-ls', pathMatch: 'full'
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CrudLsRoutes { }
