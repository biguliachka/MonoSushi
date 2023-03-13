import { ICategoryResponse } from "../category/category.interface";

export interface IProductRequest {
    category: ICategoryResponse;
    name: string;
    description: string;
    weight: string;
    price: number;
    imagePath: string;
    path: string;
    count: number;
}

export interface IProductResponse extends IProductRequest {
    id: number  | string}

