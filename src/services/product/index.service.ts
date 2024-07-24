import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query";
import {IProduct} from "@/services/product/index.types";

export const ProductService = createApi({
    reducerPath: 'api/products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
    endpoints: build => ({
        getProducts: build.query<IProduct[], number>({
            query: (limit = 5) => `products?limit=${limit}`,
        }),
    }),
})

export const {useGetProductsQuery} = ProductService;
