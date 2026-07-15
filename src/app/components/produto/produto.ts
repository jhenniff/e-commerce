import { Component, Input, Output, EventEmitter } from '@angular/core';
import{UpperCasePipe, CurrencyPipe} from '@angular/common';
//O IMPORT SERVE PRA TRAZER CARACTERIZACOES DE TEXTO (NUMERO, LETRA, ETC)
import {PrecoFormatadoPipe} from '../../pipes/preco-formatado-pipe'

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe, PrecoFormatadoPipe ],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
//Adicionar variaveis e condições do produto 
export class Produto {
  //entrada de dados
  @Input() nome: string ='';
  @Input() preco: number = 0;
  //saida de dados 
  @Output() produtoSelecionado: EventEmitter<string> = new EventEmitter<string>();
  selecionarProduto() {
    this.produtoSelecionado.emit(this.nome);
}
}
