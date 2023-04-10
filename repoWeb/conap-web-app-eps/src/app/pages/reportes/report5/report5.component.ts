import { Component, OnInit, ViewChild } from '@angular/core';
import { ReportService } from '../../../services/report.service';

import { Chart, ChartConfiguration, ChartData, ChartEvent, ChartType } from 'chart.js';
import { BaseChartDirective } from 'ng2-charts';
import Swal from 'sweetalert2';

interface ValoresDropdown {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-report5',
  templateUrl: './report5.component.html',
  styleUrls: ['./report5.component.css']
})
export class Report5Component implements OnInit {

  selectedRoute: any;
  selectedArea: any;
  constructor(private ReportService: ReportService) {

  }

  ngOnInit(): void {
    //this.llenarDatosReporte1()
    this.llenarDropdownRutas()
    
    //this.llenarDropdownAreas()

  }

  ngAfterViewInit(): void {
    this.chartLine?.update()
  }
  @ViewChild(BaseChartDirective) chart: BaseChartDirective | undefined;

  datos: any[] = [];

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
    this.llenarDatosReporte1(Area, this.selectedArea);
  }

  loadingDropdownRutas = false;
  llenarDropdownRutas() {
    this.ReportService.getCategories().subscribe(
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
    this.ReportService.getProtectedAreas(Number(valor)).subscribe(
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
  llenarDatosReporte1(idArea: number, nombreArea:string) {
    this.ReportService.report5(idArea).subscribe(
      (response: any) => {
        this.datos = response.data;
        this.loadingDatos = false;
        this.loadingPie = false;
        this.nombreArea = nombreArea;
        //console.log(this.datos);
        if (this.datos[0].data.length == 0 || !this.datos[0].data) {
          this.datos = [];
          this.datosTotales = [];
          this.datosTotalesString = [];
          this.datosNumericos = [];
          this.datosNumericosPorcentaje = [];
          this.datosTotalesLine = [];
          this.datosTotalesString2 = [];
          //this.datosTotalesString3 = [];
          this.arregloLabels = [];
          this.pieChartData.datasets[0].data = [];
          this.Toast.fire({
            icon: 'warning',
            title: 'No hay visitas registradas en esta Área Protegida'
          })
        } else {
          this.obtenerTotales();
          this.obtenerTotalesLine();
          this.Toast.fire({
            icon: 'success',
            title: 'Información obtenida correctamente'
          })
        }


      },
      (error: any) => {
        this.Toast.fire({
          icon: 'warning',
          title: 'No se obtuvo información'
        })
        console.log(error)
      }
    )
  }

  //Toast
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
  })


  //variables para utilizar como arreglos
  datosTotales: any = [];
  datosTotalesString: string[] = [];
  datosNumericos: number[] = [];
  datosNumericosPorcentaje: any = [];
  loadingPie = false;
  obtenerTotales() {
    for (let elemento of this.datos) {
      for (let element of elemento.data) {
        if (this.datosTotalesString.includes(element.genero)) {
          this.datosNumericos[this.datosTotalesString.indexOf(element.genero)] += element.cantidad;//llenado de datos por genero          
          continue;
        }

        this.datosTotalesString.push(element.genero);
        this.datosNumericos.push(element.cantidad);

      }

    }
    this.datosNumericosPorcentaje = this.porcentajesArreglo(this.datosNumericos);
    //console.log(this.datosNumericosPorcentaje);
    for (let dato of this.datosNumericos) {
      this.pieChartData.datasets[0].data.push(dato);
    }
    //console.log(this.datosNumericos);
    this.sumaArreglo(this.datosNumericos);
    this.chart?.update();
    this.chart?.render();
    this.loadingPie = true;
  }

  sumaArreglo(arr: any) {
    let resultado = 0;
    for (let i = 0; i < arr.length; i++) {
      resultado += arr[i];
    }
    arr.push(resultado);
    return arr;
  }

  porcentajesArreglo(arr: number[]): number[] {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }

    let percentages = arr.map((number: number) => Number(((number / sum) * 100).toFixed(2)));
    return percentages;
  }




  /**
   * Reporte Pie
   */
  // Pie

  datosNumero = this.datosNumericos;
  public pieChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: 'right',
      },

    }
  };
  public pieChartData: ChartData<'pie', number[], string | string[]> = {
    labels: this.datosTotalesString,
    datasets: [{
      data: []
    }]
  };
  public pieChartType: ChartType = 'pie';


  /**
   * LINE CHART
   */
  loadingDatos = false;
  datosTotalesLine: any[] = [];
  datosTotalesString2: string[] = [];
  datosTotalesString3: string[] = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];
  arregloLabels = [];
  obtenerTotalesLine() {
    this.datos.forEach(elemento => {
      if (this.datosTotalesString2.includes(elemento.mes)) {
        return;
      }
      this.datosTotalesString2.push(elemento.mes);
    });
    //console.log(this.datos);
    for (let element of this.datos) {
      for (let element2 of element.data) {
        let datoLine: any = {
          data: [],
          label: '',
          fill: 'origin'
        };
        if (this.datosTotalesLine.some(e => e.label == element2.genero)) {
          this.datosTotalesLine.find(e => e.label == element2.genero).data.push(element2.cantidad);
          //console.log('entre');
          continue;
        }
        datoLine.label = element2.genero;
        datoLine.data.push(element2.cantidad);
        this.datosTotalesLine.push(datoLine);
      }
    }

    this.chartLine?.update();
    this.loadingDatos = true;

  }


  public lineChartData: ChartConfiguration['data'] = {
    datasets: this.datosTotalesLine,
    labels: this.datosTotalesString3
  };

  public lineChartOptions: ChartConfiguration['options'] = {
    elements: {
      line: {
        tension: 0.1
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      y:
      {
        position: 'left',
      },
      y1: {
        position: 'right',
        grid: {
          color: 'rgba(255,0,0,0.3)',
        },
        ticks: {
          color: 'white'
        }
      }
    },

    plugins: {
      legend: { display: true },

    }
  };

  public lineChartType: ChartType = 'line';

  @ViewChild(BaseChartDirective) chartLine?: BaseChartDirective;


}
