import { forkJoin  } from 'rxjs';
import { element } from 'protractor';
import { SuscribeTypes } from './../../models/subscribeTypes';
import { EventService } from './../../services/event.service';
import { Selected } from './../../models/selected';
import { MenuComponent } from './../menu/menu.component';
import { ValuesInterface } from './../../models/dashboard';
import { DataApiHouseService } from './../../services/data-api-house.service';
import { DataApiGraphicService } from './../../services/data-api-graphic.service';
import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements AfterViewInit, OnInit{

  isDataLoaded : boolean;
  houses: ValuesInterface[] = [];
  menu : MenuComponent;
  isSelected : Selected = {};
  selected : Selected = {};
  suscribeTypes : SuscribeTypes = new SuscribeTypes();


  constructor(
    private dataApiHouse: DataApiHouseService,
    private eventService : EventService,
    ){
      this.isSelected.isFi = false;
      this.isSelected.isP = true;
      this.isSelected.isI = false;
      this.isSelected.isS = false;
      this.isSelected.isV = false;
    }

  ngOnInit() {
    
    this.getData();
    this.selected = this.getSelected();

  }
 
  @ViewChild('lineChart', {static:false}) lineChart: ElementRef

  drawChart = () => {
   setTimeout(() => {

    var data = new google.visualization.DataTable();

    data.addColumn('datetime', 'Horas');
    data.addColumn('number', 'fi');
    data.addColumn('number', 'i');
    data.addColumn('number', 'p');
    data.addColumn('number', 's');
    data.addColumn('number', 'v');

    this.houses.forEach(element => {
      
      data.addRows([
        [
          new Date(element.ano,element.mes-1, element.dia, element.hora, element.minuto),
          element.fi,
          element.i,
          element.p,
          element.s,
          element.v,
        ]
      ]);

    });

    //Filtro de unidad de medida
    this.filterUnitMeasurement(data);
    
    var options = {
      'displayAnnotations': true,
      
    };
  
    //var chart = new google.charts.Line(this.lineChart.nativeElement);
  
    //chart.draw(data, options);
  
    var annotatedtimeline = new google.visualization.AnnotatedTimeLine(this.lineChart.nativeElement);
    annotatedtimeline.draw(data, options);
   }, 1000); 
  

}

  ngAfterViewInit() {

    google.load('visualization', '1', {packages: ['annotatedtimeline']});
    //google.charts.load('current', {packages: ['corechart', 'line']});
    google.charts.setOnLoadCallback(this.drawChart);
  }

  getData(){
    this.dataApiHouse.getAllHouses().subscribe(houses => {
      console.log(houses);
      this.houses = houses;
    });
  }


  getSelected() : Selected{
    //Parte de Fi
    
    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_FI, (data) => {
      console.log("Fi es: " + data)
      this.isSelected.isFi = data;

      google.charts.setOnLoadCallback(this.drawChart);
      
    });

    //Parte de I
    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_I, (data) => {
      console.log("I es: " + data)
      this.isSelected.isI = data;

    });

    //Parte de P
    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_P, (data) => {
      console.log("P es: " + data)
      this.isSelected.isP = data;
    });

    //Parte de S
    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_S, (data) => {
      console.log("S es: " + data)
      this.isSelected.isS = data;

    });

    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_V, (data) => {
      console.log("V es: " + data)
      this.isSelected.isV = data;
      

    });

    
    return this.isSelected;

  }

  filterUnitMeasurement(data){

    if(!this.selected.isFi){
      data.removeColumn(data.getNumberOfColumns() - 5);
      data.removeRow(data.getNumberOfRows() - 1);
    }

    if(!this.selected.isI){
      data.removeColumn(data.getNumberOfColumns() - 4);
      data.removeRow(data.getNumberOfRows() - 2);
    }

    if(!this.selected.isP){
      data.removeColumn(data.getNumberOfColumns() - 3);
      data.removeRow(data.getNumberOfRows() - 3);
    }

    if(!this.selected.isS){
      data.removeColumn(data.getNumberOfColumns() - 2);
      data.removeRow(data.getNumberOfRows() - 4);
    }

    if(!this.selected.isV){
      data.removeColumn(data.getNumberOfColumns() - 1);
      data.removeRow(data.getNumberOfRows() - 5);
    }

    if(data.getNumberOfColumns() < 2){
      data.insertColumn(data.getNumberOfColumns() , 'number', '');
      data.insertRows(data.getNumberOfRows(), 0);
      
    }


  }

}
