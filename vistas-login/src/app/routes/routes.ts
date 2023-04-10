import { MenuReportsComponent } from '../pages/menu-reports/menu-reports.component';
import { Routes } from '@angular/router';
import { MainDashboardComponent } from '../pages/main-dashboard/main-dashboard.component';
import { TableReportsComponent } from '../components/table-reports/table-reports.component';
import { AuthGuard } from '../services/auth.guard'; 
import { PagesComponent } from '../pages/pages.component';
import { LoginComponent } from '../pages/login/login.component';
import { UsersComponent } from '../pages/users/users.component';
import { Report1Component } from '../pages/reportes/report1/report1.component';
import { Report2Component } from '../pages/reportes/report2/report2.component';
import { Report3Component } from '../pages/reportes/report3/report3.component';
import { Report4Component } from '../pages/reportes/report4/report4.component';
import { Report5Component } from '../pages/reportes/report5/report5.component';
import { Report6Component } from '../pages/reportes/report6/report6.component';
import { Report7Component } from '../pages/reportes/report7/report7.component';
import { Report8Component } from '../pages/reportes/report8/report8.component';
import { Report9Component } from '../pages/reportes/report9/report9.component';
import { Report10Component } from '../pages/reportes/report10/report10.component';
import { Report11Component } from '../pages/reportes/report11/report11.component';
import { Report12Component } from '../pages/reportes/report12/report12.component';
import { Report13Component } from '../pages/reportes/report13/report13.component';
import { Report14Component } from '../pages/reportes/report14/report14.component';
import { Report15Component } from '../pages/reportes/report15/report15.component';
import { RuvComponent } from '../pages/ruv/ruv.component';
import { HistoryComponent } from '../pages/history/history.component';

export const routes: Routes = [
    {
        //   rutas protegidas o que necesitas pasar antes por login
        // es decir a las rutas hijas les va aplicar el html de pages.component.html
        path: '',
        component: LoginComponent,
    },
    //  mientras que a las rutas que no sean hijas las hará pasar por el app.component.html
    { path: 'menu',
        component: PagesComponent,
        canActivate:[AuthGuard],
        children: [
            { path: 'menu-reports', component: MenuReportsComponent, data: { title: "Dashboard Reportes" } },
            { path: 'main-dashboard', component: MainDashboardComponent, data: { title: "Dashboard Principal" } },
            { path: 'table-reports', component: TableReportsComponent, data: { title: "Cambios" } },
            { path: 'users', component: UsersComponent, data: { title: "Usuarios" } },
            { path: 'report1', component: Report1Component, data: { title: "Reporte 1" } },
            { path: 'report2', component: Report2Component, data: { title: "Reporte 2" } },
            { path: 'report3', component: Report3Component, data: { title: "Reporte 3" } },
            { path: 'report4', component: Report4Component, data: { title: "Reporte 4" } },
            { path: 'report5', component: Report5Component, data: { title: "Reporte 5" } },
            { path: 'report6', component: Report6Component, data: { title: "Reporte 6" } },
            { path: 'report7', component: Report7Component, data: { title: "Reporte 7" } },
            { path: 'report8', component: Report8Component, data: { title: "Reporte 8" } },
            { path: 'report9', component: Report9Component, data: { title: "Reporte 9" } },
            { path: 'report10', component: Report10Component, data: { title: "Reporte 10" } },
            { path: 'report11', component: Report11Component, data: { title: "Reporte 11" } },
            { path: 'report12', component: Report12Component, data: { title: "Reporte 12" } },
            { path: 'report13', component: Report13Component, data: { title: "Reporte 13" } },
            { path: 'report14', component: Report14Component, data: { title: "Reporte 14" } },
            { path: 'report15', component: Report15Component, data: { title: "Reporte 15" } },
            { path: 'history', component: HistoryComponent, data: { title: "Historial" } },
            { path: 'ruv', component: RuvComponent, data: { title: "RUV" } },
            { path: "**", redirectTo: "/main-dashboard"}
        ] 
    },
    {path:'**',redirectTo:''}

];