import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LocalService } from '../shared/services/local.service';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  constructor(private router:Router,private localService:LocalService) { }

  ngOnInit(): void {
  }
  logout(){
    this.localService.clearData();
    this.router.navigate(['/login'])
  }
}
