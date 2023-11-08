import { Component, OnInit } from '@angular/core';
import { Serie } from './serie';
import { dataSeries } from './dataSeries';

@Component({
  selector: 'app-serie',
  templateUrl: './serie.component.html',
  styleUrls: ['./serie.component.css']
})
export class SerieComponent implements OnInit {
  series: Array<Serie> = [];
  promedio: number = 0;

  constructor() { }

  ngOnInit() {
    this.series = this.getSerieList();
    this.calcularPromedio();
  }

  getSerieList(): Array<Serie> {
    return dataSeries;
  }

  calcularPromedio() {
    let totalTemporadas = 0;

    this.series.forEach((serie) => {
      totalTemporadas += serie.seasons;
    });

    if (this.series.length > 0) {
      this.promedio = totalTemporadas / this.series.length;
    }
  }
}
