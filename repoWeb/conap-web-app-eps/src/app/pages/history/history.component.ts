import { Component, OnInit } from '@angular/core';
import { ReportService } from '../../services/report.service';

import Swal from 'sweetalert2';

interface ValoresDropdown {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  p: number = 1; // Variable para almacenar la página actual
  itemsPerPage: number = 3; // Número de elementos que quieres mostrar por página

  selectedRoute: any;
  selectedArea: any;
  constructor(private reporteService:ReportService) { }

  datos:any = []
  ngOnInit(): void {
    //this.obtenerHistorial()
    this.llenarDropdownRutas()
  }

  foods: ValoresDropdown[] = [
  ];
  foods1: ValoresDropdown[] = [
  ];

  onAreaSelect(Area: number) {
    this.loadingDropdownAreas2 = false;
    this.selectedRoute = null;
    //console.log('Cambie valor: ', Area);
    this.llenarDropdownAreas(Area);
  }
  onAreaSelect2(Area: number) {
    //this.loadingDropdownAreas2 = false;
    if(Area && Area!= null){
      this.selectedArea = this.foods1[this.foods1.findIndex((e => e.value == Area.toString()))].viewValue;
    }
    
    //console.log('Cambie valor: ', this.selectedArea);
    //this.llenarDropdownAreas(Area);
    this.obtenerHistorial(Area, this.selectedArea);
  }

  loadingDropdownRutas = false;
  llenarDropdownRutas() {
    this.reporteService.getCategories().subscribe(
      (response: any) => {
        this.foods = response.data;
        this.loadingDropdownRutas = true;
        console.log(this.foods);
      },
      (error: any) => {

      }
    )
  }

  loadingDropdownAreas = false;
  loadingDropdownAreas2 = false;
  llenarDropdownAreas(valor: any) {
    this.reporteService.getProtectedAreas(Number(valor)).subscribe(
      (response: any) => {
        this.foods1 = response.data;
        this.loadingDropdownAreas2 = true;
        
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  nombreArea:string="";

  obtenerHistorial(idArea: number, nombreArea:string) {
    this.reporteService.getProtectedAreasHistory(idArea).subscribe(
      (response: any) => {
        
        this.datos= response.data;
        this.nombreArea = nombreArea;
        console.log(this.datos);
      },
      (error: any) => {
        console.log(error)
      }
    )
  }

  obtenerFecha(dato:string):string{
    if(dato != null || dato != undefined){
      dato = dato.split('T')[0].split('-').reverse().join('/');
      return dato;
    }
    return "";
  }



}
