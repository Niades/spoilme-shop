import ky from "ky";

const API_ROOT = "http://localhost:3005";
const API_PREFIX = "/api/v1/";

export interface Product {
  name: string,
  description: string,
  price: number,
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

export {
  getUserInfo,
}