import card1 from '../../../public/assets/card1.png';
import { AuthorInfo, Button, Container, Content, Description, ImageSection, TextSection, Title } from '../../styles/blogBannerStyles';
const BlogBanner = () => (
  <>
    <Container>
      <Content>
        <TextSection>
          <AuthorInfo>By Themadbrains in Inspiration</AuthorInfo>
          <Title>Why Swift UI Should Be on the Radar of Every Mobile Developer</Title>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
            sed do eiusmod tempor Lorem ipsum dolor sitamet, 
            consectetur adipiscing elit, sed do eiusmod tempor
          </Description>
          <Button>Start learning now</Button>
        </TextSection>
        <ImageSection>
          <img src={card1} alt="Developer workspace" />
        </ImageSection>
      </Content>
    </Container>
  </>
);

export default BlogBanner;
