import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-menu-reports',
  templateUrl: './menu-reports.component.html',
  styleUrls: ['./menu-reports.component.css']
})
export class MenuReportsComponent implements OnInit {
  reports: any[] = [
    {
      titulo: "Reporte visitación por Genero",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte2",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte3",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte1",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte2",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte1",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte2",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte1",
      descripcion: "",
      imagen: ""
    },
    {
      titulo: "reporte2",
      descripcion: "",
      imagen: ""
    },
  ];

  constructor(private activatedroute: ActivatedRoute, private utils: UtilsService) {

  }

  ngOnInit(): void {

    this.activatedroute.data.subscribe((data: any) => {
      if (data.title != undefined) {
        console.log(data)
        this.utils.emitEmitterTitle(data.title);
      }
    })
  }

}
