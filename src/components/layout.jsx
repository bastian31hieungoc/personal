import React from "react";
import Footer from "./footer";
import Header from "./header";
import MenuButton from "./menuButton";

import {
    Box,
} from "@chakra-ui/react";

function Layout ({ children }) {
    return (
        <Box>
            <MenuButton />
            {/* <Header  /> */}
            
            <main>
                { children }
            </main>


            {/* <Footer  /> */}

        </Box>
    )
}

export default Layout;