import { Dispatch, SetStateAction } from "react";

export type PaginationProps = {
  page: number;
  limit: number;
  setLimit: Dispatch<SetStateAction<number>>;
  setOffset: Dispatch<SetStateAction<number>>;
};
