import person1 from "../../../public/assets/person1.png";
import person2 from "../../../public/assets/person2.png";
import { Container, Title, Description, CardContainer, CallCard, ProfileImage,CardText,Button } from "../../styles/oneononeDiscussionStyles";
const OneOnOneDiscussions = () => {
  return (
    <Container>
      <Title>One-on-One Discussions</Title>
      <Description>
        Teachers and teacher assistants can talk with students privately without leaving the video environment.
      </Description>
      <CardContainer>
        <CallCard>
          <ProfileImage src={person1} alt="Teacher" />
          <CardText>Private Discussion</CardText>
          <CardText>Your video can’t be seen by others</CardText>
          <Button>End Discussion</Button>
        </CallCard>
        <CallCard>
          <ProfileImage src={person2} alt="Student" />
          <CardText>Patricia Mendoza</CardText>
        </CallCard>
      </CardContainer>
    </Container>
  );
};

export default OneOnOneDiscussions;
