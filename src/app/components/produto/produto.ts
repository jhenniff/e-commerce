import { Component } from '@angular/core';
import{UpperCasePipe} from '@angular/common';

@Component({
  selector: 'app-produto',
  imports: [UpperCasePipe],
  templateUrl: './produto.html',
  styleUrl: './produto.css',
})
export class Produto {
  produto = 'notebook'
  preco = 1500.99; //! preco = preço 
  mostrarProduto = true;
  mostrarPreco = true; 
  produtos =[
  {nome: 'teclado' , preco: 49.99}, 
  {nome: 'mouse' , preco: 29.99},
  {nome: 'monitor' , preco: 149.99}
  ];
}
