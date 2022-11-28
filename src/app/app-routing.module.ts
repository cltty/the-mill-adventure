import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './core/layouts/app-layout/app-layout.component';
import { CategoryPageComponent } from './core/layouts/category-page/category-page.component';
import { HomepageComponent } from './core/layouts/homepage/homepage.component';
import { ProductPageComponent } from './core/layouts/product-page/product-page.component';

const routes: Routes = [
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'home',
        component: HomepageComponent
      },
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'category/:categorySlug',
        component: CategoryPageComponent
      },
      {
        path: 'product/:productSlug',
        component: ProductPageComponent
      }
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
