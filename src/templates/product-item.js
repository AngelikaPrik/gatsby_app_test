import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { graphql } from "gatsby"
import Typography from "@mui/material/Typography"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Button, Container, Stack } from "@mui/material"

const ProductItem = ({ data }) => {
  const { title, description, price } = data.product
  const img = getImage(data.file)
  return (
    <Layout>
      <Seo title={title} />
      <Container
        maxWidth="md"
        sx={{
          bgcolor: "#81d8cc37",
          borderRadius: "10px",
          mt: "30px",
          p: "20px",
        }}
      >
        <Box display="flex" alignItems="center" justifyContent="space-between" flexDirection={{md: "row", xs: "column"}}>
          <GatsbyImage image={img} alt={title}/>
          <Stack width={{md: "50%", xs: "100%"}}>
            <Typography variant="h4">{title}</Typography>
            <Typography variant="subtitle1">{description}</Typography>
            <Typography variant="h5" mt={4}>${price}</Typography>
            <Button variant="contained" sx={{width: "200px"}}>Add to Cart</Button>
          </Stack>
        </Box>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query ProductQuery($url: String, $title: String) {
    product(url: { eq: $url }) {
      title
      description
      price
    }

    file(name: { eq: $title }) {
      name
      childImageSharp {
        gatsbyImageData(width: 250)
      }
    }
  }
`
export default ProductItem
