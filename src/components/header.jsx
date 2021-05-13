import React from "react";

import VerticalAlign from "./verticalAlign";

import Scrollspy from "react-scrollspy";

import {
  Heading,
  Box,
  Button,
  Grid,
} from "@chakra-ui/react";

import { useEffect, useState } from "react";

import styled from "@emotion/styled";
import jump from "jump.js";

const Styles = styled.span`
  ul div {
    transition: 0.2s ease;
  }

  ul div div {
    width: 0px;
    background: white;
  }

  @keyframes expand {
    from {
      width: 0%;
    }

    to {
      width: 100%;
    }
  }

  ul div.is-current div {
    animation-name: expand;
    animation-duration: 0.3s;
    animation-iteration-count: 1;
    width: 100%;
  }
`;

function Header() {
  const [onTop, setOnTop] = useState(true);

  useEffect(() => {
    window.onscroll = () => {
      if (onTop && window.scrollY > 10) {
        setOnTop(false);
      } else if (!onTop && window.scrollY < 10) {
        setOnTop(true);
      }
    };
  });

  const bg = onTop ? "#03030300" : "#030303";
  const color = onTop ? "white" : "white";
  const height = onTop ? "80px" : "60px";
  const shadow = onTop ? "none" : "lg";

  let links = [
    {
      title: "Home",
      jump: "#home",
    },

    {
      title: "About",
      jump: "#about",
    },

    {
      title: "Current",
      jump: "#current",
    },

    {
      title: "Past",
      jump: "#past",
    },

    {
      title: "Favorites",
      jump: "#favorites",
    },

    {
      title: "Contact",
      jump: "#contact",
    },
  ];

  return (
    <Styles>
      <Grid
        gridTemplateColumns="100px calc(100% - 100px)"
        transition="all 0.2s ease"
        bg={bg}
        height={["60px", height, height]}
        shadow={shadow}
        position="fixed"
        width="100vw"
        zIndex="633300"
        top={0}
        px={[5, 5, 5]}
        pr={[3, 3, 5]}
      >
        <Box>
          <VerticalAlign>
            <Grid templateColumns="250px calc(100% - 250px)">
              <Box>
                  <Heading
                    color={color}
                    fontWeight="600"
                    fontSize={[18, 20, 23]}
                    letterSpacing={2}
                    cursor="pointer"
                  >
                    SAMULLMAN.DEV
                  </Heading>
              </Box>

              <Box pl={[2]} >
                <VerticalAlign>
                  <Box color="white">
                    <Scrollspy
                      items={[
                        "home",
                        "about",
                        "current",
                        "past",
                        "favorites",
                        "contact",
                      ]}
                      offset={-70}
                      style={{ display: "flex" }}
                      currentClassName="is-current"
                    >
                      {links.map((el) => {
                        return (
                          <Box
                            mr={6}
                            onClick={() => {
                              jump(el.jump, { offset: -60 });
                            }}
                          >
                            <span style={{ cursor: "pointer" }}>
                              {el.title}
                            </span>

                            <Box height="1px"></Box>
                          </Box>
                        );
                      })}
                    </Scrollspy>
                  </Box>
                </VerticalAlign>
              </Box>
            </Grid>
          </VerticalAlign>
        </Box>

        <Box>
          <VerticalAlign>
            {/* <Sidebar placement="right" /> */}

          </VerticalAlign>
        </Box>
      </Grid>
    </Styles>
  );
}

export default Header;
