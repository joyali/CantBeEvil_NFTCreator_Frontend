// import type { DeepPartial, Theme } from "@chakra-ui/react";
import type { ComponentStyleConfig } from "@chakra-ui/theme";

const BORDER_GREY2SOLID = "2px solid #353945";

export const Button: ComponentStyleConfig = {
  // baseStyle: {
  //   borderRadius: "full",
  // },
  variants: {
    roundedWithPadding: {
      borderRadius: "50%",
      padding: "2px",
      backgroundColor: "white",
      backgroundClip: `content-box, padding-box`,
    },
    roundedGreyOutline: {
      borderRadius: "50%",
      border: BORDER_GREY2SOLID,
      backgroundColor: "transparent",
    },

    greyRoundedPrimary: {
      border: BORDER_GREY2SOLID,
      borderRadius: "90px",
      color: "#333",
      fontWeight: "700",
      fontSize: "sm",
      backgroundColor: "#42FFD2",
    },
    greyRoundedWarn: {
      border: "2px solid #777E91",
      borderRadius: "90px",
      color: "red",
      fontWeight: "700",
      fontSize: "sm",
      backgroundColor: "#42FFD2",
    },
    greyLightRounded: {
      border: BORDER_GREY2SOLID,
      borderRadius: "90px",
      color: "#333",
      fontWeight: "700",
      fontSize: "sm",
      pl: "2px",
      pr: 3,
    },
    greenBgWhiteText: {
      background: "#00CC9C",
      borderRadius: "90px",
      color: "#FCFCFD",
    },
    transBgWhiteTextGreyOutline: {
      background: "transparent",
      borderRadius: "90px",
      color: "#FCFCFD",
      border: "2px solid #777E91",

      _hover: { borderColor: "#E6E8EC" },
    },
  },
};
