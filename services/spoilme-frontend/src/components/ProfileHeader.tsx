import styled from "@emotion/styled";
import Skeleton from "@material-ui/lab/Skeleton";


interface ProfileHeaderProps {
  username: string,
  name: string|undefined,
  description: string|undefined,
  profilePic: string|undefined,
};

const Container = styled.div`
  position: relative;
  background-color: #FFFFFF;
  margin: 0 15px;
  border-radius: 20px;
  box-shadow: 0px 18px 80px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 135px 10px 1fr;
  grid-template-areas: 
    'AVATAR SPC NAME'
    'AVATAR SPC DESCRIPTION'
  ;
  height: 178px;
  @media (min-width: 650px) {
    margin: 10px auto 0;
    width: 95%;
    height: 250px;
    grid-template-columns: 200px 10px 1fr
  }
`; 

const AvatarContainer = styled.div`
  grid-area: AVATAR;
  width: 125px;
  height: 100%;
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
  overflow: hidden;

  >div {
    width: 100%;
    height: 100%;
    background-color: white;
    background-position: center;
    background-size: cover;
  }

  @media (min-width: 650px) {
    width: 100%;
  }
`;

const NameContainer = styled.div`
  grid-area: NAME;
  align-self: center;
  @media (min-width: 650px) {
    align-self: end;
  }
`;

const Name = styled.div`
  font-size: 28px;
  font-weight: 700;
  @media (min-width: 650px) {
    display: inline-block;
  }
`;

const Handle = styled.div`
  color: #998686;
  font-size: 18px;
  font-weight: 700;
  @media (min-width: 650px) {
    margin-left: 10px;
    display: inline-block;
  }
`;

const Description = styled.div`
  grid-area: DESCRIPTION;
  padding-right: 10px;
`;

function prepareName(name: string|undefined): string|undefined {
  if(name === undefined) {
    return undefined;
  }
  return name[0].toUpperCase() + name.slice(1).toLowerCase();
}

const ProfileHeader = (props: ProfileHeaderProps) => {
  const { name, username, description, profilePic } = props;
  return (
    <Container>
      <AvatarContainer>
        <div style={{ backgroundImage: `url(${profilePic})` }} />
      </AvatarContainer>
      <NameContainer>
        <Name>
          {name === undefined &&
            <Skeleton variant="text" style={{ width: "50%", }} />
          }
          {name !== undefined && prepareName(name)}
        </Name>
        <Handle>
          @{username}
        </Handle>
      </NameContainer>
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