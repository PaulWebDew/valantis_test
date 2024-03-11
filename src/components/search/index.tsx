import { FC, useEffect, useState } from "react";
import { ReactSearchAutocomplete } from "react-search-autocomplete";

import { useGetFilteredGoodsMutation } from "../../store/api/goods.api.ts";

import type { ISearchProps } from "../../types/common.types.ts";

import cls from "./style.module.scss";

export const SearchBlock: FC<ISearchProps> = ({
  products,
  prices,
  brands,
  setIds,
  setDefaultIds,
  setIsLoading,
}) => {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedProduct, setSelectedProduct] = useState("");
  const [selectedPrice, setSelectedPrice] = useState("");

  const [getFilteredGoods, { data, isLoading: isFilteredGoodsLoading }] =
    useGetFilteredGoodsMutation();

  const searchGoods = () => {
    let params = {};
    if (
      !selectedPrice.length &&
      !selectedProduct.length &&
      !selectedBrand.length
    )
      return false;
    if (selectedBrand.length) params = { ...params, brand: selectedBrand };
    if (selectedProduct.length)
      params = { ...params, product: selectedProduct };
    if (selectedPrice.length)
      params = { ...params, price: Number(selectedPrice) };
    getFilteredGoods(params);
  };

  const searchItemsBrand = brands?.map((item, id) => ({
    id: id,
    name: item,
  }));

  const searchItemsProduct = products?.map((item, id) => ({
    id: id,
    name: item,
  }));

  const searchItemsPrices = prices?.map((item, id) => ({
    id: id,
    name: item.toString(),
  }));

  useEffect(() => {
    setIds(data?.result);
  }, [data]);

  useEffect(() => {
    if (!selectedBrand.length && !selectedProduct.length) setIds([]);
  }, [selectedBrand, selectedProduct]);

  useEffect(() => {
    if (isFilteredGoodsLoading) {
      setIsLoading(true);
    } else setIsLoading(false);
  }, [isFilteredGoodsLoading]);

  return (
    <div className={cls.container}>
      <ReactSearchAutocomplete
        maxResults={6}
        placeholder={"Бренд"}
        items={searchItemsBrand || []}
        className={cls.autoInput}
        onSelect={(item) => setSelectedBrand(item.name)}
        onClear={setDefaultIds}
      />
      <ReactSearchAutocomplete
        maxResults={6}
        placeholder={"Наименование"}
        items={searchItemsProduct || []}
        className={cls.autoInput}
        onSelect={(item) => setSelectedProduct(item.name)}
        onClear={setDefaultIds}
      />
      <ReactSearchAutocomplete
        maxResults={6}
        onSearch={(val) => setSelectedPrice(val)}
        placeholder={"Цена"}
        items={searchItemsPrices || []}
        className={cls.autoInput}
        onSelect={(item) => setSelectedPrice(item.name)}
        onClear={setDefaultIds}
      />
      <button onClick={searchGoods}>Найти</button>
    </div>
  );
};
