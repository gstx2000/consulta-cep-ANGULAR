import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CepLsComponent } from './cep-ls.component';

describe('CepLsComponent', () => {
  let component: CepLsComponent;
  let fixture: ComponentFixture<CepLsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CepLsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CepLsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
