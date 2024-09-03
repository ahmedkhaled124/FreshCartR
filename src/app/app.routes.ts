import { NotfoundComponent } from './layout/additions/notfound/notfound.component';
import { CartComponent } from './layout/pages/cart/cart.component';
import { HomeComponent } from './layout/pages/home/home.component';
import { Routes } from '@angular/router';
import { ProductsComponent } from './layout/pages/products/products.component';
import { CategoriesComponent } from './layout/pages/categories/categories.component';
import { BrandsComponent } from './layout/pages/brands/brands.component';
import { RegisterComponent } from './layout/pages/register/register.component';
import { LoginComponent } from './layout/pages/login/login.component';



export const routes: Routes = [
  {path:"",redirectTo:"Home",pathMatch:"full"},
  {path: "Home", component: HomeComponent},
  {path: "Cart",component:CartComponent},
  {path: "Products",component:ProductsComponent},
  {path: "Categories",component:CategoriesComponent},
  {path: "Brands",component:BrandsComponent},
  {path: "Register",component:RegisterComponent},
  {path: "login",component:LoginComponent},



  {path:"**",component: NotfoundComponent}
];
