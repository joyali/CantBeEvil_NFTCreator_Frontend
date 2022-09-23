import type { ComponentStyleConfig } from "@chakra-ui/react";

export const NumberInput: ComponentStyleConfig = {
  variants: {
    leapstart: {
      field: {
        color: "#FCFCFD",
        borderWidth: "2px",
        borderStyle: "solid",
        bg: "transparent",
        boxShadow: "none",
        borderColor: "#353945",
        // bg: mode("gray.100", "whiteAlpha.50")(props),
        _hover: {
          // bg: mode("gray.200", "whiteAlpha.100")(props),
          borderColor: "#E6E8EC",
        },
        _focus: {
          borderColor: "#00CC9C",
        },
        _invalid: {
          borderColor: "#EF466F",
        },
        _focusVisible: {
          boxShadow: "none",
          borderColor: "#00CC9C",
          outline: "none",
        },
      },
    },
  },
};
