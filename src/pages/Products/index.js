import { Grid } from "@chakra-ui/react";
import { useQuery } from "react-query";

import { fetchProductList } from "../../api";
import Card from "../../components/Card";

function Products() {
  const { isLoading, error, data } = useQuery("products", fetchProductList);

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {data.map((item) => (
          <Card key={item.id} item={item} />
        ))}
      </Grid>
    </div>
  );
}

export default Products;
