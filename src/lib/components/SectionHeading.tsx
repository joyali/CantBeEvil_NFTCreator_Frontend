import type { HeadingProps } from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";

export const SectionHeading = ({ children, ...rest }: HeadingProps) => {
  return (
    <Heading w="full" variant="sectionHeading" {...rest}>
      {children}
    </Heading>
  );
};
