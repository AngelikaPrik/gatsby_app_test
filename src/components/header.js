import * as React from "react"
import { Link } from "gatsby"
import { AppBar, Container, Typography } from "@mui/material"

const Header = ({ siteTitle }) => (
  <AppBar
    color="transparent"
    position="static"
    sx={{ boxShadow: "none" }}
  >
    <Container
      maxWidth="lg"
      sx={{ borderRadius: "10px", bgcolor: "#81d8cc", py: "10px", mt:"5px" }}
    >
      <Link to="/" style={{ textDecoration: "none" }}>
        <Typography variant="h6" color="initial" fontWeight={600}>
          {siteTitle}
        </Typography>
      </Link>
    </Container>
  </AppBar>
)

export default Header
