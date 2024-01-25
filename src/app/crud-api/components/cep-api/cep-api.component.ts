import { Component, OnInit, ViewChild } from '@angular/core';
import { CepApiService } from '../../services/cep-api.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { CepModel } from '../../models/cep.model';
import { EditCepComponent } from 'src/app/crud-ls/components/dialogs/edit-cep/edit-cep.component';


@Component({
  selector: 'app-cep-api',
  templateUrl: './cep-api.component.html',
  styleUrls: ['./cep-api.component.scss']
})
export class CepApiComponent implements OnInit {

  isLoading = false;
  form: FormGroup;
  resultform: FormGroup;
  public savedFormData: any;
  formDataList: any[] = [];
  public cep: any;
  displayedColumns: string[] = ['CEP', 'Logradouro', 'Complemento', 'Bairro', 'Localidade', 'UF', 'DDD','actions'];
  dataSource: MatTableDataSource<CepModel>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  ViacepService: any;

  constructor(
    private  viaAPi: CepApiService,
    public dialog: MatDialog,

    ) { }

  ngOnInit(): void {
    this.getAllCeps();
    this.dataSource = new MatTableDataSource<CepModel>([]);



   
    this.form = new FormGroup({
      cep: new FormControl(
        { value: null, disabled: false }, Validators.compose([Validators.minLength(8), Validators.required]))});
    
     this.startFormResult();
    

    this.dataSource = new MatTableDataSource<CepModel>([]);

    const storageData = localStorage.getItem('SEARCH_RESULTS_LS');
    if (storageData){
      this.dataSource = new MatTableDataSource<CepModel>(JSON.parse(storageData));
    } else {
      this.dataSource = new MatTableDataSource<CepModel>();
    }
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;  
  }
  
  states = [
    { value: 'AC', name: 'Acre', bold: true },
    { value: 'AL', name: 'Alagoas', bold: true },
    { value: 'AP', name: 'Amapá', bold: true },
    { value: 'AM', name: 'Amazonas', bold: true },
    { value: 'BA', name: 'Bahia', bold: true },
    { value: 'CE', name: 'Ceará', bold: true },
    { value: 'DF', name: 'Distrito Federal', bold: true },
    { value: 'ES', name: 'Espírito Santo', bold: true },
    { value: 'GO', name: 'Goiás', bold: true },
    { value: 'MA', name: 'Maranhão', bold: true },
    { value: 'MT', name: 'Mato Grosso', bold: true },
    { value: 'MS', name: 'Mato Grosso do Sul', bold: true },
    { value: 'MG', name: 'Minas Gerais', bold: true },
    { value: 'PA', name: 'Pará', bold: true },
    { value: 'PB', name: 'Paraíba', bold: true },
    { value: 'PR', name: 'Paraná', bold: true },
    { value: 'PE', name: 'Pernambuco', bold: true },
    { value: 'PI', name: 'Piauí', bold: true },
    { value: 'RJ', name: 'Rio de Janeiro', bold: true },
    { value: 'RN', name: 'Rio Grande do Norte', bold: true },
    { value: 'RS', name: 'Rio Grande do Sul', bold: true },
    { value: 'RO', name: 'Rondônia', bold: true },
    { value: 'RR', name: 'Roraima', bold: true },
    { value: 'SC', name: 'Santa Catarina', bold: true },
    { value: 'SP', name: 'São Paulo', bold: true },
    { value: 'SE', name: 'Sergipe', bold: true },
    { value: 'TO', name: 'Tocantins', bold: true },
  ];


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  consultarCep() {
    const cep = this.form.get('cep')?.value;
    const model = this.form.getRawValue();
    this.isLoading = true;

    setTimeout(() => {
      
      this.ViacepService.consultarCep(cep).subscribe({
        next: (res: CepModel) => {
          this.startFormResult(res.cep, res.logradouro, res.complemento, res.bairro, res.localidade, res.uf, res.ddd);
          this.cep = res;
          this.isLoading = false;
         
        },
        error: () => {
          this.isLoading = false;
          alert('Erro ao buscar CEP, tente novamente.');
        },
      });
    }, 2000);
  }

  startLoading() {
    this.isLoading = true;
    this.consultarCep();
  }

   onCopyButtonClick() {
     const contentToCopy = document.getElementById('contentToCopy');

     if (!contentToCopy) {
      return;
     }
     const range = document.createRange();
    range.selectNode(contentToCopy);

     window.getSelection()?.addRange(range);

     document.execCommand('copy');

     window.getSelection()?.removeAllRanges();
   }

  onSubmit() {
    const formValue: CepModel =  this.resultform.getRawValue();
    this.ViacepService.setCEP(formValue);
    this.ViacepService.addDataToTable(formValue)
    this.resultform.reset();
  }
  
  refreshTable() {
    const ceps = this.cep.CepApiService.getAllCeps();
   this.dataSource = new MatTableDataSource<CepModel>(ceps);
   this.dataSource.paginator = this.paginator;
   this.dataSource.sort = this.sort;  
  }

  editCEP(cep: CepModel) {
    const _dialog = this.dialog.open(EditCepComponent, {
      data: cep,
      width: '350px'
    });
    _dialog.afterClosed().subscribe({
      next: (res:CepModel) => {
        if (res != null) {
          this.cep.CepApiService.editTable(res)
        }
      }

      
    })
    
  }

  confirmDelete(cep: CepModel) {
    if (!cep.cep) {
      console.error('CEP value is undefined or missing.');
      return;
    }
    
    const result: boolean = confirm('Deseja excluir este CEP?');
    
    if (result) {
      this.viaAPi.deleteCep(cep.cep).subscribe(
        () => {
        
        },
        (error) => {
          console.error('Erro:', error);
        }
      );
    }
  }
  
  confirmDeleteTable() {
    const result: boolean = confirm('Deseja excluir todos os CEPs?')
    if (result == true) {
      this.ViacepService.clearTable()
    } else {
      alert('Objetos não removidos.')
    }
  }
  
  startFormResult(cep?: string, logradouro?: string, complemento?: string, bairro?: string, localidade?: string, uf?: string, ddd?: string) {
    this.resultform = new FormGroup({
      cep: new FormControl({ value: cep, disabled: false }, Validators.required),
      logradouro: new FormControl({ value: logradouro, disabled: false },  Validators.required),
      complemento: new FormControl({ value: complemento, disabled: false }),
      bairro: new FormControl({ value: bairro, disabled: false },  Validators.required),
      localidade: new FormControl({ value: localidade, disabled: false }),
      uf: new FormControl({ value: uf, disabled: false },  Validators.required),
      ddd: new FormControl({ value: ddd, disabled: false }),
    });
  }

  //API METHODS

  getAllCeps() {
    this.viaAPi.getAllCeps().subscribe({
      next: (res) => {
        this.dataSource.data = res},

      error: () => {

      }
    })
  }

}