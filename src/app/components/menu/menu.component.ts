import { SuscribeTypes } from './../../models/subscribeTypes';
import { EventService } from './../../services/event.service';
import { Selected } from './../../models/selected';
import { Component, OnInit} from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { NgxDaterangepickerMd } from 'ngx-daterangepicker-material';

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

  isSelected : Selected = {};

  constructor( private eventService : EventService, ) {}

  ngOnInit() {
    this.getDispositivos();
    this.getUnidadMedida();

  }
  
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


  //Para saber cual está seccionado
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
