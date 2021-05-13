import React, { useState } from "react";
// import GoogleMapReact from "google-map-react";
// import { AiFillStar, AiOutlineInstagram } from "react-icons/ai";
import styled from "@emotion/styled";
import Layout from "../components/layout";
import MenuButton from "../components/menuButton";
import MyImage from "../components/progressiveImage";
import PageLink from "../components/pageLink";

import {
  Container,
  Box,
  Heading,
  Link as ChakraLink,
  SimpleGrid,
} from "@chakra-ui/react";

import theme from "../theme";

const Styles = styled.div``;

function Page () {
  let pageLinks = [
    {
      title: "About",
      letter: <MyImage src="./src/images/about.svg" />,
      link: "/about",
    },

    {
      title: "Projects",
      letter: <MyImage src="./src/images/services.svg" />,
      link: "/projects",
    },

    {
      title: "Contact",
      letter: <MyImage src="./src/images/contact.svg" />,
      link: "/contact",

    },
  ];



  return (
    <Layout>
      <Styles>

        <Box
          shadow="lg"
          color="white"
          py={[5, 10, 20]}
          background={`linear-gradient( 109.6deg,  rgba(62,161,219,1) 11.2%, rgba(93,52,236,1) 100.2% );`}
        >
          <Container>
            <Box
              px={[3, 3, 5]}
              py={[2, 2, 5]}
              rounded="lg"
              bg={theme.white + "aa"}
              style={{ backdropFilter: "blur(3px)" }}
              color={theme.black}
              mb={[3, 4, 5]}
            >
              <Heading as="h1" mb={1}>
                Digital systems.  
              </Heading>

              <Heading size="md" letterSpacing={1} fontWeight="300">
                Powered by the{" "}
                <ChakraLink
                  href="https://jamstack.org/"
                  target="_blank"
                  rounded="md"
                >
                  JAMStack
                </ChakraLink>
                .
              </Heading>
            </Box>

            <SimpleGrid columns={[2, 3, 3]} spacing={[3, 4, 5]} mb={[3, 3, 5]}>
              {pageLinks.map((el) => {
                return <PageLink el={el} />;
              })}
            </SimpleGrid>

            <Box mb={[3, 4, 5]}>
              <Box px={[3, 3, 5]}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum.
              </Box>
            </Box>

            <Box id="current">
              <SimpleGrid
                columns={[1, 1]}
                spacing={[6, 6, 12]}
                maxWidth="calc(900px + 3rem)"
                margin="0px auto"
                mb={[5, 10]}
              >
                {currentProjects.map((el) => {
                  return (
                    <Box key={"cp-" + el.title} px={[3, 3, 5]} mb={[3, 4, 5]}>
                      <Heading size="md" mb={1}>
                        {el.title}
                      </Heading>

                      <Box
                        fontSize="lg"
                        fontWeight="300"
                        lineHeight="18px"
                        mb={4}
                      >
                        {el.description}
                      </Box>

                      <ChakraLink
                        href={el.link}
                        mb={4}
                        target="_blank"
                        rel="noopener noreferrer"
                        _hover={{ textDecor: "none" }}
                        display="block"
                        rounded="md"
                        overflow="hidden"
                      >
                        <Box
                          position="relative"
                          height={["220px", "300px"]}
                          rounded="md"
                          overflow="hidden"
                          bg="gray.100"
                        >
                          <MyImage src={el.image} alt="Bemizu" />
                        </Box>
                      </ChakraLink>

                      <Box>
                        <Box py={1} rounded="lg" display="inline-block">
                          {el.tags.map((tag, idx) => {
                            let mr = el.tags.length == idx + 1 ? 0 : 2;
                            return (
                              <Box
                                rounded="md"
                                bg="gray.200"
                                display="inline-block"
                                py={1}
                                px={2}
                                mb={2}
                                color={tag.color}
                                mr={mr}
                              >
                                {tag.title}
                              </Box>
                            );
                          })}
                        </Box>
                      </Box>
                    </Box>
                  );
                })}
              </SimpleGrid>
            </Box>
          </Container>
        </Box>

      </Styles>
    </Layout>
  );
}

export default Page;
