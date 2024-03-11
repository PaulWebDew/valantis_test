import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import CryptoJS from "crypto-js";
import * as process from "process";

export const goodsApi = createApi({
  reducerPath: "GoodsQuery",
  tagTypes: ["Goods"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_BASE_URL,
    prepareHeaders: (headers) => {
      const timestamp = new Date()
        .toISOString()
        .slice(0, 10)
        .split("-")
        .join("");
      const hash = CryptoJS.MD5(`Valantis_${timestamp}`).toString();
      headers.set("X-Auth", hash);
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (build) => ({
    getIds: build.mutation<any, any>({
      query: (params) => ({
        url: "http://api.valantis.store:40000/",
        method: "POST",
        body: {
          action: "get_ids",
          params: params,
        },
      }),
    }),
    getItems: build.mutation<any, any>({
      query: (params) => ({
        url: "http://api.valantis.store:40000/",
        method: "POST",
        body: {
          action: "get_items",
          params: params,
        },
      }),
    }),
    getFields: build.mutation<any, any>({
      query: (body) => ({
        url: "http://api.valantis.store:40000/",
        method: "POST",
        body,
      }),
    }),
    getFilteredGoods: build.mutation<any, any>({
      query: (params) => ({
        url: "http://api.valantis.store:40000/",
        method: "POST",
        body: { action: "filter", params: params },
      }),
    }),
  }),
});

export const {
  useGetIdsMutation,
  useGetItemsMutation,
  useGetFieldsMutation,
  useGetFilteredGoodsMutation,
} = goodsApi;
