import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { FormularioService } from './formulario.service';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {

  contatos: Array<any>;
  contato: any;

  constructor(private service: FormularioService) { }

  ngOnInit() {
    this.contato = {};

    this.service.listar()
      .subscribe(resposta => this.contatos = resposta);
  }
  criar(form: FormGroup) {
    this.service.criar(this.contato).subscribe(resposta => {
      this.contatos.push(resposta);
      form.reset();
    });
  }

}
