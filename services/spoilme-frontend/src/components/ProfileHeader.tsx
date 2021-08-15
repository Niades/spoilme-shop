import styled from "@emotion/styled";
import Skeleton from "@material-ui/lab/Skeleton";


interface ProfileHeaderProps {
  username: string,
  description: string|undefined,
  profilePic: string|undefined,
};

const Container = styled.div`
  position: relative;
  background-color: #DEE2FF;
  margin: 10px 10px 0;
  border-radius: 12px;
  display: grid;
  grid-template-columns: 135px 10px 1fr;
  grid-template-areas: 
    'AVATAR SPC USERNAME'
    'AVATAR SPC DESCRIPTION'
  ;
  @media (min-width: 650px) {
    margin: 10px auto 0;
    width: 95%;
  }
`;

const AvatarContainer = styled.div`
  position: absolute;
  top: -10px;
  width: 125px;
  height: 125px;
  border-radius: 75px;
  border: 4px solid white;
  overflow: hidden;

  >div {
    width: 100%;
    height: 100%;
    background-color: white;
    background-position: center;
    background-size: cover;
  }
`;

const AvatarPlaceholder = styled.div`
  grid-area: AVATAR;
  width: 125px;
  height: 110px;
`;

const UsernameTitle = styled.div`
  grid-area: USERNAME;
  font-weight: 500;
  font-size: 24px;
  align-self: center;
`;

const Description = styled.div`
  grid-area: DESCRIPTION;
  padding-right: 10px;
`;

const ProfileHeader = (props: ProfileHeaderProps) => {
  const { username, description, profilePic } = props;
  return (
    <Container>
      <AvatarPlaceholder />
      <AvatarContainer>
        <div style={{ backgroundImage: `url(${profilePic})` }} />
      </AvatarContainer>
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