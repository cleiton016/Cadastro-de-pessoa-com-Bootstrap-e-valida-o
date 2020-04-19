import { UfService } from './uf.service';
import { Component, OnInit } from '@angular/core';
import { Mask3Service} from 'node_modules/mask3a';

import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
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
  turmas = ['AP1 ', 'AP2 ', 'LPWEB ', 'LPC '];
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
  emailM = null;
//--------------------------------------------------------------------------------------\\
  m = 1;
  f = 0;
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = ['Feminino', 'Msculino'];
  public pieChartData: SingleDataSet = [this.f, this.m];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];

  constructor(private ufs: UfService, private mask3: Mask3Service) {
    monkeyPatchChartJsTooltip();
    monkeyPatchChartJsLegend();
  }
  ngOnInit(): void {this.ufs.allUf().subscribe((dados: any) => this.uf = dados); }

  cadastrar(form: any) {
    this.listaDeCadastrados.push({nome: this.nome, dataNascimento: this.data, sexo: this.sexo,
        cpf: this.cpf, email: this.email, telefone: this.telefone, endereco: this.endereco,
        cep: this.cep, cidade: this.cidade, documentos: this.documentos, uf: this.ufSelect,
        turmas: this.turmasSelect
      });
    if (this.sexo == 'Masculino') {
        this.m ++;
    }else {
      this.f ++;
    }
    this.pieChartData = [this.f, this.m];

    form.reset();
  }
  limpaForm(form) {
    form.reset();
  }
  getIdade(data: any) {
    const now = new Date;
    const ano = new Date(data);
    return now.getFullYear() - ano.getFullYear();
  }
  maskCPF() {
    this.cpf = this.mask3.maskDocCPF(this.cpf);
  }
  maskEmail(form) {
    this.emailM = this.mask3.maskEmail(form);
  }
  maskTel() {
    this.telefone = this.mask3.maskTell(this.telefone);
  }
  maskCep() {
    this.cep = this.mask3.maskCEP(this.cep);
  }
}
