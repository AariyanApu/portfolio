export interface SkillData {
  title: string;
  icon: string;
  _id: string;
  name: string;
}
export interface fetchData {
  _id: string;
  email: string;
  message: string;
  name: string;
}
export interface projectIconType {
  link: string;
  Icon: any;
}
export interface blogPostType {
  id: string;
  title: string;
  imgUrl: string;
  createdAt: string;
  slug: string;
  desc: string;
}

export interface SearchParamsProps {
  searchParams: { [key: string]: string | string[] | undefined };
}

export interface UploadResult {
  info: {
    public_id: string;
  };
}
