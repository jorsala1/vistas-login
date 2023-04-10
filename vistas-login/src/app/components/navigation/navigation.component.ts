import { Component, OnInit } from '@angular/core';
import { UtilsService } from '../../services/utils.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  title: string = 'test';
  
  constructor(private utils: UtilsService, private router:Router) { }

  ngOnInit(): void {
    this.utils.getEmitterTitle().subscribe(
      (value: any) => {
        this.title = value;
      }
    )
  }


  cerrarSesion(){
    localStorage.clear();
    this.router.navigate(["/"]);

  }

}
