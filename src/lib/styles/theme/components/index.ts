import { Button } from "./button";
import { Input } from "./input";
import { NumberInput } from "./numberInput";
import { Progress } from "./progress";

export const components = {
  Button,
  Input,
  Progress,
  Heading: {
    variants: {
      sectionHeading: {
        textAlign: "start",
        color: "#FCFCFD",
        fontFamily: "Inter",
        fontSize: "2rem",
      },
    },
  },
  NumberInput,
};
