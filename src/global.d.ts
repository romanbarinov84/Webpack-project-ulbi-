declare module '*.css';
declare module '*.scss';

declare module '*.module.scss' {
  interface IClassNames { [className: string]: string }
  const classNames: IClassNames
  export = classNames
}

declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.svg';
declare module '*.gif';
declare module '*.webp';

declare const __PLATFORM__ : "mobile" | "desktop";