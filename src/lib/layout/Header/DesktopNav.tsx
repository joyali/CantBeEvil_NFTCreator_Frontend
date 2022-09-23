import { Box, Stack, Link, Popover, PopoverTrigger } from "@chakra-ui/react";
import { useState } from "react";

import type { NavItem } from "./types";

export const DesktopNav = ({ navItems }: { navItems: Array<NavItem> }) => {
  const linkColor = "#777E91";
  const linkHoverColor = "#00A37D";
  const linkSelectedColor = "#FCFCFD";
  const [selectedItem, setselectedItem] = useState<string | null>(null);

  return (
    <Stack direction="row" align="center" spacing={4}>
      {navItems.map((navItem) => (
        <Box key={navItem.label}>
          <Popover trigger="click" placement="bottom-start">
            <PopoverTrigger>
              <Link
                p={2}
                href={navItem.href ?? "#"}
                fontSize="sm"
                fontWeight={700}
                onClick={() => {
                  setselectedItem(navItem.label);
                }}
                color={
                  (selectedItem === navItem.label &&
                    !!navItem.children &&
                    linkSelectedColor) ||
                  linkColor
                }
                _hover={{
                  textDecoration: "none",
                  color: linkHoverColor,
                }}
                _active={{
                  color: linkSelectedColor,
                }}
                target={navItem.target}
              >
                {navItem.label}
              </Link>
            </PopoverTrigger>
          </Popover>
        </Box>
      ))}
    </Stack>
  );
};
