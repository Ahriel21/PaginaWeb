import { HomeComponent } from './../components/home/home.component';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataApiGraphicService implements OnInit {


  constructor(private home: HomeComponent) { 
  }

  ngOnInit() {

  }

  //Opciones para los desplegables de los datos
  eleccionDatos(dato, data){
  
    if(dato == 'fi'){
      data.addColumn('number', 'fi');
    }

    if(dato == 'i'){
      data.addColumn('number', 'i');
    }

    if(dato == 'p'){
      data.addColumn('number', 'p');
    }

    if(dato == 's'){
      data.addColumn('number', 's');
    }

    if(dato == 'v'){
      data.addColumn('number', 'v');
    }
  }

  
  añadirColumnas15Min(datoFi, datoI, datoP, datoS, datoV, data, ano, mes, dia){

    if((datoFi) && (datoI) && (datoP) && (datoS) && (datoV)){
      for(var hora = 0; hora < 24; hora++){
        for(var min = 0; min < 60; min+=15){
          var i = Math.random() * (15 - 2) + 2;
          data.addRows([
            //[
            // new Date(ano,mes-1,dia,hora,min), 
            // valorFi[tamaño], valorI[tamaño], valorP[tamaño], valorS[tamaño], valorV[tamaño]
            //],
          ]);
        }
      }
    }

  }
    
}
