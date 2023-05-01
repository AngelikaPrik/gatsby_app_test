import * as React from "react"
import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material"

const ProductCard = ({ product }) => {
  const { title, description, price } = product
  return (
    <Card
      sx={{
        minHeight: "250px",
        height: "300px",
        bgcolor: "#81d8cc37",
        boxShadow: "none",
        p: "5px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardMedia>
        <img src="http://placehold.it/150x100" alt="placehold" />
      </CardMedia>

      <CardContent
        sx={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography gutterBottom variant="h6" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" component="p">
            {description}
          </Typography>
        </Box>
        <Box>
          <Typography variant="h6" component="p">
            ${price}
          </Typography>
          <Button variant="contained">Add to Cart</Button>
        </Box>
      </CardContent>
    </Card>
  )
}

export default ProductCard
