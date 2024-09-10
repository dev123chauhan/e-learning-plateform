import ui from '../../assets/Ui.png';
import react from '../../assets/React.png';
import php from '../../assets/Php.png';
import javascript from '../../assets/Javascript.png';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  @media (max-width: 768px) {
    padding: 15px;
  }

  @media (max-width: 480px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #333;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 10px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;

  @media (max-width: 768px) {
    gap: 15px;
  }

  @media (max-width: 480px) {
    gap: 10px;
  }
`;

const Card = styled.div`
  position: relative;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    border-radius: 8px;
  }

  @media (max-width: 480px) {
    border-radius: 6px;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;

  @media (max-width: 768px) {
    height: 180px;
  }

  @media (max-width: 480px) {
    height: 150px;
  }
`;

const BlogList = () => (
  <Container>
    <Title>Reading blog list</Title>
    <Grid>
      <Card>
        <Image src={ui} alt="UX/UI" />
      </Card>
      <Card>
        <Image src={react} alt="React" />
      </Card>
      <Card>
        <Image src={php} alt="PHP" />
      </Card>
      <Card>
        <Image src={javascript} alt="JavaScript" />
      </Card>
    </Grid>
  </Container>
);

export default BlogList;
