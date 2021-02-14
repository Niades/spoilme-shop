import styled from "@emotion/styled";
import Skeleton from "@material-ui/lab/Skeleton";
import MikuruAvatar from "../assets/images/mikuru.jpeg";


interface ProfileHeaderProps {
  username: string,
  description: string|undefined,
};

const Container = styled.div`
  position: relative;
  margin: 10px auto 30px;
  width: 95%;
  background-color: #DEE2FF;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 170px 1fr;
  grid-template-areas: 
    'AVATAR USERNAME'
    'AVATAR DESCRIPTION'
  ;
`;

const Avatar = styled.img`
  position: absolute;
  top: -10px;
  width: 150px;
  height: 150px;
  border-radius: 75px;
  border: 3px solid white;
`;

const AvatarPlaceholder = styled.div`
  grid-area: AVATAR;
  width: 150px;
  height: 130px;
`;

const UsernameTitle = styled.div`
  grid-area: USERNAME;
  font-size: 24px;
  align-self: center;
`;

const Description = styled.div`
  grid-area: DESCRIPTION;
  padding-right: 15px;
`;

const ProfileHeader = (props: ProfileHeaderProps) => {
  const { username, description } = props;
  return (
    <Container>
      <AvatarPlaceholder />
      <Avatar src={MikuruAvatar}/>
      <UsernameTitle>
        @{username}
      </UsernameTitle>
      <Description>
        {description === undefined &&
          <div>
            <Skeleton variant="text" />
            <Skeleton variant="text" />
          </div>
        }
        {description !== undefined &&
          description
        }
      </Description>
    </Container>
  );
};

export { ProfileHeader };