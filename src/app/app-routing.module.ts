import { LoginPageComponent } from './login-page/login-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { ProductsComponent } from './products/products.component';
import { AuthGuardService } from './shared/guards/auth-guard.service';

const routes: Routes = [
  {
    path:'login',
    component:LoginPageComponent
  },
  {
    path:'home',
    canActivate:[AuthGuardService],
    component:HomePageComponent
  },
  {
    path:'products',
    canActivate:[AuthGuardService],
    component:ProductsComponent
  },
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
