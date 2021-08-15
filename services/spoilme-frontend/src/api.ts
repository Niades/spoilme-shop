import ky from "ky";

let API_ROOT = "";
if(process.env.NODE_ENV === "development") {
  API_ROOT = "http://localhost:3005"
} else if(process.env.NODE_ENV === "production") {
  API_ROOT = window.location.origin;
}
const API_PREFIX = "/api/v1/";

export interface ProductPrice {
  rub: number,
  usd: number,
}

export interface Product {
  id: string,
  name_en: string,
  name_ru: string,
  price: ProductPrice,
  image: string,
};

export interface UserInfo {
  firstName: string,
  username: string,
  profileDescription: string,
  profilePic: string,
};

export interface UserInfoResult {
  user: UserInfo,
  products: Product[],
};

function getUserInfo(username: string): Promise<UserInfoResult> {
  return ky.get(API_ROOT + API_PREFIX + "user", { searchParams: { username } }).json<UserInfoResult>();
}

function getProductInfo(id: string): Promise<Product> {
  return ky.get(API_ROOT + API_PREFIX + "product", { searchParams: { id } }).json<Product>();
}

export {
  getUserInfo,
  getProductInfo,
}