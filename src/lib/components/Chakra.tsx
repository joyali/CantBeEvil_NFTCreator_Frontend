import "@fontsource/poppins/400.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/500.css";

import { ChakraProvider } from "@chakra-ui/react";

import customTheme from "lib/styles/theme";

interface ChakraProps {
  children: React.ReactNode;
}

export const Chakra = ({ children }: ChakraProps) => {
  return <ChakraProvider theme={customTheme}>{children}</ChakraProvider>;
};
