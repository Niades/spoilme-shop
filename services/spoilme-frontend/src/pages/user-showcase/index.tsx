import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import * as api from "../../api";
import { Product } from "../../api";
import { ProfileHeader } from "../../components/ProfileHeader";
import { ProductList } from "../../components/ProductsList";

export interface UserShowcaseURLParams {
  username: string,
};

interface UserInfoState {
  username: string|undefined,
  profileDescription: string|undefined,
  Products: Product[],
};

const Container = styled.div`
  @media (min-width: 650px) {
    max-width: 720px;
    margin: 0 auto;
  }
`;

function UserShowcase() {
  const { username } = useParams<UserShowcaseURLParams>();
  const [userInfo, setUserInfo] = useState<UserInfoState|undefined>(undefined);
  useEffect(() => {
    api.getUserInfo(username).then((resp: api.UserInfo) => setUserInfo(resp));
  }, [username])
  return (
    <Container>
      <ProfileHeader
        username={username}
        description={userInfo?.profileDescription}
      />
      <ProductList 
        products={userInfo?.Products}
      />
    </Container>
  );
}

export default UserShowcase;
