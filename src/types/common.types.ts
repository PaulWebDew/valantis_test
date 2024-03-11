import { Dispatch, SetStateAction } from "react";

export interface IIconProps {
  color?: string;
  size?: number;
  className?: string;
}

export interface ISearchProps {
  brands: string[];
  products: string[];
  prices: number[];
  setIds: Dispatch<SetStateAction<string[]>>;
  setDefaultIds: () => void;
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

export interface IFetchByChunksParams {
  fetch: any;
  action: string;
  field: string;
  limit: number;
  offset: number;
  setState: Dispatch<SetStateAction<any[]>>;
}
