import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditCepComponent } from './edit-cep.component';

describe('EditCepComponent', () => {
  let component: EditCepComponent;
  let fixture: ComponentFixture<EditCepComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditCepComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditCepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
