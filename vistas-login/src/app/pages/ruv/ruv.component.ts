import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { ReportService } from '../../services/report.service';
import { UserServiceService } from '../../services/user-service.service';

interface ValoresDropdown {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-ruv',
  templateUrl: './ruv.component.html',
  styleUrls: ['./ruv.component.css']
})




export class RuvComponent implements OnInit {

  selectedRoute: any;
  selectedArea: any;

  // FORMULARIOS REACTIVOS
  public ruvForm = this.fb.group(
    {
      paisResidencia: ["", Validators.required],
      departamentoResidencia: ["",],
      nacionalidad: ["", Validators.required],
      genero: ["", Validators.required],
      edad: ["", Validators.required],
      motivoVisita: ["", Validators.required],
      motivoVisitaOtro: ["",],
      actividadesRealizar: ["", Validators.required],
      actividadesRealizarOtro: ["",],
      conocimientoArea: ["", Validators.required],
      conocimientoAreaOtro: ["",],
      comoViaja: ["", Validators.required],
      comoViajaOtro: ["",],
    }, {

  }
  );


  constructor(private auth: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private ReportService: ReportService,
    private UserService: UserServiceService
  ) { }

  ngOnInit(): void {
    this.llenarDropdownRutas();
  }

  //rutasTuristicas
  foods: ValoresDropdown[] = [
  ];
  //Areas Protegidas
  foods1: ValoresDropdown[] = [
  ];

  data: ValoresDropdown[] = [
    {
      value: 'Masculino',
      viewValue: 'Masculino'
    },
    {
      value: 'Femenino',
      viewValue: 'Femenino'
    }
  ];
  data2: ValoresDropdown[] = [
    {
      value: '11 o menor',
      viewValue: '11 o menor'
    },
    {
      value: '12 - 20',
      viewValue: '12 - 20'
    },
    {
      value: '21 - 30',
      viewValue: '21 - 30'
    },
    {
      value: '31 - 50',
      viewValue: '31 - 50'
    },
    {
      value: '50 o mayor',
      viewValue: '50 o mayor'
    }
  ];
  data3: ValoresDropdown[] = [
    {
      value: 'Naturaleza',
      viewValue: 'Naturaleza'
    },
    {
      value: 'Recreacion',
      viewValue: 'Recreacion'
    },
    {
      value: 'Expresiones Culturales',
      viewValue: 'Expresiones Culturales'
    },
    {
      value: 'Arqueologia',
      viewValue: 'Arqueologia'
    },
    {
      value: 'Aventura',
      viewValue: 'Aventura'
    },
    {
      value: 'Investigacion',
      viewValue: 'Investigacion'
    },
    {
      value: 'Otro',
      viewValue: 'Otro'
    }
  ];
  data4: ValoresDropdown[] = [
    {
      value: 'Caminata',
      viewValue: 'Caminata'
    },
    {
      value: 'Canopy',
      viewValue: 'Canopy'
    },
    {
      value: 'Obs. de aves',
      viewValue: 'Obs. de aves'
    },
    {
      value: 'Bicicleta',
      viewValue: 'Bicicleta'
    },
    {
      value: 'Acampar',
      viewValue: 'Acampar'
    },
    {
      value: 'Espiritual',
      viewValue: 'Espiritual'
    },
    {
      value: 'Otro',
      viewValue: 'Otro'
    }
  ];
  data5: ValoresDropdown[] = [
    {
      value: 'Recomendacion',
      viewValue: 'Recomendacion'
    },
    {
      value: 'Agencia de Viajes',
      viewValue: 'Agencia de Viajes'
    },
    {
      value: 'Guia impresa',
      viewValue: 'Guia impresa'
    },
    {
      value: 'Trifoliares',
      viewValue: 'Trifoliares'
    },
    {
      value: 'Internet',
      viewValue: 'Internet'
    },
    {
      value: 'Tv, radio, prensa',
      viewValue: 'Tv, radio, prensa'
    }
    ,
    {
      value: 'Otro',
      viewValue: 'Otro'
    }
  ];
  data6: ValoresDropdown[] = [
    {
      value: 'Solo',
      viewValue: 'Solo'
    },
    {
      value: 'Familia',
      viewValue: 'Familia'
    },
    {
      value: 'Amigos',
      viewValue: 'Amigos'
    },
    {
      value: 'Escuela/Colegio',
      viewValue: 'Escuela/Colegio'
    },
    {
      value: 'Universidad',
      viewValue: 'Universidad'
    },
    {
      value: 'Agencia de Viajes',
      viewValue: 'Agencia de Viajes'
    },
    {
      value: 'Otro',
      viewValue: 'Otro'
    }
  ];

  paises: ValoresDropdown[] =[{viewValue:'Afganistán',value:'Afganistán'},{viewValue:'Albania',value:'Albania'},{viewValue:'Alemania',value:'Alemania'},{viewValue:'Andorra',value:'Andorra'},{viewValue:'Angola',value:'Angola'},{viewValue:'Antigua y Barbuda',value:'Antigua y Barbuda'},{viewValue:'Arabia Saudita',value:'Arabia Saudita'},{viewValue:'Argelia',value:'Argelia'},{viewValue:'Argentina',value:'Argentina'},{viewValue:'Armenia',value:'Armenia'},{viewValue:'Australia',value:'Australia'},{viewValue:'Austria',value:'Austria'},{viewValue:'Azerbaiyá',value:'Azerbaiyá'},{viewValue:'Bahamas',value:'Bahamas'},{viewValue:'Bangladés',value:'Bangladés'},{viewValue:'Barbados',value:'Barbados'},{viewValue:'Baréin',value:'Baréin'},{viewValue:'Bélgica',value:'Bélgica'},{viewValue:'Belice',value:'Belice'},{viewValue:'Benín',value:'Benín'},{viewValue:'Bielorrusia',value:'Bielorrusia'},{viewValue:'Birmania',value:'Birmania'},{viewValue:'Bolivia',value:'Bolivia'},{viewValue:'Bosnia y Herzegovina',value:'Bosnia y Herzegovina'},{viewValue:'Botsuana',value:'Botsuana'},{viewValue:'Brasil',value:'Brasil'},{viewValue:'Brunéi',value:'Brunéi'},{viewValue:'Bulgaria',value:'Bulgaria'},{viewValue:'Burkina Faso',value:'Burkina Faso'},{viewValue:'Burundi',value:'Burundi'},{viewValue:'Bután',value:'Bután'},{viewValue:'Cabo Verde',value:'Cabo Verde'},{viewValue:'Camboya',value:'Camboya'},{viewValue:'Camerún',value:'Camerún'},{viewValue:'Canadá',value:'Canadá'},{viewValue:'Catar',value:'Catar'},{viewValue:'Chad',value:'Chad'},{viewValue:'Chile',value:'Chile'},{viewValue:'China',value:'China'},{viewValue:'Chipre',value:'Chipre'},{viewValue:'Ciudad del Vaticano',value:'Ciudad del Vaticano'},{viewValue:'Colombia',value:'Colombia'},{viewValue:'Comoras',value:'Comoras'},{viewValue:'Corea del Norte',value:'Corea del Norte'},{viewValue:'Corea del Sur',value:'Corea del Sur'},{viewValue:'Costa de Marfil',value:'Costa de Marfil'},{viewValue:'Costa Rica',value:'Costa Rica'},{viewValue:'Croacia',value:'Croacia'},{viewValue:'Cuba',value:'Cuba'},{viewValue:'Dinamarca',value:'Dinamarca'},{viewValue:'Dominica',value:'Dominica'},{viewValue:'Ecuador',value:'Ecuador'},{viewValue:'Egipto',value:'Egipto'},{viewValue:'El Salvador',value:'El Salvador'},{viewValue:'Emiratos Árabes Unidos',value:'Emiratos Árabes Unidos'},{viewValue:'Eritrea',value:'Eritrea'},{viewValue:'Eslovaquia',value:'Eslovaquia'},{viewValue:'Eslovenia',value:'Eslovenia'},{viewValue:'España',value:'España'},{viewValue:'Estados Unidos',value:'Estados Unidos'},{viewValue:'Estonia',value:'Estonia'},{viewValue:'Etiopía',value:'Etiopía'},{viewValue:'Filipinas',value:'Filipinas'},{viewValue:'Finlandia',value:'Finlandia'},{viewValue:'Fiyi',value:'Fiyi'},{viewValue:'Francia',value:'Francia'},{viewValue:'Gabón',value:'Gabón'},{viewValue:'Gambia',value:'Gambia'},{viewValue:'Georgia',value:'Georgia'},{viewValue:'Ghana',value:'Ghana'},{viewValue:'Granada',value:'Granada'},{viewValue:'Grecia',value:'Grecia'},{viewValue:'Guatemala',value:'Guatemala'},{viewValue:'Guyana',value:'Guyana'},{viewValue:'Guinea',value:'Guinea'},{viewValue:'Guinea ecuatorial',value:'Guinea ecuatorial'},{viewValue:'Guinea-Bisáu',value:'Guinea-Bisáu'},{viewValue:'Haití',value:'Haití'},{viewValue:'Honduras',value:'Honduras'},{viewValue:'Hungría',value:'Hungría'},{viewValue:'India',value:'India'},{viewValue:'Indonesia',value:'Indonesia'},{viewValue:'Irak',value:'Irak'},{viewValue:'Irán',value:'Irán'},{viewValue:'Irlanda',value:'Irlanda'},{viewValue:'Islandia',value:'Islandia'},{viewValue:'Islas Marshall',value:'Islas Marshall'},{viewValue:'Islas Salomón',value:'Islas Salomón'},{viewValue:'Israel',value:'Israel'},{viewValue:'Italia',value:'Italia'},{viewValue:'Jamaica',value:'Jamaica'},{viewValue:'Japón',value:'Japón'},{viewValue:'Jordania',value:'Jordania'},{viewValue:'Kazajistán',value:'Kazajistán'},{viewValue:'Kenia',value:'Kenia'},{viewValue:'Kirguistán',value:'Kirguistán'},{viewValue:'Kiribati',value:'Kiribati'},{viewValue:'Kuwait',value:'Kuwait'},{viewValue:'Laos',value:'Laos'},{viewValue:'Lesoto',value:'Lesoto'},{viewValue:'Letonia',value:'Letonia'},{viewValue:'Líbano',value:'Líbano'},{viewValue:'Liberia',value:'Liberia'},{viewValue:'Libia',value:'Libia'},{viewValue:'Liechtenstein',value:'Liechtenstein'},{viewValue:'Lituania',value:'Lituania'},{viewValue:'Luxemburgo',value:'Luxemburgo'},{viewValue:'Macedonia del Norte',value:'Macedonia del Norte'},{viewValue:'Madagascar',value:'Madagascar'},{viewValue:'Malasia',value:'Malasia'},{viewValue:'Malaui',value:'Malaui'},{viewValue:'Maldivas',value:'Maldivas'},{viewValue:'Malí',value:'Malí'},{viewValue:'Malta',value:'Malta'},{viewValue:'Marruecos',value:'Marruecos'},{viewValue:'Mauricio',value:'Mauricio'},{viewValue:'Mauritania',value:'Mauritania'},{viewValue:'México',value:'México'},{viewValue:'Micronesia',value:'Micronesia'},{viewValue:'Moldavia',value:'Moldavia'},{viewValue:'Mónaco',value:'Mónaco'},{viewValue:'Mongolia',value:'Mongolia'},{viewValue:'Montenegro',value:'Montenegro'},{viewValue:'Mozambique',value:'Mozambique'},{viewValue:'Namibia',value:'Namibia'},{viewValue:'Nauru',value:'Nauru'},{viewValue:'Nepal',value:'Nepal'},{viewValue:'Nicaragua',value:'Nicaragua'},{viewValue:'Níger',value:'Níger'},{viewValue:'Nigeria',value:'Nigeria'},{viewValue:'Noruega',value:'Noruega'},{viewValue:'Nueva Zelanda',value:'Nueva Zelanda'},{viewValue:'Omán',value:'Omán'},{viewValue:'Países Bajos',value:'Países Bajos'},{viewValue:'Pakistán',value:'Pakistán'},{viewValue:'Palaos',value:'Palaos'},{viewValue:'Panamá',value:'Panamá'},{viewValue:'Papúa Nueva Guinea',value:'Papúa Nueva Guinea'},{viewValue:'Paraguay',value:'Paraguay'},{viewValue:'Perú',value:'Perú'},{viewValue:'Polonia',value:'Polonia'},{viewValue:'Portugal',value:'Portugal'},{viewValue:'Reino Unido',value:'Reino Unido'},{viewValue:'República Centroafricana',value:'República Centroafricana'},{viewValue:'República Checa',value:'República Checa'},{viewValue:'República del Congo',value:'República del Congo'},{viewValue:'República Democrática del Congo',value:'República Democrática del Congo'},{viewValue:'República Dominicana',value:'República Dominicana'},{viewValue:'Ruanda',value:'Ruanda'},{viewValue:'Rumanía',value:'Rumanía'},{viewValue:'Rusia',value:'Rusia'},{viewValue:'Samoa',value:'Samoa'},{viewValue:'San Cristóbal y Nieves',value:'San Cristóbal y Nieves'},{viewValue:'San Marino',value:'San Marino'},{viewValue:'San Vicente y las Granadinas',value:'San Vicente y las Granadinas'},{viewValue:'Santa Lucía',value:'Santa Lucía'},{viewValue:'Santo Tomé y Príncipe',value:'Santo Tomé y Príncipe'},{viewValue:'Senegal',value:'Senegal'},{viewValue:'Serbia',value:'Serbia'},{viewValue:'Seychelles',value:'Seychelles'},{viewValue:'Sierra Leona',value:'Sierra Leona'},{viewValue:'Singapur',value:'Singapur'},{viewValue:'Siria',value:'Siria'},{viewValue:'Somalia',value:'Somalia'},{viewValue:'Sri Lanka',value:'Sri Lanka'},{viewValue:'Suazilandia',value:'Suazilandia'},{viewValue:'Sudáfrica',value:'Sudáfrica'},{viewValue:'Sudán',value:'Sudán'},{viewValue:'Sudán del Sur',value:'Sudán del Sur'},{viewValue:'Suecia',value:'Suecia'},{viewValue:'Suiza',value:'Suiza'},{viewValue:'Surinam',value:'Surinam'},{viewValue:'Tailandia',value:'Tailandia'},{viewValue:'Tanzania',value:'Tanzania'},{viewValue:'Tayikistán',value:'Tayikistán'},{viewValue:'Timor Oriental',value:'Timor Oriental'},{viewValue:'Togo',value:'Togo'},{viewValue:'Tonga',value:'Tonga'},{viewValue:'Trinidad y Tobago',value:'Trinidad y Tobago'},{viewValue:'Túnez',value:'Túnez'},{viewValue:'Turkmenistán',value:'Turkmenistán'},{viewValue:'Turquía',value:'Turquía'},{viewValue:'Tuvalu',value:'Tuvalu'},{viewValue:'Ucrania',value:'Ucrania'},{viewValue:'Uganda',value:'Uganda'},{viewValue:'Uruguay',value:'Uruguay'},{viewValue:'Uzbekistán',value:'Uzbekistán'},{viewValue:'Vanuatu',value:'Vanuatu'},{viewValue:'Venezuela',value:'Venezuela'},{viewValue:'Vietnam',value:'Vietnam'},{viewValue:'Yemen',value:'Yemen'},{viewValue:'Yibuti',value:'Yibuti'},{viewValue:'Zambia',value:'Zambia'},{viewValue:'Zimbabue',value:'Zimbabue'}]

  deptos: ValoresDropdown[] = [{value: 'Alta Verapaz',  viewValue: 'Alta Verapaz'},{  value: 'Baja Verapaz',  viewValue: 'Baja Verapaz'},{  value: 'Chimaltenango',  viewValue: 'Chimaltenango'},{  value: 'Chiquimula',  viewValue: 'Chiquimula'},{  value: 'El Progreso',  viewValue: 'El Progreso'},{  value: 'Escuintla',  viewValue: 'Escuintla'},{  value: 'Guatemala',  viewValue: 'Guatemala'},{  value: 'Huehuetenango',  viewValue: 'Huehuetenango'},{  value: 'Izabal',  viewValue: 'Izabal'},{  value: 'Jalapa',  viewValue: 'Jalapa'},{  value: 'Jutiapa',  viewValue: 'Jutiapa'},{  value: 'Petén',  viewValue: 'Petén'},{  value: 'Quetzaltenango',  viewValue: 'Quetzaltenango'},{  value: 'Quiché',  viewValue: 'Quiché'},{  value: 'Retalhuleu',  viewValue: 'Retalhuleu'},{  value: 'Sacatepéquez',  viewValue: 'Sacatepéquez'},{  value: 'San Marcos',  viewValue: 'San Marcos'},{  value: 'Santa Rosa',  viewValue: 'Santa Rosa'},{  value: 'Sololá',  viewValue: 'Sololá'},{  value: 'Suchitepéquez',  viewValue: 'Suchitepéquez'},{  value: 'Totonicapán',  viewValue: 'Totonicapán'},{  value: 'Zacapa',  viewValue: 'Zacapa'}];

  //Toast
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
  });

  //
  loadingDropdownRutas = false;
  llenarDropdownRutas() {
    this.ReportService.getCategories().subscribe(
      (response: any) => {
        this.foods = response.data;
        this.loadingDropdownRutas = true;
        //console.log(this.foods);
        this.Toast.fire({
          icon: 'success',
          title: 'Rutas obtenidas correctamente'
        })
      },
      (error: any) => {
        this.Toast.fire({
          icon: 'warning',
          title: 'Rutas NO obtenidas'
        })
      }
    )
  }

  onAreaSelect(Area: number) {
    this.loadingDropdownAreas2 = false;
    this.selectedRoute = null;
    //console.log('Cambie valor: ', Area);
    console.log(this.selectedRoute);
    this.llenarDropdownAreas(Area);
  }

  loadingDropdownAreas2 = false;
  llenarDropdownAreas(valor: any) {
    this.ReportService.getProtectedAreas(Number(valor)).subscribe(
      (response: any) => {
        this.foods1 = response.data;
        this.loadingDropdownAreas2 = true;
        this.Toast.fire({
          icon: 'success',
          title: 'Áreas obtenidas correctamente'
        })
      },
      (error: any) => {
        console.log(error)
        this.Toast.fire({
          icon: 'warning',
          title: 'Áreas NO obtenidas'
        })
      }
    )
  }


  onAreaSelect2(Area: number) {
    //this.loadingDropdownAreas2 = false;
    if (Area && Area != null) {
      //this.selectedArea = this.foods1[this.foods1.findIndex((e => e.value == Area.toString()))].viewValue;
      this.selectedArea = Area;
    }
    console.log(this.selectedArea)
  }


  onSubmit() {
    let paisResidencia = this.ruvForm.get('paisResidencia')?.value;
    let departamentoResidencia = this.ruvForm.get('departamentoResidencia')?.value;
    let nacionalidad = this.ruvForm.get('nacionalidad')?.value;
    let genero = this.ruvForm.get('genero')?.value;
    let edad = this.ruvForm.get('edad')?.value;
    let motivoVisita = this.ruvForm.get('motivoVisita')?.value;
    let motivoVisitaOtro = this.ruvForm.get('motivoVisitaOtro')?.value;
    let actividadesRealizar = this.ruvForm.get('actividadesRealizar')?.value;
    let actividadesRealizarOtro = this.ruvForm.get('actividadesRealizarOtro')?.value;
    let conocimientoArea = this.ruvForm.get('conocimientoArea')?.value;
    let conocimientoAreaOtro = this.ruvForm.get('conocimientoAreaOtro')?.value;
    let comoViaja = this.ruvForm.get('comoViaja')?.value;
    let comoViajaOtro = this.ruvForm.get('comoViajaOtro')?.value;

    if (!this.selectedArea || this.selectedArea == null || this.selectedArea == undefined) {
      this.Toast.fire({
        icon: 'warning',
        title: 'No se registro visita, seleccione un area'
      })
    } else {
      this.UserService.registerVisit(this.selectedArea,
        String(paisResidencia),
        'Registro',
        String(nacionalidad),
        String(departamentoResidencia),
        String(genero),
        String(edad),
        String(motivoVisita),
        String(motivoVisitaOtro),
        String(actividadesRealizar),
        String(actividadesRealizarOtro),
        String(conocimientoArea),
        String(conocimientoAreaOtro),
        String(comoViaja),
        String(comoViajaOtro)).subscribe(
          (response: any) => {
            console.log(response);
            this.Toast.fire({
              icon: 'success',
              title: 'Registro realizado exitosamente'
            })

          },
          (error: any) => {
            console.log(error);
            this.Toast.fire({
              icon: 'warning',
              title: 'No se registro visita'
            })
          }
        )
    }

  }
}
