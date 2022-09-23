import type { ComponentStyleConfig } from "@chakra-ui/react";

export const Progress: ComponentStyleConfig = {
  variants: {
    greenProgress: {
      label: {},
      filledTrack: {
        bgColor: "#00E0AC",
        borderRadius: "8px",
      },
      track: {
        bgColor: "#FCFCFD",
        borderRadius: "8px",
      },
    },
  },
};
