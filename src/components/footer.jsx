import React from "react";

import {
  Box,
  Container, 
  Link, 
} from "@chakra-ui/react";

import theme from "../theme.js";

function Footer () {

  return (
    <Box bg={ theme.black } color={ theme.white }>
      <Container>
        <Box p={5}>
          <Link href="/" rounded="sm">
          samullman.com
          </Link>
        </Box>
        
      </Container>

    </Box>
  );
}

export default Footer;
