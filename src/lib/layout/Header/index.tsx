import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Stack,
  Collapse,
  useColorModeValue,
  useDisclosure,
  AspectRatio,
  Image,
  Divider,
  Center,
} from "@chakra-ui/react";

import { ConnectBtn } from "./ConnectBtn";
import { DesktopNav } from "./DesktopNav";
import { MobileNav } from "./MobileNav";
import type { NavItem } from "./types";

const navItems: Array<NavItem> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Explore Collections",
    href: "#COLLECTIONS",
  },
  {
    label: "About Us",
    href: "#FOOTER",
  },
  {
    label: "What is Can’t Be Evil",
    href: "https://a16zcrypto.com/introducing-nft-licenses/",
    target: "_blank",
  },
];

export function Header() {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Flex
        bg="#fff"
        color={useColorModeValue("gray.600", "white")}
        width="100%"
        minH="81px"
        py={{ base: 5 }}
        px={{ base: 5, md: 40 }}
        borderBottom={1}
        borderStyle="solid"
        borderColor="#777E91"
        align="center"
      >
        <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
            }
            variant="ghost"
            aria-label="Toggle Navigation"
          />
        </Flex>

        {/* desktop */}
        <Flex flex={{ base: 1 }} justify={{ base: "center", md: "start" }}>
          <AspectRatio
            sx={{
              "&>img": {
                objectFit: "contain",
              },
            }}
            width="100%"
            maxW="132px"
            ratio={133 / 20}
            mr={8}
          >
            <Image
              // width="full"
              src="/logo.png"
              alt="naruto"
              fit="contain"
            />
          </AspectRatio>

          <Center height="10" pr="8" display={{ base: "none", lg: "flex" }}>
            <Divider
              orientation="vertical"
              sx={{
                width: "2px",
                borderColor: "#777E91",
              }}
            />
          </Center>

          <Flex display={{ base: "none", md: "flex" }}>
            <DesktopNav navItems={navItems} />
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify="flex-end"
          direction="row"
          spacing={6}
        >
          <ConnectBtn />
        </Stack>
      </Flex>

      {/* mobile  */}
      <Collapse in={isOpen} animateOpacity>
        <MobileNav navItems={navItems} />
      </Collapse>
    </>
  );
}
