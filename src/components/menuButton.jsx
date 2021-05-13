import React from "react";
import { CgMenu } from "react-icons/cg";
import { FaChevronDown } from "react-icons/fa";
import { BiPhone, BiMap } from "react-icons/bi";

import {
    Drawer,
    DrawerBody,
    DrawerOverlay,
    DrawerContent,
    useDisclosure,
    IconButton,
    Box,
    Heading,
    SimpleGrid,
    Container,
  } from "@chakra-ui/react";

import theme from "../theme";


function MenuButton () {
    return (

      <Box
      position="fixed"
      zIndex="500"
      right={ 4 }
      bottom={ 4 }
    >
      <PlacementExample />
    </Box>
    )
}


export default MenuButton;


function PlacementExample() {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <IconButton
          onClick={onOpen}
          icon={<CgMenu />}
          size="lg"
          fontSize="30px"
          width="55px"
          bg="#777777cc"
          zIndex={999999999}
          style={{ backdropFilter: "blur(3px)" }}
          color="white"
          variant="outline"
          _hover={{ bg: "#555555cc" }}
          _active={{ bg: "#333333cc" }}
        />
  
        <Drawer size="md" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerBody position="relative" overflow="visible" background={ theme.black }>

            <Box position="absolute" width="100%" textAlign="center">
                <Box
                  left="-25px"
                  cursor="pointer"
                  bottom={20}
                  zIndex="4444555"
                  height="50px"
                  width="50px"
                  display="inline-block"
                  rounded="full"
                  overflow="hidden"
                  position="relative"
                  color="#ffffffcc"
                  fontSize="50px"
                  onClick={onClose}
                >
                  <FaChevronDown />
                  {/* <img src={ Logo } style={{height: "100%", width: "100%" }} /> */}
                </Box>
              </Box>

                <Container>

                <SimpleGrid spacing={8} columns={2} p={5} mb={[14]}>
                <Box
                  fontSize="60px"
                  color="#fafafa"
                  borderWidth="2"
                  rounded="lg"
                  textAlign="center"
                  as="a"
                  href="tel:5037563719"
                  target="_blank"
                  p="5"
                  pt="2"
                  cursor="pointer"
                  shadow="md"
                  _active={{ shadow: "sm" }}
                  transition="0.1s ease"
                >
                  <Box>
                    <BiPhone style={{ display: "inline-block" }} />
                  </Box>
  
                  <Heading size="sm" letterSpacing={1} fontWeight="500">
                    PHONE
                  </Heading>
                </Box>
                <Box
                  fontSize="60px"
                  color="#fafafa"
                  rounded="lg"
                  textAlign="center"
                  as="a"
                  href="https://goo.gl/maps/a1nMd5PSgLFmQmBq8"
                  target="_blank"
                  pt="2"
                  cursor="pointer"
                  shadow="md"
                  _active={{ shadow: "sm" }}
                  transition="0.1s ease"
                >
                  <Box>
                    <BiMap style={{ display: "inline-block" }} />
                  </Box>
  
                  <Heading size="sm" letterSpacing={1} fontWeight="500">
                    DIRECTIONS
                  </Heading>
                </Box>
              </SimpleGrid>
           
  
              </Container>
            
  
  
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }
  

  