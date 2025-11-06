import { Container, Header, Title, SeeAll, Grid } from "../../styles/recommendedCourseStyles";
import Card from "../../common/Card";
import { recommendedCourseLists } from "../../lib/recommendedCourseLists";
const RecommendedCourse = () => {
  return (
    <Container>
      <Header>
        <Title>Recommended for you</Title>
        <SeeAll href="#">See all</SeeAll>
      </Header>
      <Grid>
        {recommendedCourseLists.map((course, index) => (
          <Card
            key={index}
            variant="recommended"
            image={course.image}
            title={course.title}
            description={course.description}
            tags={[
              { text: course.category },
              { text: course.duration }
            ]}
            footer={{
              profileImage: course.avatar,
              profileName: course.instructor,
              originalPrice: course.originalPrice,
              price: course.discountedPrice
            }}
          />
        ))}
      </Grid>
    </Container>
  );
};

export default RecommendedCourse;







































































































