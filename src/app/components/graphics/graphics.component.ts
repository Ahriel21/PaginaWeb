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
  data.addColumn('number', 'Guardians of the Galaxy 2');

  //Para cada 15 minutos
  for(var hora = 0; hora < 24; hora++){
    for(var min = 0; min < 60; min+=15){
      var i = Math.random() * (15 - 2) + 2;
      data.addRows([
        //Sustituir por
        //[new Date(ano,mes-1,dia,hora,min), valorCorrespondiente],
        [new Date(2019,11,3,hora,min), i,i+10],
      ]);
    }
  }

  /*
  //Para cada 1 minuto
  for(var hora = 0; hora < 24; hora++){
    for(var min = 0; min < 60; min++){
      var i = Math.random() * (15 - 2) + 2;
      data.addRows([
        //Sustituir por
        //[new Date(ano,mes-1,dia,hora,min), valorCorrespondiente],
        [new Date(2019,11,4,hora,min), i],
      ]);
    }
  }
  */
  var options = {
    //'width':1300,
    //'height':700,
    'displayAnnotations': true
    
  };

  //var chart = new google.charts.Line(this.lineChart.nativeElement);

  //chart.draw(data, options);

  var annotatedtimeline = new google.visualization.AnnotatedTimeLine(this.lineChart.nativeElement);
  annotatedtimeline.draw(data, options);

  //Ocultar dispositivos
  /*var hideFi_ = document.getElementById("hideFi");
  hideFi_.onclick = function()
   {
      var view = new google.visualization.DataView(data);
      view.hideColumns([2]); 
      view.hideRows([2]);
      annotatedtimeline.draw(view, options);
   }*/

}

  ngAfterViewInit() {
    google.load('visualization', '1', {packages: ['annotatedtimeline']});
    //google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

}
