declare module '*.svg' {
  const content: string;
  export default content;
};

declare module 'uuid';
declare module '*.module.scss';

// Could not find a declaration file for module 'uuid'. 'C:/Users/PELMANN/Desktop/Grind/weather-app/my-app/node_modules/uuid/dist/index.js' implicitly has an 'any' type.
//   Try `npm i --save-dev @types/uuid` if it exists or add a new declaration (.d.ts) file containing `declare module 'uuid';