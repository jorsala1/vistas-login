import { Component, OnInit, ViewChild } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, Validators } from '@angular/forms';
import { MatExpansionPanel } from '@angular/material/expansion';

interface ValoresDropdown {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  @ViewChild('panel') panel: MatExpansionPanel | undefined;
  p: number = 1; // Variable para almacenar la página actual
  itemsPerPage: number = 3; // Número de elementos que quieres mostrar por página
  panelOpenState = false;

  selectedRoute: any;
  selectedArea: any;

  constructor(private UserServiceService: UserServiceService, private router: Router, private fb: FormBuilder, private UserService: UserServiceService) { }
  paises: ValoresDropdown[] = [{ viewValue: 'Afganistán', value: 'Afganistán' }, { viewValue: 'Albania', value: 'Albania' }, { viewValue: 'Alemania', value: 'Alemania' }, { viewValue: 'Andorra', value: 'Andorra' }, { viewValue: 'Angola', value: 'Angola' }, { viewValue: 'Antigua y Barbuda', value: 'Antigua y Barbuda' }, { viewValue: 'Arabia Saudita', value: 'Arabia Saudita' }, { viewValue: 'Argelia', value: 'Argelia' }, { viewValue: 'Argentina', value: 'Argentina' }, { viewValue: 'Armenia', value: 'Armenia' }, { viewValue: 'Australia', value: 'Australia' }, { viewValue: 'Austria', value: 'Austria' }, { viewValue: 'Azerbaiyá', value: 'Azerbaiyá' }, { viewValue: 'Bahamas', value: 'Bahamas' }, { viewValue: 'Bangladés', value: 'Bangladés' }, { viewValue: 'Barbados', value: 'Barbados' }, { viewValue: 'Baréin', value: 'Baréin' }, { viewValue: 'Bélgica', value: 'Bélgica' }, { viewValue: 'Belice', value: 'Belice' }, { viewValue: 'Benín', value: 'Benín' }, { viewValue: 'Bielorrusia', value: 'Bielorrusia' }, { viewValue: 'Birmania', value: 'Birmania' }, { viewValue: 'Bolivia', value: 'Bolivia' }, { viewValue: 'Bosnia y Herzegovina', value: 'Bosnia y Herzegovina' }, { viewValue: 'Botsuana', value: 'Botsuana' }, { viewValue: 'Brasil', value: 'Brasil' }, { viewValue: 'Brunéi', value: 'Brunéi' }, { viewValue: 'Bulgaria', value: 'Bulgaria' }, { viewValue: 'Burkina Faso', value: 'Burkina Faso' }, { viewValue: 'Burundi', value: 'Burundi' }, { viewValue: 'Bután', value: 'Bután' }, { viewValue: 'Cabo Verde', value: 'Cabo Verde' }, { viewValue: 'Camboya', value: 'Camboya' }, { viewValue: 'Camerún', value: 'Camerún' }, { viewValue: 'Canadá', value: 'Canadá' }, { viewValue: 'Catar', value: 'Catar' }, { viewValue: 'Chad', value: 'Chad' }, { viewValue: 'Chile', value: 'Chile' }, { viewValue: 'China', value: 'China' }, { viewValue: 'Chipre', value: 'Chipre' }, { viewValue: 'Ciudad del Vaticano', value: 'Ciudad del Vaticano' }, { viewValue: 'Colombia', value: 'Colombia' }, { viewValue: 'Comoras', value: 'Comoras' }, { viewValue: 'Corea del Norte', value: 'Corea del Norte' }, { viewValue: 'Corea del Sur', value: 'Corea del Sur' }, { viewValue: 'Costa de Marfil', value: 'Costa de Marfil' }, { viewValue: 'Costa Rica', value: 'Costa Rica' }, { viewValue: 'Croacia', value: 'Croacia' }, { viewValue: 'Cuba', value: 'Cuba' }, { viewValue: 'Dinamarca', value: 'Dinamarca' }, { viewValue: 'Dominica', value: 'Dominica' }, { viewValue: 'Ecuador', value: 'Ecuador' }, { viewValue: 'Egipto', value: 'Egipto' }, { viewValue: 'El Salvador', value: 'El Salvador' }, { viewValue: 'Emiratos Árabes Unidos', value: 'Emiratos Árabes Unidos' }, { viewValue: 'Eritrea', value: 'Eritrea' }, { viewValue: 'Eslovaquia', value: 'Eslovaquia' }, { viewValue: 'Eslovenia', value: 'Eslovenia' }, { viewValue: 'España', value: 'España' }, { viewValue: 'Estados Unidos', value: 'Estados Unidos' }, { viewValue: 'Estonia', value: 'Estonia' }, { viewValue: 'Etiopía', value: 'Etiopía' }, { viewValue: 'Filipinas', value: 'Filipinas' }, { viewValue: 'Finlandia', value: 'Finlandia' }, { viewValue: 'Fiyi', value: 'Fiyi' }, { viewValue: 'Francia', value: 'Francia' }, { viewValue: 'Gabón', value: 'Gabón' }, { viewValue: 'Gambia', value: 'Gambia' }, { viewValue: 'Georgia', value: 'Georgia' }, { viewValue: 'Ghana', value: 'Ghana' }, { viewValue: 'Granada', value: 'Granada' }, { viewValue: 'Grecia', value: 'Grecia' }, { viewValue: 'Guatemala', value: 'Guatemala' }, { viewValue: 'Guyana', value: 'Guyana' }, { viewValue: 'Guinea', value: 'Guinea' }, { viewValue: 'Guinea ecuatorial', value: 'Guinea ecuatorial' }, { viewValue: 'Guinea-Bisáu', value: 'Guinea-Bisáu' }, { viewValue: 'Haití', value: 'Haití' }, { viewValue: 'Honduras', value: 'Honduras' }, { viewValue: 'Hungría', value: 'Hungría' }, { viewValue: 'India', value: 'India' }, { viewValue: 'Indonesia', value: 'Indonesia' }, { viewValue: 'Irak', value: 'Irak' }, { viewValue: 'Irán', value: 'Irán' }, { viewValue: 'Irlanda', value: 'Irlanda' }, { viewValue: 'Islandia', value: 'Islandia' }, { viewValue: 'Islas Marshall', value: 'Islas Marshall' }, { viewValue: 'Islas Salomón', value: 'Islas Salomón' }, { viewValue: 'Israel', value: 'Israel' }, { viewValue: 'Italia', value: 'Italia' }, { viewValue: 'Jamaica', value: 'Jamaica' }, { viewValue: 'Japón', value: 'Japón' }, { viewValue: 'Jordania', value: 'Jordania' }, { viewValue: 'Kazajistán', value: 'Kazajistán' }, { viewValue: 'Kenia', value: 'Kenia' }, { viewValue: 'Kirguistán', value: 'Kirguistán' }, { viewValue: 'Kiribati', value: 'Kiribati' }, { viewValue: 'Kuwait', value: 'Kuwait' }, { viewValue: 'Laos', value: 'Laos' }, { viewValue: 'Lesoto', value: 'Lesoto' }, { viewValue: 'Letonia', value: 'Letonia' }, { viewValue: 'Líbano', value: 'Líbano' }, { viewValue: 'Liberia', value: 'Liberia' }, { viewValue: 'Libia', value: 'Libia' }, { viewValue: 'Liechtenstein', value: 'Liechtenstein' }, { viewValue: 'Lituania', value: 'Lituania' }, { viewValue: 'Luxemburgo', value: 'Luxemburgo' }, { viewValue: 'Macedonia del Norte', value: 'Macedonia del Norte' }, { viewValue: 'Madagascar', value: 'Madagascar' }, { viewValue: 'Malasia', value: 'Malasia' }, { viewValue: 'Malaui', value: 'Malaui' }, { viewValue: 'Maldivas', value: 'Maldivas' }, { viewValue: 'Malí', value: 'Malí' }, { viewValue: 'Malta', value: 'Malta' }, { viewValue: 'Marruecos', value: 'Marruecos' }, { viewValue: 'Mauricio', value: 'Mauricio' }, { viewValue: 'Mauritania', value: 'Mauritania' }, { viewValue: 'México', value: 'México' }, { viewValue: 'Micronesia', value: 'Micronesia' }, { viewValue: 'Moldavia', value: 'Moldavia' }, { viewValue: 'Mónaco', value: 'Mónaco' }, { viewValue: 'Mongolia', value: 'Mongolia' }, { viewValue: 'Montenegro', value: 'Montenegro' }, { viewValue: 'Mozambique', value: 'Mozambique' }, { viewValue: 'Namibia', value: 'Namibia' }, { viewValue: 'Nauru', value: 'Nauru' }, { viewValue: 'Nepal', value: 'Nepal' }, { viewValue: 'Nicaragua', value: 'Nicaragua' }, { viewValue: 'Níger', value: 'Níger' }, { viewValue: 'Nigeria', value: 'Nigeria' }, { viewValue: 'Noruega', value: 'Noruega' }, { viewValue: 'Nueva Zelanda', value: 'Nueva Zelanda' }, { viewValue: 'Omán', value: 'Omán' }, { viewValue: 'Países Bajos', value: 'Países Bajos' }, { viewValue: 'Pakistán', value: 'Pakistán' }, { viewValue: 'Palaos', value: 'Palaos' }, { viewValue: 'Panamá', value: 'Panamá' }, { viewValue: 'Papúa Nueva Guinea', value: 'Papúa Nueva Guinea' }, { viewValue: 'Paraguay', value: 'Paraguay' }, { viewValue: 'Perú', value: 'Perú' }, { viewValue: 'Polonia', value: 'Polonia' }, { viewValue: 'Portugal', value: 'Portugal' }, { viewValue: 'Reino Unido', value: 'Reino Unido' }, { viewValue: 'República Centroafricana', value: 'República Centroafricana' }, { viewValue: 'República Checa', value: 'República Checa' }, { viewValue: 'República del Congo', value: 'República del Congo' }, { viewValue: 'República Democrática del Congo', value: 'República Democrática del Congo' }, { viewValue: 'República Dominicana', value: 'República Dominicana' }, { viewValue: 'Ruanda', value: 'Ruanda' }, { viewValue: 'Rumanía', value: 'Rumanía' }, { viewValue: 'Rusia', value: 'Rusia' }, { viewValue: 'Samoa', value: 'Samoa' }, { viewValue: 'San Cristóbal y Nieves', value: 'San Cristóbal y Nieves' }, { viewValue: 'San Marino', value: 'San Marino' }, { viewValue: 'San Vicente y las Granadinas', value: 'San Vicente y las Granadinas' }, { viewValue: 'Santa Lucía', value: 'Santa Lucía' }, { viewValue: 'Santo Tomé y Príncipe', value: 'Santo Tomé y Príncipe' }, { viewValue: 'Senegal', value: 'Senegal' }, { viewValue: 'Serbia', value: 'Serbia' }, { viewValue: 'Seychelles', value: 'Seychelles' }, { viewValue: 'Sierra Leona', value: 'Sierra Leona' }, { viewValue: 'Singapur', value: 'Singapur' }, { viewValue: 'Siria', value: 'Siria' }, { viewValue: 'Somalia', value: 'Somalia' }, { viewValue: 'Sri Lanka', value: 'Sri Lanka' }, { viewValue: 'Suazilandia', value: 'Suazilandia' }, { viewValue: 'Sudáfrica', value: 'Sudáfrica' }, { viewValue: 'Sudán', value: 'Sudán' }, { viewValue: 'Sudán del Sur', value: 'Sudán del Sur' }, { viewValue: 'Suecia', value: 'Suecia' }, { viewValue: 'Suiza', value: 'Suiza' }, { viewValue: 'Surinam', value: 'Surinam' }, { viewValue: 'Tailandia', value: 'Tailandia' }, { viewValue: 'Tanzania', value: 'Tanzania' }, { viewValue: 'Tayikistán', value: 'Tayikistán' }, { viewValue: 'Timor Oriental', value: 'Timor Oriental' }, { viewValue: 'Togo', value: 'Togo' }, { viewValue: 'Tonga', value: 'Tonga' }, { viewValue: 'Trinidad y Tobago', value: 'Trinidad y Tobago' }, { viewValue: 'Túnez', value: 'Túnez' }, { viewValue: 'Turkmenistán', value: 'Turkmenistán' }, { viewValue: 'Turquía', value: 'Turquía' }, { viewValue: 'Tuvalu', value: 'Tuvalu' }, { viewValue: 'Ucrania', value: 'Ucrania' }, { viewValue: 'Uganda', value: 'Uganda' }, { viewValue: 'Uruguay', value: 'Uruguay' }, { viewValue: 'Uzbekistán', value: 'Uzbekistán' }, { viewValue: 'Vanuatu', value: 'Vanuatu' }, { viewValue: 'Venezuela', value: 'Venezuela' }, { viewValue: 'Vietnam', value: 'Vietnam' }, { viewValue: 'Yemen', value: 'Yemen' }, { viewValue: 'Yibuti', value: 'Yibuti' }, { viewValue: 'Zambia', value: 'Zambia' }, { viewValue: 'Zimbabue', value: 'Zimbabue' }]

  //rutasTuristicas
  foods: ValoresDropdown[] = [
  ];
  //Areas Protegidas
  foods1: ValoresDropdown[] = [
  ];

  data: ValoresDropdown[] = [
    {
      value: '1',
      viewValue: 'Masculino'
    },
    {
      value: '2',
      viewValue: 'Femenino'
    }
  ];

  //Toast
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
  });

  // FORMULARIOS REACTIVOS
  public ruvForm = this.fb.group(
    {
      nacionalidad: ["", Validators.required],
      genero: ["", Validators.required],
      email: ["", Validators.required, Validators.email],
      nombre: ["", Validators.required],
      password: ["", Validators.required],
      edad: ['', [Validators.required, Validators.pattern('^\d+$')]],
    }, {

  }
  );

  datos: any = []
  ngOnInit(): void {
    this.obtenerUsuarios();
    this.panelOpenState = false;
  }

  obtenerUsuarios() {
    this.UserServiceService.getUsers().subscribe(
      (response: any) => {

        this.datos = response.data;
        console.log(this.datos);
        this.Toast.fire({
          icon: 'success',
          title: 'Usuarios obtenidos correctamente'
        })
      },

      (error: any) => {
        console.log(error)
        this.Toast.fire({
          icon: 'warning',
          title: 'Usuarios NO obtenidos.'
        })
      }
    )
  }

  eliminarUsuario(id: number, name: string) {
    Swal.fire({
      title: '¿Desea realizar esta acción?',
      text: "No podrá revertirla",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: 'green',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, Borrarlo',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'Usuario Eliminado. ' + name,
          'success'
        )
      }
    })

    this.router.navigate(["/menu/users"]);
  }

  createUSer() {


    this.router.navigate(["/menu/users"]);
  }


  onSubmit() {
    let nacionalidad = this.ruvForm.get('nacionalidad')?.value;
    let genero = this.ruvForm.get('genero')?.value;
    let email = this.ruvForm.get('email')?.value;
    let nombre = this.ruvForm.get('nombre')?.value;
    let password = this.ruvForm.get('password')?.value;
    let edad = this.ruvForm.get('edad')?.value;

   
      this.UserService.createUser(String(nombre),String(email),String(password),Number(edad),2,Number(genero),1).subscribe(
        (response: any) => {
          console.log(response);
          this.panelOpenState = false;
          this.obtenerUsuarios();
          this.panel?.close();
          this.Toast.fire({
            icon: 'success',
            title: 'Registro de usuario realizado exitosamente'
          })

        },
        (error: any) => {
          console.log(error);
          this.Toast.fire({
            icon: 'warning',
            title: 'No se registro usuario'
          })
        }
      )
    

  }

}
