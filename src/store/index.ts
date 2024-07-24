import {configureStore} from "@reduxjs/toolkit";
import {cardReducer, ProductService} from "@/services";

export const store = configureStore({
    reducer: {
        [ProductService.reducerPath]: ProductService.reducer,
        card: cardReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(ProductService.middleware)
})

export type TypeRootState = ReturnType<typeof store.getState>
