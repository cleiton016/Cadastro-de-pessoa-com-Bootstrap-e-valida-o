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
  endereco = null;  cep = null; cidade = null;  documentos = null;
  turmas = ['AP1', 'AP2', 'LPWEB', 'LPC'];
  //uf = ['AC','AL','AP','AM','BA','DF','CE','ES','GO','MA','MT','MS','MG','PA','PB','PR','PE','PI','RJ','RN','RS','RO','RR','SC','SP','SE'
  //];
  uf = null;
  constructor(private ufs: UfService) {}
  ngOnInit(): void {
    this.ufs.allUf().subscribe((dados: any) => this.uf = dados);
  }

}
