export interface Product {
    id: string,
    slug: string,
    name: string,
    pictureUrl?: string,
    description: string,
    price: number,
    categorySlug: string;
}