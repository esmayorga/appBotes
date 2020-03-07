import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesPage } from './clientes.page';

describe('ClientesPage', () => {
  let component: ClientesPage;
  let fixture: ComponentFixture<ClientesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClientesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
