import { memo } from "react";
import { BaseSvgProps } from "../../misc/types";

const HeartSvg = ({ fill, stroke, strokeWidth, width, height }: BaseSvgProps) => {
  return (
    <div >
      <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M16.0298 5.33C17.5998 3.88 19.6898 3 21.9998 3C26.9698 3 30.9998 7.03
        30.9998 12C30.9998 20 20.9998 29 15.9998 31C10.9998 29 0.999817 20
        0.999817 12C0.999817 7.03 5.02982 3 9.99982 3C12.3098 3 14.4098 3.88 15.9998 5.3L16.0298 5.33Z"
          fill={fill} />
        <path
          d="M16 5.30451C14.407 3.87551 12.309 2.99951 10 2.99951C5.029 2.99951 1 7.02951 1 11.9995C1 19.9995 11
        28.9995 16 30.9995C21 28.9995 31 19.9995 31 11.9995C31 7.02951 26.971 2.99951 22 2.99951C18.477 2.99951
        15.479 5.05051 14 7.99951M27 11.9998C27 9.23781 24.762 6.99981 22 6.99981"
          stroke={stroke} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
};

export default memo(HeartSvg);