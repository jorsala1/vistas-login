import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FormBuilder, Validators, FormGroup } from "@angular/forms";
import swal from 'sweetalert2';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // FORMULARIOS REACTIVOS
  public loginForm = this.fb.group(
    {
      email: ["", Validators.required],
      password: ["", Validators.required],
    },
    {
    }
  );

  constructor(private auth: AuthService,
     private fb: FormBuilder,
     private router: Router
     ) { }

  ngOnInit(): void {
  }

  onSubmit() {
    // console.log(this.loginForm.get('email')?.value);
    // console.log(this.loginForm.get('password')?.value);
    let email = this.loginForm.get('email')?.value;
    let password = this.loginForm.get('password')?.value;

    this.auth.login(email, password ).subscribe(
      (response:any) => {
        console.log(response);
        this.Toast.fire({
          icon: 'success',
          title: 'Ingreso Correcto, Bienvenido!'
        })
        localStorage.setItem('token',response.data.token);
        this.router.navigate(["/menu/main-dashboard"]);
      },
      (error:any) =>{
        console.log(error);
        this.Toast.fire({
          icon: 'warning',
          title: 'Credenciales incorrectas, vuelva a intentarlo'
        })
      }
    )

  }

  //Toast
  Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 2000,
  });
}
