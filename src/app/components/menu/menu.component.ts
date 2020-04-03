import { SuscribeTypes } from './../../models/subscribeTypes';
import { EventService } from './../../services/event.service';
import { Selected } from './../../models/selected';
import { Datee } from './../../models/datee';
import { Component, OnInit} from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { endOfDay, endOfMonth, format, startOfDay, startOfMonth } from 'date-fns';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  
  dropdownListDisp = [];
  selectedItemsDisp = [];
  dropdownSettingsDisp:IDropdownSettings = {};

  dropdownListUnidad = [];
  selectedItemsUnidad = [];
  dropdownSettingsUnidad:IDropdownSettings = {};

  startDay : number;
  endDay : number;
  startMonth : number;
  endMonth : number;
  startYear : number;
  endYear : number;

  //selected: {start: Date, end: Date};
  dateRange : Datee = {};
  isSelected : Selected = {};

  constructor( private eventService : EventService, ) {
    //this.dateRange = [new Date(), new Date()];
  }

  ngOnInit() {
    this.getDispositivos();
    this.getUnidadMedida();
    
  }

  //Parte de los dispositivos

  getDispositivos(){
    this.dropdownListDisp = [
      { item_id: 1, item_text: 'Casa 1' },
      { item_id: 2, item_text: 'Coche 1' },
      { item_id: 3, item_text: 'Fotovoltaica 1' },
    ];
    this.selectedItemsDisp = [
      { item_id: 1, item_text: 'Casa 1' },
    ];
    this.dropdownSettingsDisp = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      searchPlaceholderText: 'Buscar',
      selectAllText: 'Seleccionar todo',
      unSelectAllText: 'Deseleccionar todo',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  //Parte de las unidades de medida
  getUnidadMedida(){
    this.dropdownListUnidad = [
      { item_id: 1, item_text: 'fi' },
      { item_id: 2, item_text: 'i' },
      { item_id: 3, item_text: 'p' },
      { item_id: 4, item_text: 'v' },
      { item_id: 5, item_text: 's' }
    ];

    this.selectedItemsUnidad = [
      { item_id: 3, item_text: 'p' }
    ];

    this.dropdownSettingsUnidad = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      searchPlaceholderText: 'Buscar',
      selectAllText: 'Seleccionar todo',
      unSelectAllText: 'Deseleccionar todo',
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }

  //Parte para saber cual es la fecha seleccionada
  datepickerChange(event){
    console.log(
      //format(new Date(event.start._d), 'yyyy-MM-dd'),
      new Date(event.start._d).getDate(),
      new Date(event.start._d).getMonth() + 1,
      new Date(event.start._d).getFullYear(),
      new Date(event.end._d).getDate(),
      new Date(event.end._d).getMonth() + 1,
      new Date(event.end._d).getFullYear()
    )

    this.dateRange.startDay = new Date(event.start._d).getDate();
    this.dateRange.startMonth = new Date(event.start._d).getMonth() + 1;
    this.dateRange.startYear = new Date(event.start._d).getFullYear();

    this.dateRange.endDay = new Date(event.end._d).getDate();
    this.dateRange.endMonth = new Date(event.end._d).getMonth() + 1;
    this.dateRange.endYear = new Date(event.end._d).getFullYear();

    this.eventService.broadcast((new SuscribeTypes().START_DAY), this.dateRange.startDay);
    this.eventService.broadcast((new SuscribeTypes().START_MONTH), this.dateRange.startMonth);
    this.eventService.broadcast((new SuscribeTypes().START_YEAR), this.dateRange.startYear);
    this.eventService.broadcast((new SuscribeTypes().END_DAY), this.dateRange.endDay);
    this.eventService.broadcast((new SuscribeTypes().END_MONTH), this.dateRange.endMonth);
    this.eventService.broadcast((new SuscribeTypes().END_YEAR), this.dateRange.endYear);

  }


  //Para saber cual está seleccionado
  onItemSelect(item: any){
    
    this.getSelectedUnit();
    this.getSelectedDisp();
  }

  //Para saber cual está deseleccionado
  onItemDeSelect(item: any){

    this.getDeSelectedUnit();
    this.getDeSelectedDisp();
  }

  //Para saber si se seleccionan todos
  onItemSelectAll(item: any){
    
    this.getSelectedAllUnit();
    this.getSelectedAllDisp();
  }

  //Para saber si se deseleccionan todos
  onItemDeSelectAll(item: any){

    this.getDeSelectedAllUnit();
    this.getDeSelectedAllDisp();
  }

  //Funciones para el filtro de unidades de medida
  getSelectedUnit(){

    this.isSelected.isFi = false;
    this.isSelected.isI = false;
    this.isSelected.isP = false;
    this.isSelected.isS = false;
    this.isSelected.isV = false;
    

    for(var i=0; i<this.selectedItemsUnidad.length; i++){
      if(this.selectedItemsUnidad[i].item_text == 'fi'){
        this.isSelected.isFi = true;
      }

    }

    for(var i=0; i<this.selectedItemsUnidad.length; i++){
      if(this.selectedItemsUnidad[i].item_text == 'i'){
        this.isSelected.isI = true;
      }
    }

    for(var i=0; i<this.selectedItemsUnidad.length; i++){
      if(this.selectedItemsUnidad[i].item_text == 'p'){
        this.isSelected.isP = true;
      }
    }

    for(var i=0; i<this.selectedItemsUnidad.length; i++){
      if(this.selectedItemsUnidad[i].item_text == 's'){
        this.isSelected.isS = true;
      }
    }

    for(var i=0; i<this.selectedItemsUnidad.length; i++){
      if(this.selectedItemsUnidad[i].item_text == 'v'){
        this.isSelected.isV = true;
      }
    }

    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_FI), this.isSelected.isFi);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_I), this.isSelected.isI);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_P), this.isSelected.isP);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_S), this.isSelected.isS);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_V), this.isSelected.isV);
  }

  getDeSelectedUnit(){

    this.isSelected.isFi = false;
    this.isSelected.isI = false;
    this.isSelected.isP = false;
    this.isSelected.isS = false;
    this.isSelected.isV = false;

    for(var i=0; i<this.selectedItemsUnidad.length; i++){
      if(this.selectedItemsUnidad[i].item_text == 'fi'){
        this.isSelected.isFi = true;
      }

    }

    for(var i=0; i<this.selectedItemsUnidad.length; i++){
      if(this.selectedItemsUnidad[i].item_text == 'i'){
        this.isSelected.isI = true;
      }
    }

    for(var i=0; i<this.selectedItemsUnidad.length; i++){
      if(this.selectedItemsUnidad[i].item_text == 'p'){
        this.isSelected.isP = true;
      }
    }

    for(var i=0; i<this.selectedItemsUnidad.length; i++){
      if(this.selectedItemsUnidad[i].item_text == 's'){
        this.isSelected.isS = true;
      }
    }

    for(var i=0; i<this.selectedItemsUnidad.length; i++){
      if(this.selectedItemsUnidad[i].item_text == 'v'){
        this.isSelected.isV = true;
      }
    }

    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_FI), this.isSelected.isFi);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_I), this.isSelected.isI);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_P), this.isSelected.isP);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_S), this.isSelected.isS);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_V), this.isSelected.isV);
  }

  getSelectedAllUnit(){

    this.isSelected.isFi = true;
    this.isSelected.isI = true;
    this.isSelected.isP = true;
    this.isSelected.isS = true;
    this.isSelected.isV = true;

    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_FI), this.isSelected.isFi);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_I), this.isSelected.isI);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_P), this.isSelected.isP);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_S), this.isSelected.isS);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_V), this.isSelected.isV);
  }

  getDeSelectedAllUnit(){
    this.isSelected.isFi = false;
    this.isSelected.isI = false;
    this.isSelected.isP = false;
    this.isSelected.isS = false;
    this.isSelected.isV = false;

    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_FI), this.isSelected.isFi);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_I), this.isSelected.isI);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_P), this.isSelected.isP);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_S), this.isSelected.isS);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_V), this.isSelected.isV);
  }

  //Funciones para seleccionar los dispositivos
  getSelectedDisp(){

    this.isSelected.isHouseOne = false;
    this.isSelected.isCarOne = false;
    this.isSelected.isFotovoltaicaOne = false;
    

    for(var i=0; i<this.selectedItemsDisp.length; i++){
      if(this.selectedItemsDisp[i].item_text == 'Casa 1'){
        this.isSelected.isHouseOne = true;
      }

    }

    for(var i=0; i<this.selectedItemsDisp.length; i++){
      if(this.selectedItemsDisp[i].item_text == 'Coche 1'){
        this.isSelected.isCarOne = true;
      }
    }

    for(var i=0; i<this.selectedItemsDisp.length; i++){
      if(this.selectedItemsDisp[i].item_text == 'Fotovoltaica 1'){
        this.isSelected.isFotovoltaicaOne = true;
      }
    }

    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_HOUSE_ONE), this.isSelected.isHouseOne);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_CAR_ONE), this.isSelected.isCarOne);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_FOTOVOLTAICA_ONE), this.isSelected.isFotovoltaicaOne);
  }

  getDeSelectedDisp(){
    
    this.isSelected.isHouseOne = false;
    this.isSelected.isCarOne = false;
    this.isSelected.isFotovoltaicaOne = false;
    

    for(var i=0; i<this.selectedItemsDisp.length; i++){
      if(this.selectedItemsDisp[i].item_text == 'Casa 1'){
        this.isSelected.isHouseOne = true;
      }

    }

    for(var i=0; i<this.selectedItemsDisp.length; i++){
      if(this.selectedItemsDisp[i].item_text == 'Coche 1'){
        this.isSelected.isCarOne = true;
      }
    }

    for(var i=0; i<this.selectedItemsDisp.length; i++){
      if(this.selectedItemsDisp[i].item_text == 'Fotovoltaica 1'){
        this.isSelected.isFotovoltaicaOne = true;
      }
    }

    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_HOUSE_ONE), this.isSelected.isHouseOne);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_CAR_ONE), this.isSelected.isCarOne);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_FOTOVOLTAICA_ONE), this.isSelected.isFotovoltaicaOne);
  
  }

  getSelectedAllDisp(){

    this.isSelected.isHouseOne = true;
    this.isSelected.isCarOne = true;
    this.isSelected.isFotovoltaicaOne = true;

    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_HOUSE_ONE), this.isSelected.isHouseOne);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_CAR_ONE), this.isSelected.isCarOne);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_FOTOVOLTAICA_ONE), this.isSelected.isFotovoltaicaOne);
  
  }

  getDeSelectedAllDisp(){

    this.isSelected.isHouseOne = false;
    this.isSelected.isCarOne = false;
    this.isSelected.isFotovoltaicaOne = false;

    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_HOUSE_ONE), this.isSelected.isHouseOne);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_CAR_ONE), this.isSelected.isCarOne);
    this.eventService.broadcast((new SuscribeTypes().IS_SELECTED_FOTOVOLTAICA_ONE), this.isSelected.isFotovoltaicaOne);
  
  }
  
}
