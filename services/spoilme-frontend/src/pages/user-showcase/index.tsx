import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import * as api from "../../api";
import { Product } from "../../api";
import { ProfileHeader } from "../../components/ProfileHeader";
import { ProductList } from "../../components/ProductsList";

interface UserShowcaseURLParams {
  username: string,
};

interface UserInfoState {
  username: string|undefined,
  profileDescription: string|undefined,
  Products: Product[],
};

function UserShowcase() {
  const { username } = useParams<UserShowcaseURLParams>();
  const [userInfo, setUserInfo] = useState<UserInfoState|undefined>(undefined);
  useEffect(() => {
    api.getUserInfo(username).then((resp: api.UserInfo) => setUserInfo(resp));
  }, [username])
  return (
    <div>
      <ProfileHeader
        username={username}
        description={userInfo?.profileDescription}
      />
      <ProductList 
        products={userInfo?.Products}
      />
    </div>
  );
}

export default UserShowcase;
