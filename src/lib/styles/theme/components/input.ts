// import type { DeepPartial, Theme } from "@chakra-ui/react";
import type { ComponentStyleConfig } from "@chakra-ui/theme";

export const Input: ComponentStyleConfig = {
  // baseStyle: {
  //   borderRadius: "full",
  // },
  variants: {
    greyOutlineRounded: {
      field: {
        outline: "2px solid #353945",
        borderRadius: "90px",
        backgroundColor: "transparent",
      },
    },
  },
};
