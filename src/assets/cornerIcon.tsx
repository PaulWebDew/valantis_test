import { FC } from "react";
import { IIconProps } from "../types/common.types.ts";

export const CornerIcon: FC<IIconProps> = ({ color, size, className }) => {
  return (
    <div className={className}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={size || "100.000000pt"}
        height={size || "94.000000pt"}
        viewBox="0 0 100.000000 94.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,94.000000) scale(0.100000,-0.100000)"
          fill={color || "#000000"}
          stroke="none"
        >
          <path
            d="M19 919 c-16 -16 -19 -28 -14 -47 3 -15 6 -47 5 -72 0 -36 6 -54 28
-85 l30 -39 -19 -30 c-23 -38 -24 -90 -4 -151 14 -41 14 -47 0 -67 -8 -13 -15
-29 -15 -38 1 -8 8 1 17 20 l15 35 14 -30 c21 -47 17 -107 -11 -167 -15 -31
-24 -69 -24 -93 1 -39 2 -39 9 10 4 28 17 69 29 92 24 48 27 121 7 168 -11 26
-10 33 10 62 34 50 39 97 15 145 l-20 41 24 29 c18 21 25 41 24 66 l-1 37 -7
-37 c-9 -43 -38 -91 -51 -83 -6 3 -22 26 -36 51 -30 50 -28 98 4 87 11 -3 9 0
-5 11 -45 34 -17 108 33 89 12 -4 15 -3 10 5 -11 19 -44 14 -67 -9z m76 -279
c8 -16 15 -45 15 -65 0 -37 -26 -105 -40 -105 -9 0 -30 71 -30 103 0 23 28 97
37 97 1 0 9 -13 18 -30z"
          />
          <path
            d="M113 920 c-34 -20 -45 -37 -18 -27 8 4 17 2 20 -3 4 -6 -1 -10 -9
-10 -20 0 -66 -21 -66 -31 0 -4 12 -1 27 7 40 20 61 18 66 -8 l4 -23 2 23 c2
35 25 21 33 -19 l6 -34 -1 34 c-1 22 -9 38 -22 45 -29 17 -45 33 -38 40 15 14
91 5 116 -14 31 -24 45 -26 26 -3 -16 19 -70 43 -96 43 -10 0 -33 -9 -50 -20z"
          />
          <path
            d="M330 906 c-19 -7 -54 -24 -77 -39 -24 -15 -47 -27 -53 -27 -5 0 -10
-4 -10 -10 0 -13 24 -3 90 37 57 34 113 43 151 23 10 -6 19 -8 19 -6 0 8 -57
36 -72 36 -7 -1 -29 -7 -48 -14z"
          />
          <path
            d="M500 897 c-14 -8 -43 -23 -65 -35 -43 -24 -94 -28 -128 -11 -22 10
-22 10 -2 -6 40 -32 62 -29 157 19 50 25 85 46 77 46 -8 0 -25 -6 -39 -13z"
          />
          <path
            d="M660 864 c-72 -24 -124 -27 -175 -9 -13 4 -12 1 5 -9 35 -21 87 -20
162 5 34 12 99 24 143 29 l80 7 -70 0 c-48 1 -93 -7 -145 -23z"
          />
          <path d="M895 870 c27 -12 43 -12 25 0 -8 5 -22 9 -30 9 -10 0 -8 -3 5 -9z" />
          <path d="M986 863 c-6 -14 -5 -15 5 -6 7 7 10 15 7 18 -3 3 -9 -2 -12 -12z" />
          <path
            d="M71 828 c-1 -17 7 -32 21 -42 27 -19 39 -11 12 9 -18 14 -17 14 13
15 17 0 34 4 37 9 3 4 -12 5 -34 1 -35 -6 -39 -5 -43 14 -3 17 -5 15 -6 -6z"
          />
          <path
            d="M185 781 c31 -5 40 -10 40 -26 0 -29 -33 -31 -44 -3 -7 15 -10 17
-10 7 -2 -38 60 -52 67 -16 6 29 -17 47 -57 46 l-36 -2 40 -6z"
          />
          <path d="M72 14 c-7 -8 -8 -14 -3 -14 10 0 25 19 20 25 -2 1 -10 -3 -17 -11z" />
        </g>
      </svg>
    </div>
  );
};
