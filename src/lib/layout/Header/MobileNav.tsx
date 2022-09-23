import { Stack, useColorModeValue } from "@chakra-ui/react";

import { MobileNavItem } from "./MobileNavItem";
import type { NavItem } from "./types";

export const MobileNav = ({ navItems }: { navItems: Array<NavItem> }) => {
  return (
    <Stack
      bg={useColorModeValue("white", "gray.800")}
      p={4}
      display={{ md: "none" }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};
