import { memo } from "react";
import { BaseSvgProps } from "../../misc/types";

export interface NotificationsSvgProps extends BaseSvgProps {
  fill2: string,
}

const NotificationsSvg = (
  {
    width,
    height,
    stroke,
    strokeWidth,
    fill,
    fill2,
  }: NotificationsSvgProps) => {

  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M19 8C20.6569 8 22 6.65685 22 5C22 3.34315 20.6569 2 19 2C17.3431 2 16 3.34315 
          16 5C16 6.65685 17.3431 8 19 8Z"
        fill={fill2}
      />
      <path
        d="M19 9.5C16.52 9.5 14.5 7.48 14.5 5C14.5 4.28 14.69 3.61 14.99 3H7.52C4.07 3 2 5.06 2 8.52V16.47C2
           19.94 4.07 22 7.52 22H15.47C18.93 22 20.99 19.94 20.99 16.48V9.01C20.39 9.31 19.72 9.5 19 9.5Z"
        fill={fill}
        stroke={stroke}
        shapeRendering="optimizeQuality"
        strokeWidth={strokeWidth}
      />
      <path
        d="M11.75 14H6.75C6.34 14 6 13.66 6 13.25C6 12.84 6.34 12.5 6.75 12.5H11.75C12.16 12.5 12.5 12.84 
 12.5 13.25C12.5 13.66 12.16 14 11.75 14Z"
        fill={fill2}
      />
      <path
        d="M15.75 18H6.75C6.34 18 6 17.66 6 17.25C6 16.84 6.34 16.5 6.75 16.5H15.75C16.16 16.5 16.5 16.84 16.5
  17.25C16.5 17.66 16.16 18 15.75 18Z"
        fill={fill2}
      />
    </svg >
  );
};

export default memo(NotificationsSvg);