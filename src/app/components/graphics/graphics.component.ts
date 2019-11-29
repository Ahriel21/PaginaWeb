import { Component, OnInit } from '@angular/core';
import { DataApiGraphicService } from './../../services/data-api-graphic.service';

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})

export class GraphicsComponent implements OnInit {

   dataGraphic: DataApiGraphicService;
   
   title = 'Average Temperatures of Cities';
   type = 'Line';
   data = [
      [0,  234.23, 230.64],
      [1, 234.15, 230.49],
      [2, 234.36, 230.51],
      [3, 234.26, 230.88],
      [4, 234.35, 230.71],
      [5,  234.45, 230.27],
   ];
   columnNames = ["Second", "Casa", "Coche"];
   options = {
      chart: {
        title: 'Título',
        subtitle: 'Subtitulo'
      },
   };
   width = 1200;
   height = 700;

  constructor() {}

  ngOnInit() {}

}
