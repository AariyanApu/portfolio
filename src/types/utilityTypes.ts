export interface inputType {
  name: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: any;
}

export interface framerMotionType {
  children: any;
  whileTap?: any;
  transition?: any;
  variants?: any;
  key?: any;
  href?: any;
  customStyles?: any;
  aria?: any;
  whileInView?: any;
  dataTip?: any;
  dataFor?: any;
  animate?: any;
}

export interface framerMotionContainerType {
  children: any;
  customStyles?: any;
}
export interface socialIconType {
  aHref?: string;
  icon?: any;
  aText?: string;
  largeIcon?: any;
  textStyle?: string;
  width?: string;
}

export interface reviewType {
  title: string;
  body: string;
  author: string;
  rating?: number;
  className?: string;
  imgSrc?: any;
}
