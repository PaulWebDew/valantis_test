import { FC, useEffect, useState } from "react";
import { Sceleton } from "../../components/loading";

import {
  useGetIdsMutation,
  useGetItemsMutation,
  useGetFieldsMutation,
} from "../../store/api/goods.api.ts";
import { Card } from "../../components/card/index..tsx";
import { goodsItem } from "../../types/api.type.ts";
import {
  getUniqGoods,
  fetchArrByChunks,
  fetchRequest,
} from "../../features/common.tsx";
import { SearchBlock } from "../../components/search";
import { Pagination } from "../../components/pagination";

import cls from "./style.module.scss";
const LIMIT = 50;
const OFFSET = 0;

export const MainPage: FC = () => {
  const [goodsArr, setGoodsArr] = useState<goodsItem[]>([]);
  const [idsArr, setIdsArr] = useState<string[]>([]);
  const [fieldsProductArr, setFieldsProductArr] = useState<string[]>([]);
  const [fieldsPriceArr, setFieldsPriceArr] = useState<number[]>([]);
  const [fieldsBrandArr, setFieldsBrandArr] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [limit, setLimit] = useState(LIMIT);
  const [offset, setOffset] = useState(OFFSET);

  const page = offset / limit + 1;

  const [getIds, { data: idsData, isLoading: isIdsLoading }] =
    useGetIdsMutation();

  const [getItems, { data: goodsData, isLoading: isGoodsLoading }] =
    useGetItemsMutation();
  const [getFieldsBrand] = useGetFieldsMutation();
  const [getFieldsPrice] = useGetFieldsMutation();
  const [getFieldsProduct] = useGetFieldsMutation();
  const fetch = async () => {
    await fetchRequest(getIds, { offset: offset, limit: limit });
    await fetchArrByChunks({
      fetch: getFieldsBrand,
      action: "get_fields",
      field: "brand",
      limit: 1000,
      offset: 0,
      setState: setFieldsBrandArr,
    });
    await fetchArrByChunks({
      fetch: getFieldsPrice,
      action: "get_fields",
      field: "price",
      limit: 1000,
      offset: 0,
      setState: setFieldsPriceArr,
    });
    await fetchArrByChunks({
      fetch: getFieldsProduct,
      action: "get_fields",
      field: "product",
      limit: 1000,
      offset: 0,
      setState: setFieldsProductArr,
    });
  };

  useEffect(() => {
    fetch();
  }, []);

  useEffect(() => {
    if (!idsData) return;
    setIdsArr(idsData.result);
  }, [idsData]);

  useEffect(() => {
    if (!idsArr?.length) return;
    getItems({ ids: idsArr });
  }, [idsArr]);

  // удаление товаров с дубл. Id
  useEffect(() => {
    if (!goodsData) return;
    const uniqGoods = getUniqGoods(goodsData.result);
    setGoodsArr(uniqGoods);
  }, [goodsData]);

  useEffect(() => {
    fetchRequest(getIds, { offset: offset, limit: limit });
  }, [limit, offset]);

  return (
    <section className={cls.section}>
      <SearchBlock
        setIds={setIdsArr}
        brands={[...new Set(fieldsBrandArr)].sort()}
        prices={[...new Set(fieldsPriceArr)]}
        products={[...new Set(fieldsProductArr)].sort()}
        setDefaultIds={() => getItems({ ids: idsData.result })}
        setIsLoading={setIsLoading}
      />
      {isIdsLoading || isGoodsLoading || isLoading ? (
        <div className={cls.loading}>
          <div className={cls.main}>
            {Array.from({ length: 16 }, (_, k) => k).map((_, index) => (
              <Sceleton key={index} />
            ))}
          </div>
        </div>
      ) : (
        <div className={cls.main}>
          {goodsArr?.map((item: goodsItem) => (
            <Card
              key={item.id}
              brand={item.brand}
              id={item.id}
              price={item.price}
              product={item.product}
            />
          ))}
        </div>
      )}
      <Pagination
        setOffset={setOffset}
        limit={limit}
        page={page}
        setLimit={setLimit}
      />
    </section>
  );
};
