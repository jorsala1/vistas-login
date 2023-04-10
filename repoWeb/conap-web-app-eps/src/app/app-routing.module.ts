import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

// importacion de la declaracion de las rutas
import { routes } from './routes/routes';

@NgModule({
    imports: [RouterModule.forRoot(routes, {
        useHash: false,
    })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule { }