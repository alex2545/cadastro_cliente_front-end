import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PessoasPesquisaComponent } from './pessoas-pesquisa.component';

describe('PessoasPesquisaComponent', () => {
  let component: PessoasPesquisaComponent;
  let fixture: ComponentFixture<PessoasPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PessoasPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PessoasPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
