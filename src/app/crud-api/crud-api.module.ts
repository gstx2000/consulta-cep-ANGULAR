import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CepApiComponent } from './components/cep-api/cep-api.component';
import { CrudApiRoutes } from './crud-api-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CepApiComponent
  ],
  imports: [
    CommonModule,
    CrudApiRoutes,
    SharedModule
  ]
})
export class CrudApiModule { }
