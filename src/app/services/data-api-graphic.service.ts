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
  /*eleccionDatos(dato, data){
  
    if(dato == 'fi'){
      //Seleccionando 1 min = 60 segundos
      data.addColumn('number', 'fi');
    }

    if(dato == 'i'){
      //Seleccionando 5 min
      data.addColumn('number', 'i');
    }

    if(dato == 'p'){
      //Seleccionando 30 min
      data.addColumn('number', 'p');
    }

    if(dato == 's'){
      //Seleccionando 1 hora = 60 minutos
      data.addColumn('number', 's');
    }

    if(dato == 'v'){
      //Seleccionando 1 día = 24 horas
      data.addColumn('number', 'v');
    }
  }*/

  

    
}
