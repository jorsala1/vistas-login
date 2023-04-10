import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; /* necesarios para usar formularios reactivos */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; // Para poder realizar peticiones http
import { NgxPaginationModule } from 'ngx-pagination';





// importaciones de compoentes
import { AppComponent } from './app.component';
import { MenuReportsComponent } from './pages/menu-reports/menu-reports.component';
import { AppRoutingModule } from './app-routing.module';
import { MainDashboardComponent } from './pages/main-dashboard/main-dashboard.component';
import { TableReportsComponent } from './components/table-reports/table-reports.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PagesComponent } from './pages/pages.component';
import { LoginComponent } from './pages/login/login.component';
import { MaterialModule } from './material/material.module';
import { UsersComponent } from './pages/users/users.component';
import { NgChartsConfiguration, NgChartsModule } from 'ng2-charts';
import { Report1Component } from './pages/reportes/report1/report1.component';
import { Report2Component } from './pages/reportes/report2/report2.component';
import { Report3Component } from './pages/reportes/report3/report3.component';
import { Report4Component } from './pages/reportes/report4/report4.component';
import { Report5Component } from './pages/reportes/report5/report5.component';
import { Report6Component } from './pages/reportes/report6/report6.component';
import { Report7Component } from './pages/reportes/report7/report7.component';
import { Report8Component } from './pages/reportes/report8/report8.component';
import { Report9Component } from './pages/reportes/report9/report9.component';
import { Report10Component } from './pages/reportes/report10/report10.component';
import { Report11Component } from './pages/reportes/report11/report11.component';
import { Report12Component } from './pages/reportes/report12/report12.component';
import { Report13Component } from './pages/reportes/report13/report13.component';
import { Report15Component } from './pages/reportes/report15/report15.component';
import { Report14Component } from './pages/reportes/report14/report14.component';
import { RuvComponent } from './pages/ruv/ruv.component';
import { HistoryComponent } from './pages/history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuReportsComponent,
    MainDashboardComponent,
    TableReportsComponent,
    NavigationComponent,
    PagesComponent,
    LoginComponent,
    UsersComponent,
    Report1Component,
    Report2Component,
    Report3Component,
    Report4Component,
    Report5Component,
    Report6Component,
    Report7Component,
    Report8Component,
    Report9Component,
    Report10Component,
    Report11Component,
    Report12Component,
    Report13Component,
    Report15Component,
    Report14Component,
    RuvComponent,
    HistoryComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgChartsModule,
    NgxPaginationModule
  ],
  providers: [{ provide: NgChartsConfiguration, useValue: { generateColors: false }}],
  bootstrap: [AppComponent]
})
export class AppModule { }
