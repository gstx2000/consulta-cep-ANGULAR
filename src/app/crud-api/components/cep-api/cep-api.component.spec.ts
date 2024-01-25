import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepApiComponent } from './cep-api.component';

describe('CepApiComponent', () => {
  let component: CepApiComponent;
  let fixture: ComponentFixture<CepApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CepApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
