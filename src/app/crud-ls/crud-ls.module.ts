import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepLsComponent } from './components/cep-ls/cep-ls.component';
import { CrudLsRoutes } from './crud-ls-routing.module';
import { EditCepComponent } from './components/dialogs/edit-cep/edit-cep.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CepLsComponent,
    EditCepComponent
  ],
  imports: [
    CommonModule,
    CrudLsRoutes,
    SharedModule
  ]
})
export class CrudLsModule { }
