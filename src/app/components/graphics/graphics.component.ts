import { forkJoin  } from 'rxjs';
import { element } from 'protractor';
import { SuscribeTypes } from './../../models/subscribeTypes';
import { EventService } from './../../services/event.service';
import { Selected } from './../../models/selected';
import { MenuComponent } from './../menu/menu.component';
import { ValuesInterface } from './../../models/dashboard';
import { DataApiHouseService } from './../../services/data-api-house.service';
import { DataApiCarService } from './../../services/data-api-car.service';
import { AfterViewInit, Component, ElementRef, ViewChild, OnInit } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-graphics',
  templateUrl: './graphics.component.html',
  styleUrls: ['./graphics.component.css']
})
export class GraphicsComponent implements AfterViewInit, OnInit{

  houses: ValuesInterface[] = [];
  cars: ValuesInterface[] = [];
  cont : number = 0;
  menu : MenuComponent;
  isSelected : Selected = {};
  isSelectedDisp : Selected = {};
  selectedUnit : Selected = {};
  selectedDisp : Selected = {};
  suscribeTypes : SuscribeTypes = new SuscribeTypes();

  constructor(
    private dataApiHouse: DataApiHouseService,
    private dataApiCar: DataApiCarService,
    private eventService : EventService,
    ){
      this.isSelected.isFi = false;
      this.isSelected.isP = true;
      this.isSelected.isI = false;
      this.isSelected.isS = false;
      this.isSelected.isV = false;

      this.isSelectedDisp.isHouseOne = true;
      this.isSelectedDisp.isCarOne = false;
      this.isSelectedDisp.isFotovoltaicaOne = false;
    }

  ngOnInit() {
    
    this.getDataHouses();
    this.getDataCars();
    this.selectedUnit = this.getSelectedUnit();
    this.selectedDisp = this.getSelectedDisp();
  }
 
  @ViewChild('lineChart', {static:false}) lineChart: ElementRef

  drawChart = () => {
   setTimeout(() => {

    var data = new google.visualization.DataTable();

    data.addColumn('datetime', 'Horas');
    data.addColumn('number', 'Casa 1 (fi)');
    data.addColumn('number', 'Casa 1 (i)');
    data.addColumn('number', 'Casa 1 (p)');
    data.addColumn('number', 'Casa 1 (s)');
    data.addColumn('number', 'Casa 1 (v)');
    data.addColumn('number', 'Coche 1 (fi)');
    data.addColumn('number', 'Coche 1 (i)');
    data.addColumn('number', 'Coche 1 (p)');
    data.addColumn('number', 'Coche 1 (s)');
    data.addColumn('number', 'Coche 1 (v)');

    this.cont = 0;

    this.houses.forEach(element => {

      data.addRows([
        [
          new Date(element.ano,element.mes-1, element.dia, element.hora, element.minuto),
          element.fi,
          element.i,
          element.p,
          element.s,
          element.v,
          this.cars[this.cont].fi,
          this.cars[this.cont].i,
          this.cars[this.cont].p,
          this.cars[this.cont].s,
          this.cars[this.cont].v
        ]
      ]);

      this.cont++;

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

  getDataHouses(){
    this.dataApiHouse.getAllHouses().subscribe(houses => {
      console.log(houses);
      this.houses = houses;
    });
  }

  getDataCars(){
    this.dataApiCar.getAllCars().subscribe(cars => {
      console.log(cars);
      this.cars = cars;
    });
  }


  getSelectedUnit() : Selected{
    //Parte de Fi
    
    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_FI, (data) => {
      this.isSelected.isFi = data;

      google.charts.setOnLoadCallback(this.drawChart);
      
    });

    //Parte de I
    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_I, (data) => {
      this.isSelected.isI = data;

    });

    //Parte de P
    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_P, (data) => {
      this.isSelected.isP = data;
    });

    //Parte de S
    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_S, (data) => {
      this.isSelected.isS = data;

    });

    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_V, (data) => {
      this.isSelected.isV = data;
      

    });

    
    return this.isSelected;

  }

  getSelectedDisp() : Selected{
    
    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_HOUSE_ONE, (data) => {
      this.isSelectedDisp.isHouseOne = data;
      
      google.charts.setOnLoadCallback(this.drawChart);
      
    });
    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_CAR_ONE, (data) => {
      this.isSelectedDisp.isCarOne = data;
      

    });
    this.eventService.subscribe(this.suscribeTypes.IS_SELECTED_FOTOVOLTAICA_ONE, (data) => {
      this.isSelectedDisp.isFotovoltaicaOne = data;
      

    });

    
    return this.isSelectedDisp;
  }

  filterUnitMeasurement(data){

    if(this.isSelectedDisp.isCarOne && this.isSelectedDisp.isHouseOne){

      console.log("Entro aqui")

      if(this.isSelectedDisp.isHouseOne){
        if(!this.selectedUnit.isFi){
          data.removeColumn(data.getNumberOfColumns() - 10);
        }
        if(!this.selectedUnit.isI){
          data.removeColumn(data.getNumberOfColumns() - 9);
        }
        if(!this.selectedUnit.isP){
          data.removeColumn(data.getNumberOfColumns() - 8);
        }
        if(!this.selectedUnit.isS){
          data.removeColumn(data.getNumberOfColumns() - 7);
        }
        if(!this.selectedUnit.isV){
          data.removeColumn(data.getNumberOfColumns() - 6);
        }
      }

      if(this.isSelectedDisp.isCarOne){
        if(!this.selectedUnit.isFi){
          data.removeColumn(data.getNumberOfColumns() - 5);
        }
        if(!this.selectedUnit.isI){
          data.removeColumn(data.getNumberOfColumns() - 4);
        }
        if(!this.selectedUnit.isP){
          data.removeColumn(data.getNumberOfColumns() - 3);
        }
        if(!this.selectedUnit.isS){
          data.removeColumn(data.getNumberOfColumns() - 2);
        }
        if(!this.selectedUnit.isV){
          data.removeColumn(data.getNumberOfColumns() - 1);
        }
      }

    }else{

      console.log("Entro aqui xD")

      if(!this.isSelectedDisp.isCarOne && !this.isSelectedDisp.isHouseOne){

        data.removeColumn(data.getNumberOfColumns() - 10);
        data.removeColumn(data.getNumberOfColumns() - 9);
        data.removeColumn(data.getNumberOfColumns() - 8);
        data.removeColumn(data.getNumberOfColumns() - 7);
        data.removeColumn(data.getNumberOfColumns() - 6);
        data.removeColumn(data.getNumberOfColumns() - 5);
        data.removeColumn(data.getNumberOfColumns() - 4);
        data.removeColumn(data.getNumberOfColumns() - 3);
        data.removeColumn(data.getNumberOfColumns() - 2);
        data.removeColumn(data.getNumberOfColumns() - 1);

        if(data.getNumberOfColumns() < 2){
          data.insertColumn(data.getNumberOfColumns() , 'number', '');
          data.insertRows(data.getNumberOfRows(), 0);
          
        }

      }else {

        if(!this.isSelectedDisp.isHouseOne){
          data.removeColumn(data.getNumberOfColumns() - 10);
          data.removeColumn(data.getNumberOfColumns() - 9);
          data.removeColumn(data.getNumberOfColumns() - 8);
          data.removeColumn(data.getNumberOfColumns() - 7);
          data.removeColumn(data.getNumberOfColumns() - 6);
        }

        if(!this.isSelectedDisp.isCarOne){
          data.removeColumn(data.getNumberOfColumns() - 5);
          data.removeColumn(data.getNumberOfColumns() - 4);
          data.removeColumn(data.getNumberOfColumns() - 3);
          data.removeColumn(data.getNumberOfColumns() - 2);
          data.removeColumn(data.getNumberOfColumns() - 1);
        }

        if(this.isSelectedDisp.isCarOne || this.isSelectedDisp.isHouseOne){
          if(!this.selectedUnit.isFi){
            data.removeColumn(data.getNumberOfColumns() - 5);
          }
          if(!this.selectedUnit.isI){
            data.removeColumn(data.getNumberOfColumns() - 4);
          }
          if(!this.selectedUnit.isP){
            data.removeColumn(data.getNumberOfColumns() - 3);
          }
          if(!this.selectedUnit.isS){
            data.removeColumn(data.getNumberOfColumns() - 2);
          }
          if(!this.selectedUnit.isV){
            data.removeColumn(data.getNumberOfColumns() - 1);
          }
        }
    
      }
    }

  }

  

}
