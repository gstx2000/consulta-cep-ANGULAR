import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CepModel } from 'src/app/crud-ls/models/cep.model';

@Component({
  selector: 'app-edit-cep',
  templateUrl: './edit-cep.component.html',
  styleUrls: ['./edit-cep.component.scss']
})
export class EditCepComponent implements OnInit {

  form: FormGroup;

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CepModel,
    private dialogRef: MatDialogRef<EditCepComponent>
  ) {
    this.startFormResult(data.cep, data.logradouro, data.complemento, data.bairro, data.localidade, data.uf, data.ddd);
  }
  
  ngOnInit(): void {
  }

  startFormResult(cep?: string, logradouro?: string, complemento?: string, bairro?: string, localidade?: string, uf?: string, ddd?: string) {
    this.form = new FormGroup({
      cep: new FormControl({ value: cep, disabled: true }, Validators.required),
      logradouro: new FormControl({ value: logradouro, disabled: false },  Validators.required),
      complemento: new FormControl({ value: complemento, disabled: false }),
      bairro: new FormControl({ value: bairro, disabled: false },  Validators.required),
      localidade: new FormControl({ value: localidade, disabled: false }),
      uf: new FormControl({ value: uf, disabled: false },  Validators.required),
      ddd: new FormControl({ value: ddd, disabled: false }),
    });
  }

  onSubmit() {
    const cep: CepModel = this.form.getRawValue();
    
    this.dialogRef.close(cep)
  }

  cancelSubmit() {
    this.dialogRef.close(null)

  }

}
