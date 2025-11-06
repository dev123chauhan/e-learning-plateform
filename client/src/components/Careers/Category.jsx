import { Grid } from "../../styles/categoryStyles";
import Card from "../../common/Card";
import { categoryLists } from "../../lib/categoryLists";
const Category = () => {
  return (
    <Grid>
      {categoryLists.map((category, index) => (
        <Card
          key={index}
          variant="category"
          image={category.image}
          title={category.name}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod adipiscing elit, sed do eiusmod"
          color={category.color}
        />
      ))}
    </Grid>
  );
};

export default Category;


































