import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { DashboardContainerComponent } from './dashboard-container/dashboard-container.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { ProductCreateComponent } from './product-create/product-create.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ProductComponent } from './product/product.component';
import { UserCreateComponent } from './user-create/user-create.component';
import { UserEditComponent } from './user-edit/user-edit.component';
import { UserViewComponent } from './user-view/user-view.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {
    path : "",
    component : LoginComponent
  },
  {
    path : "Dashboard",
    component : DashboardContainerComponent,
    canActivate:[AuthGuard],
    children:[
      {
        path:"",
        component : DashboardComponent
      },
      {
        path : "user",
        component : UserComponent
      },
      {
        path : "product/:id",
        component : ProductComponent
      },  
      {
        path : "product",
        component : ProductComponent
      },  
      {
        path : "user/:id",
        component : UserComponent
      },  
      {
        path : "product-create",
        component : ProductCreateComponent
      },  
      {
        path : "product-edit/:id",
        component : ProductEditComponent
      },  
      {
        path : "product-view/:id",
        component : ProductViewComponent
      },  
      {
        path : "user-create",
        component : UserCreateComponent
      },  
      {
        path : "user-edit/:id",
        component : UserEditComponent
      },  
      {
        path : "user-view/:id",
        component : UserViewComponent
      },  
    

    ]
  },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
