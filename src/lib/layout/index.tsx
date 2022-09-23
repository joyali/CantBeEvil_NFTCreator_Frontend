import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

import { Footer } from "./Footer/index";
import { Header } from "./Header/index";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth="100%">
      <Header />
      <Box bg="#fff" as="main">
        {children}
      </Box>
      <Footer />
    </Box>
  );
};

export default Layout;
