import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public breakingBad ={
    serie: "Breaking Bad",
    serieRota: "breakingbad",
    temporadas:[
      {temporada: 1, thumbnail: "../../../assets/images/BB_S1_poster.webp", episodios: "7"},
      {temporada: 2, thumbnail: "../../../assets/images/BB_S2_poster.webp", episodios: "13"},
      {temporada: 3, thumbnail: "../../../assets/images/BB_S3_poster.webp", episodios: "13"},
      {temporada: 4, thumbnail: "../../../assets/images/BB_S4_poster.webp", episodios: "13"},
      {temporada: 5, thumbnail: "../../../assets/images/BB_S5A_poster.webp", episodios: "16"}
    ]
  }

}
