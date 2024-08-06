import { BaseSvgProps } from "../../misc/types";


const HomeSvg = ({ width, height, fill }: BaseSvgProps) => {
  return (
    <svg
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}

    >
      <path
        d="M31.52 42.781C30.4414 42.7836 29.4077 43.2133 28.645 43.976C27.8823 44.7387 27.4527 
      45.7724 27.45 46.851V54.781H35.6V46.851C35.5968 45.7708 35.1656 44.7359 
      34.4009 43.9731C33.6361 43.2102 32.6002 42.7815 31.52 42.781Z"
        fill="black"
      />
      <path
        d="M56.72 25.981L50.21 21.101L47.12 18.7809L35.43 10.0009C34.3004 
      9.16314 32.9314 8.71082 31.525 8.71082C30.1187 8.71082 28.7496 9.16314 
      27.62 10.0009L17.5 17.601L12.93 21.0269C12.6258 21.2484 12.3474 21.5034 
      12.1 21.787L6.3 26.287C5.88228 26.6137 5.61022 27.092 5.54283 27.618C5.47544 28.1441 
      5.61816 28.6754 5.94002 29.097C6.12874 29.3381 6.37014 29.5328 6.64574 29.6663C6.92133 
      29.7998 7.22381 29.8684 7.53001 29.8669C7.97265 29.87 8.40306 29.7218 
      8.75002 29.447L10.33 28.2169V48.2769C10.3316 50.0004 11.0169 51.6528 
      12.2356 52.8714C13.4542 54.09 15.1066 54.7754 16.83 54.7769H23.45V46.847C23.4524 44.7074 24.3034 
      42.6561 25.8163 41.1432C27.3292 39.6303 29.3804 38.7793 31.52 38.7769C33.6611 38.7772 35.7146 
      39.6272 37.2296 41.1403C38.7445 42.6534 39.5971 44.7058 39.6 46.847V54.7769H46.23C47.9529 54.7735 49.6042 54.0876
      50.8224 52.8694C52.0406 51.6511 52.7266 49.9998 52.73 48.2769V27.9869L54.32 29.1769C54.6659 29.4372
      55.0871 29.5777 55.52 29.5769C55.8305 29.5769 56.1367 29.5047 56.4144 29.3658C56.6922 29.227 56.9337
      29.0253 57.12 28.7769C57.2786 28.5676 57.3942 28.3289 57.46 28.0746C57.5258 27.8203 57.5405 27.5555
      57.5033 27.2955C57.4661 27.0355 57.3777 26.7854 57.2433 26.5598C57.1088 26.3341 56.931 26.1374 56.72 25.981Z"
        fill={fill}
        stroke="black"
        strokeWidth={4}
      />
    </svg>
  );
};

const activeProps: BaseSvgProps = {
  fill: "rgb(254, 91, 56)",
  width: "40px",
  height: "40px",
  stroke: "",
  strokeWidth: 0
};

const notActiveProps: BaseSvgProps = {
  fill: "white",
  width: "40px",
  height: "40px",
  stroke: "",
  strokeWidth: 0
};

export default { Component: HomeSvg, activeProps, notActiveProps };


