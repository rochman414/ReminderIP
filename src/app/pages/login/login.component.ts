import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ApiServiceService } from 'src/app/services/api-service.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'; 

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    private api: ApiServiceService, 
    private spinner: NgxSpinnerService,
    private router: Router
    ) { }
  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  ngOnInit(): void {
    
  }

  onSubmit() {
    this.spinner.show();
    this.api.loginUser(this.loginForm.value).subscribe( (res : any) => {
      this.spinner.hide();
      if(res['token']){
        localStorage.setItem('tokenUser', res['token']);
        localStorage.setItem('userName', this.loginForm.value.username);
        this.router.navigate(['/dashboard']);
      } else {
        this.swalError('Anda tidak memiliki Token');
      }
    }, err => {
      setTimeout(()=> {
        this.spinner.hide()
        this.swalError(err.error.message);
      }, 1000);
    })
  }

  swalError(message: any) {
    Swal.fire({
      title: 'Login Gagal',
      text: message,
      icon: 'error'
    })
  }

}
