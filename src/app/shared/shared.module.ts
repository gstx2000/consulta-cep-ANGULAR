import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
     // Material
     MatCardModule,
     MatButtonModule,
     MatToolbarModule,
     MatIconModule,
     MatInputModule,
     MatSelectModule,
     MatProgressSpinnerModule,
     MatPaginatorModule,
     MatTableModule,
     MatSortModule,
     MatDialogModule,
     MatMenuModule
     
     
  ],
  exports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
     // Material
     MatCardModule,
     MatButtonModule,
     MatToolbarModule,
     MatIconModule,
     MatInputModule,
     MatSelectModule,
     MatProgressSpinnerModule,
     MatPaginatorModule,
     MatTableModule,
     MatSortModule,
     MatDialogModule,
     MatMenuModule
     
  ]
})
export class SharedModule { }
