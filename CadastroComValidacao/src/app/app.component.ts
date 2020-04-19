import { UfService } from './uf.service';
import { Component, OnInit } from '@angular/core';
import { timer } from 'rxjs';
import { getLocaleDateFormat } from '@angular/common';
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
  listaDeCadastrados = [{nome: "Cleiton Luiz de Paula Barbosa",
  dataNascimento: '2000-02-20',
  sexo: "Masculino",
  cpf: "050.907.221-61",
  email: "cleitonluiz2014@gmail.com",
  telefone: "63992198455",
  endereco: "Quadra ARSE 82 Alameda 20         ",
  cep: "77023100",
  cidade: "Palmas",
  documentos: true,
  uf: "TO",
  turmas:["LPWEB", "LPC"]}
  ];
  constructor(private ufs: UfService) {}
  ngOnInit(): void {this.ufs.allUf().subscribe((dados: any) => this.uf = dados); }
  cadastrar(form) {
    this.listaDeCadastrados.push({nome: this.nome, dataNascimento: this.data, sexo: this.sexo,
                                  cpf: this.cpf, email: this.email, telefone: this.telefone,
                                  endereco: this.endereco, cep: this.cep, cidade: this.cidade, documentos: this.documentos,
                                  uf: this.ufSelect, turmas: this.turmasSelect});
    form.reset();
  }
  limpaForm(form) {
    form.reset();
  }
  getIdade(data: any){
    const now = new Date;
    const ano = new Date(data);
    return now.getFullYear() - ano.getFullYear();
  }
}
