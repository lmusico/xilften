import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {}

  public serie_id = String(this.route.snapshot.paramMap.get('serie'))
  public serie_num = this.route.snapshot.paramMap.get('id')
  public acervo: any = {
    breakingbad: [{
      serie: "Breaking Bad",
      temporada: "1",
      episodios: [
        { episodio: "1", nome: "Pilot", thumbnail: "../../../assets/images/BB_101_S.webp", duracao: "58", desc: "The first episode of the first season of Breaking Bad and the first episode of the series altogether." },
        { episodio: "2", nome: "Cat's in the Bag...", thumbnail: "../../../assets/images/BB_102_S.webp", duracao: "48", desc: "The second episode of the first season of Breaking Bad and the second episode overall." },
      ]
    },
    {
      serie: "Breaking Bad",
      temporada: "2",
      episodios: [
        { episodio: "1", nome: "Seven Thirty-Seven", thumbnail: "../../../assets/images/BB_201_S.webp", duracao: "58", desc: "The first episode of the first season of Breaking Bad and the first episode of the series altogether." },
        { episodio: "2", nome: "Grilled", thumbnail: "../../../assets/images/BB_202_S.webp", duracao: "48", desc: "The second episode of the first season of Breaking Bad and the second episode overall." },
      ]
    },
    {
      serie: "Breaking Bad",
      temporada: "3",
      episodios: [
        { episodio: "1", nome: "No Más", thumbnail: "../../../assets/images/BB_301_S.webp", duracao: "58", desc: "The first episode of the first season of Breaking Bad and the first episode of the series altogether." },
        { episodio: "2", nome: "Caballo Sin Nombre", thumbnail: "../../../assets/images/BB_302_S.webp", duracao: "48", desc: "The second episode of the first season of Breaking Bad and the second episode overall." },
      ]
    },
    {
      serie: "Breaking Bad",
      temporada: "4",
      episodios: [
        { episodio: "1", nome: "Box Cutter", thumbnail: "../../../assets/images/BB_401_S.webp", duracao: "58", desc: "The first episode of the first season of Breaking Bad and the first episode of the series altogether." },
        { episodio: "2", nome: "Thirty-Eight Snub", thumbnail: "../../../assets/images/BB_402_S.webp", duracao: "48", desc: "The second episode of the first season of Breaking Bad and the second episode overall." },
      ]
    },
    {
      serie: "Breaking Bad",
      temporada: "5",
      episodios: [
        { episodio: "1", nome: "Live Free or Die", thumbnail: "../../../assets/images/BB_501_S.webp", duracao: "58", desc: "The first episode of the first season of Breaking Bad and the first episode of the series altogether." },
        { episodio: "2", nome: "Madrigal", thumbnail: "../../../assets/images/BB_502_S.webp", duracao: "48", desc: "The second episode of the first season of Breaking Bad and the second episode overall." },
      ]
    }
    ]
  }

  public serieEscolhida: any = this.acervo[this.serie_id as keyof any].filter((x: { temporada: string | null; })=>x.temporada==this.serie_num)[0]

}
