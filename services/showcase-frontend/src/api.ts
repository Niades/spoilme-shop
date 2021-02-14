import ky from "ky";

const API_ROOT = "http://localhost:3005";
const API_PREFIX = "/api/v1/";

export interface UserInfo {
  id: number,
  username: string,
  profileDescription: string,
}

function getUserInfo(username: string): Promise<UserInfo> {
  return ky.get(API_ROOT + API_PREFIX + "user", { searchParams: { username } }).json<UserInfo>();
}

export {
  getUserInfo,
}