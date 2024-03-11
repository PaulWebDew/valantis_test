import {configureStore} from "@reduxjs/toolkit";

import {goodsApi} from "./api/goods.api.ts";

const rootReducer = {
    [goodsApi.reducerPath]: goodsApi.reducer
}

export const store = configureStore({
    reducer:rootReducer,
    middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(
        goodsApi.middleware
    )
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

