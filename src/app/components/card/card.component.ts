import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() episodio!: string;
  @Input() nome!: string;
  @Input() serie!: string;
  @Input() duracao!: string;
  @Input() thumbnail!: string;
  @Input() desc!: string;
  @Input() rota!: string;


}

export class conteudoCard{
  episodio: string;
  serie: string;
  duracao: string;
  thumbnail: string;

  constructor(episodio: string, serie: string, duracao: string, thumbnail: string){
    this.episodio = episodio;
    this.serie = serie;
    this.duracao = duracao;
    this.thumbnail = thumbnail;
  }


}
