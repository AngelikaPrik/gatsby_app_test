import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../components/index.css"
import { Grid } from "@mui/material"
import { Link, graphql } from "gatsby"
import ProductCard from "../components/product-card"

const IndexPage = ({ data }) => {
  const products = data.allProduct.nodes

  return (
    <Layout>
      <Grid container spacing={2} mt={2} mb={10}>
        {products.map(product => {
          return (
            <Grid
              item
              key={product.id}
              lg={3}
              md={4}
              sm={6}
              xs={12}
              sx={{ "& a": { textDecoration: "none" } }}
            >
              <Link to={`/${product.url}`}>
                <ProductCard product={product} />
              </Link>
            </Grid>
          )
        })}
      </Grid>
    </Layout>
  )
}

export const query = graphql`
  query AllProductsQuery {
    allProduct {
      nodes {
        title
        price
        id
        url
        image 
      }
    }
  }
`

export const Head = () => <Seo title="Home" />

export default IndexPage
