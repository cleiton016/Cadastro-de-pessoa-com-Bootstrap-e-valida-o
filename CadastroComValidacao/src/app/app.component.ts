import { UfService } from './uf.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'CadastroComValidacao';
  nome = null;  data = null;  sexo = null;  cpf = null;  email = null;  telefone = null;
  endereco = null;  cep = null; cidade = null;  documentos = null; ufSelect = null; turmasSelect = null;
//-------------------------------------------------------------------------------------\\
  turmas = ['AP1', 'AP2', 'LPWEB', 'LPC'];
  uf: any;
  listaDeCadastrados = [];
  constructor(private ufs: UfService) {}
  ngOnInit(): void {this.ufs.allUf().subscribe((dados: any) => this.uf = dados);}
  cadastrar() {
    this.listaDeCadastrados.push({nome: this.nome, dataNascimento: this.data, sexo: this.sexo,
                                  cpf: this.cpf, email: this.email, telefone: this.telefone,
                                endereco: this.endereco, cep: this.cep, cidade: this.cidade, documentos: this.documentos,
                              uf: this.ufSelect, turmas: this.turmasSelect})
    this.limpaForm();
    console.log(this.listaDeCadastrados);
  }
  limpaForm() {
    this.nome = null;  this.data = null;  this.sexo = null;  this.cpf = null;  this.email = null;  this.telefone = null;
    this.endereco = null;  this.cep = null; this.cidade = null;  this.documentos = null; this.ufSelect = null;
  }
}
