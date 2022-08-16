import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalService } from '../shared/services/local.service';
@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  email:string='';
  password:string='';
  constructor(private toastr: ToastrService,private router:Router,private localService:LocalService) { }

  ngOnInit(): void {
  }
  login(){
    if(this.email && this.password){
       if(this.email === 'admin' && this.password === 'admin'){
        this.localService.saveData('loggedIn','true');
        console.log('helllo')
        this.router.navigate(['/home']);
       }
    }else{
      this.toastr.error('Please enter username and password.','Oops!');
    }
  }
}
