import React from "react";

import {
    Box,
    Link as ChakraLink,
    Heading, 
    Grid, 
} from "@chakra-ui/react";

import theme from "../theme";
import VerticalAlign from "./verticalAlign";

function PageLink ({ el }) {
    return (
        <ChakraLink href={ el.link } display="block" rounded="lg" _hover={{textDecoration: "none", bg: theme.white + "cc", shadow: "lg" }} bg={ theme.white + "aa" } style={{backdropFilter: "blur(3px)"}}>
            <Grid px={[3, 3, 5]} py={[2, 2, 5]}  textAlign={["left", "left", "center"]}   color={ theme.black } templateColumns={["50px calc(100% - 50px)", "50px calc(100% - 50px)", "100% 100%"]}>
                <Box>
          <Heading mb={[0, 0, 3]}>
            <Box width={[30, 30, "40px"]} margin={[0, 0, "0 auto"]}>
            { el.letter }
            </Box>
          </Heading>
          </Box>

            <Box gridRow={[0, 0, 2]}>
                <VerticalAlign>
          <Heading size="md" letterSpacing={1} fontWeight="300">
              
            { el.title }
          </Heading>
          </VerticalAlign>
          </Box>
        </Grid>
        </ChakraLink>
    )
}

export default PageLink;