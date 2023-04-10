import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-table-reports',
  templateUrl: './table-reports.component.html',
  styleUrls: ['./table-reports.component.css']
})
export class TableReportsComponent implements OnInit {

  constructor(private activatedroute: ActivatedRoute, private utils: UtilsService) { }

  ngOnInit(): void {
    this.activatedroute.data.subscribe((data: any) => {
      if (data.title != undefined) {
        console.log(data)
        this.utils.emitEmitterTitle(data.title);
      }
    })
  }

}
