import ui from '../../../public/assets/Ui.png';
import react from '../../../public/assets/React.png';
import php from '../../../public/assets/Php.png';
import javascript from '../../../public/assets/Javascript.png';
import { Card, Container, Grid, Image, Title } from '../../styles/blogListStyles';
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
