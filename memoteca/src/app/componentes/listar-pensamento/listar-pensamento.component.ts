import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar-pensamento',
  templateUrl: './listar-pensamento.component.html',
  styleUrls: ['./listar-pensamento.component.scss']
})
export class ListarPensamentoComponent implements OnInit {

  listarPensamentos = [
    {
      conteudo: 'Passo informações para o componente filho ',
      autoria: 'Componente pai',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Minha propriedade é decorada com @Input()',
      autoria: 'Componente filho',
      modelo: 'modelo3'
    },
    {
      conteudo: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloribus inventore quia ipsa quam facilis quis minus, totam soluta nam suscipit, enim consequuntur. Adipisci consectetur earum similique aut modi expedita ad asda sasd a asdasd asdsa asd asdasdas  das?',
      autoria: '',
      modelo: 'modelo2'
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
