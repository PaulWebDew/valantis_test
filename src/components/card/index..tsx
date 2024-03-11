import { FC } from "react";
import type { goodsItem } from "../../types/api.type.ts";
import cls from "./style.module.scss";
import { CornerIcon } from "../../assets/cornerIcon.tsx";

export const Card: FC<goodsItem> = ({ brand, id, price, product }) => {
  return (
    <div className={cls.card}>
      <CornerIcon className={cls.corner} size={80} color={"#9d9898"} />
      {brand && (
        <div className={cls.card__header}>
          <h3>{brand}</h3>
        </div>
      )}
      <div className={cls.card__body}>
        {product}
        <p>id: {id}</p>
      </div>
      <div className={cls.card__footer}>
        цена: <span>{price}</span> руб.
      </div>
    </div>
  );
};
