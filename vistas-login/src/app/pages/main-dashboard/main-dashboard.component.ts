import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilsService } from '../../services/utils.service';

@Component({
  selector: 'app-main-dashboard',
  templateUrl: './main-dashboard.component.html',
  styleUrls: ['./main-dashboard.component.css']
})
export class MainDashboardComponent implements OnInit {

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
