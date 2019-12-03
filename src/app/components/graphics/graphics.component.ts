import { DataApiGraphicService } from './../../services/data-api-graphic.service';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements AfterViewInit{

  //constructor(private graphicService: DataApiGraphicService){}

  @ViewChild('lineChart', {static:true}) lineChart: ElementRef

  drawChart = () => {

  var data = new google.visualization.DataTable();

  data.addColumn('datetime', 'Horas');
  //this.graphicService.eleccionDatos(dato, data); Cambiar por lo de abajo
  data.addColumn('number', 'Guardians of the Galaxy');

  //Para cada 15 minutos
  
  /*
  for(var hora = 0; hora < 24; hora++){
    for(var min = 0; min < 60; min+=15){
      data.addRows([
        [hora':'min,  i+1],
      ]);
    }
  }
  */

 var horaString = '';
 var concatena = '';

 for(var hora = 0; hora < 24; hora++){
  for(var min = 0; min < 60; min+=15){
    var i = Math.random() * (15 - 2) + 2;
    data.addRows([
      //Sustituir por
      //[new Date(ano,dia-1,mes,hora,min), valorCorrespondiente],
      [new Date(2019,2,12,hora,min), i],
    ]);
  }
}

  var options = {
    chart: {
      title: 'Box Office Earnings in First Two Weeks of Opening',
      subtitle: 'in millions of dollars (USD)'
    },
    hAxis: {
      format: 'HH:mm'
    },
    'width':1300,
    'height':700
    
  };

  var chart = new google.charts.Line(this.lineChart.nativeElement);

  chart.draw(data, options);
}

  ngAfterViewInit() {
    google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

}
