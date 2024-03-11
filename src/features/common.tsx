import { goodsItem } from "../types/api.type.ts";
import { IFetchByChunksParams } from "../types/common.types.ts";
// @ts-ignore
import { MutationTrigger } from "@reduxjs/toolkit/dist/query/react/buildHooks";
import {
  BaseQueryFn,
  FetchArgs,
  FetchBaseQueryError,
  FetchBaseQueryMeta,
  MutationDefinition,
} from "@reduxjs/toolkit/query";

export const getUniqGoods = (arr: goodsItem[]) => {
  const testObj: Record<string, number> = {};
  const uniqGoodsArr: goodsItem[] = [];
  arr.map((item) => {
    if (!item.id) return;
    if (testObj[item.id] === 1) return;
    else {
      testObj[item.id] = 1;
      uniqGoodsArr.push(item);
    }
  });
  return uniqGoodsArr;
};

export const fetchArrByChunks = async (props: IFetchByChunksParams) => {
  const { fetch, action, field, limit, offset, setState } = props;
  await fetch({
    action: action,
    params: { field: field, offset: offset, limit: limit },
  })
    .unwrap()
    .then((res: any) => {
      if (res?.result.length) {
        setState((prev) => [...prev, ...res.result]);
        const newOffset = offset + limit;
        fetchArrByChunks({ ...props, offset: newOffset });
      }
    })
    .catch((e: any) => {
      console.log(e.data);
      fetchArrByChunks(props);
    });
};

export const fetchRequest = async (
  fetch: MutationTrigger<
    MutationDefinition<
      any,
      BaseQueryFn<
        string | FetchArgs,
        unknown,
        FetchBaseQueryError,
        {},
        FetchBaseQueryMeta
      >,
      "Goods",
      any,
      "GoodsQuery"
    >
  >,
  params: any,
) => {
  await fetch(params)
    .unwrap()
    .then()
    .catch((err: any) => {
      console.log(err.data);
      fetchRequest(fetch, params);
    });
};
