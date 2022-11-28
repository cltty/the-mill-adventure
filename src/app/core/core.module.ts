import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { HeaderComponent } from './layouts/header/header.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { HomepageComponent } from './layouts/homepage/homepage.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { CategoryPageComponent } from './layouts/category-page/category-page.component';
import { ProductPageComponent } from './layouts/product-page/product-page.component';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular'
import { HttpLink } from 'apollo-angular/http'
import { InMemoryCache } from '@apollo/client/core'
import { HttpClientModule } from '@angular/common/http';
import { TopCategoriesComponent } from './components/top-categories/top-categories.component';
import { HomepageCarouselComponent } from './components/homepage-carousel/homepage-carousel.component';
import { ClientsFeedbackComponent } from './components/clients-feedback/clients-feedback.component';
import { ProductDetailedCardComponent } from './components/product-detailed-card/product-detailed-card.component';
import { SimilarProductsComponent } from './components/similar-products/similar-products.component';

@NgModule({
  declarations: [
    AppLayoutComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    CategoryPageComponent,
    ProductPageComponent,
    TopCategoriesComponent,
    HomepageCarouselComponent,
    ClientsFeedbackComponent,
    ProductDetailedCardComponent,
    SimilarProductsComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ApolloModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory(httpLink: HttpLink) {
        return {
          cache: new InMemoryCache(),
          link: httpLink.create({
            uri: 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clazhkomi1qs401uq35qs9pqy/master'
          })
        }
      },
      deps: [HttpLink]
    }
  ],
  exports: [
    SharedModule
  ]
})
export class CoreModule {}
