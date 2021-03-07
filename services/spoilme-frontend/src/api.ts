import ky from "ky";

let API_ROOT = "";
if(process.env.NODE_ENV === "development") {
  API_ROOT = "http://localhost:3005"
} else if(process.env.NODE_ENV === "production") {
  API_ROOT = window.location.origin;
}
const API_PREFIX = "/api/v1/";

export interface Product {
  id: number,
  name_EN: string,
  name_RU: string,
  description_EN: string,
  description_RU: string,
  displayPrice: number,
  image: string,
};

export interface UserInfo {
  id: number,
  username: string,
  profileDescription: string,
  Products: Product[],
}

function getUserInfo(username: string): Promise<UserInfo> {
  return ky.get(API_ROOT + API_PREFIX + "user", { searchParams: { username } }).json<UserInfo>();
}

function getProductInfo(id: number): Promise<Product> {
  return ky.get(API_ROOT + API_PREFIX + "product", { searchParams: { id } }).json<Product>();
}

export {
  getUserInfo,
  getProductInfo,
}