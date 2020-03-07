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
      { item_id: 1, item_text: 'Mumbai' },
      { item_id: 2, item_text: 'Bangaluru' },
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' },
      { item_id: 5, item_text: 'New Delhi' }
    ];
    this.selectedItemsDisp = [
      { item_id: 3, item_text: 'Pune' },
      { item_id: 4, item_text: 'Navsari' }
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
    
    this.getSelected();
  }

  //Para saber cual está deseleccionado
  onItemDeSelect(item: any){

    this.getDeSelected();
  }

  //Para saber si se seleccionan todos
  onItemSelectAll(item: any){
    
    this.getSelectedAll();
  }

  //Para saber si se deseleccionan todos
  onItemDeSelectAll(item: any){

    this.getDeSelectedAll();
  }

  getSelected(){

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

  getDeSelected(){
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

  getSelectedAll(){

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

  getDeSelectedAll(){
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
  
}
