import { FC, useState } from "react";

import { PaginationProps } from "../../types/pagination.types.ts";

import cls from "./style.module.scss";
import { ArrowLeft } from "../../assets/arrowLeft.tsx";
import { ArrowRight } from "../../assets/arrowRight.tsx";

export const Pagination: FC<PaginationProps> = (props) => {
  const { page, limit, setLimit, setOffset } = props;
  const [inputValue, setInputValue] = useState<number>(limit);

  const renderPages = () => {
    return (
      <div className={cls.pagesRow}>
        <button
          disabled={page === 1}
          onClick={() => setOffset((prev) => prev - limit)}
        >
          <ArrowLeft size={20} className={cls.arrow} />
        </button>
        {page > 1 && <button onClick={() => setOffset(0)}>1</button>}
        {page > 2 && <span>...</span>}
        <button>{page}</button>
        <span className={cls.dots}>...</span>
        <button onClick={() => setOffset((prev) => prev + limit)}>
          <ArrowRight size={20} className={cls.arrow} />
        </button>
      </div>
    );
  };

  return (
    <div className={cls.section}>
      {renderPages()}
      <span className={cls.title}>на странице по:</span>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(Number(e.target.value))}
        onKeyDown={(e) => e.key === "Enter" && setLimit(inputValue)}
      />
      <button onClick={() => setLimit(inputValue)}>ок</button>
    </div>
  );
};
