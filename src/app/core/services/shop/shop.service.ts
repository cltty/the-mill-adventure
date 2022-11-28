import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

@Injectable({
  providedIn: 'root',
})
export class ShopService {
  private readonly GET_ALL_CATEGORIES = gql`
  {
    categories {
      slug
      name
      productsCount
      imgUrl
      createdAt
    }
  }
`;
  private readonly GET_PRODUCTS_BY_CATEGORY_SLUG = (categorySlug: string) =>
    gql`
      {
        products(where: {categorySlug: "${categorySlug}"}) {
          description
          name
          pictureUrl
          price
          slug
        }
      }
    `;
  private readonly GET_PRODUCT_BY_SLUG = (product: string) =>
    gql`
      {
        products(where: {slug: "${product}"}) {
          description
          name
          pictureUrl
          price
          slug
          categorySlug
        }
      }
    `;

  private readonly GET_NEWEST_PRODUCTS_BY_CATEGORY_SLUG = (
    categorySlug: string,
    date: Date
  ) =>
    gql`
      {
        products(where: { categorySlug: "wood-chairs", createdAt_gte: "" }) {
          description
          name
          pictureUrl
          price
          slug
        }
      }
    `;
  private readonly GET_CATEGORY_BY_SLUG = (categorySlug: string) =>
    gql`
      {
        categories(where: {slug: "${categorySlug}"}) {
          slug
          name
          productsCount
          imgUrl
          createdAt
        }
      }
    `;

  constructor(private apollo: Apollo) {}

  getProductsByCategorySlug(categorySlug: string) {
    return this.apollo.watchQuery({
      query: this.GET_PRODUCTS_BY_CATEGORY_SLUG(categorySlug),
    }).valueChanges;
  }

  getProductBySlug(productSlug: string) {
    return this.apollo.watchQuery({
      query: this.GET_PRODUCT_BY_SLUG(productSlug),
    }).valueChanges;
  }

  getNewestProductsByCategorySlug(categorySlug: string) {
    return this.apollo.watchQuery({
      query: this.GET_NEWEST_PRODUCTS_BY_CATEGORY_SLUG(
        categorySlug,
        this.getLastWeeksDate()
      ),
    }).valueChanges;
  }

  getAllCategories(): any {
    return this.apollo.watchQuery({
      query: this.GET_ALL_CATEGORIES,
    }).valueChanges;
  }

  getCategoryBySlug(categorySlug: string): any {
    return this.apollo.watchQuery({
      query: this.GET_CATEGORY_BY_SLUG(categorySlug),
    }).valueChanges;
  }

  private getLastWeeksDate() {
    const now = new Date();

    return new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
  }
}
