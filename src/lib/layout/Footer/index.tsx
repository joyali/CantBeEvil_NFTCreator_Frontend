import {
  Stack,
  Text,
  VStack,
  Link,
  ListItem,
  UnorderedList,
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
  Divider,
  Image,
} from "@chakra-ui/react";
import { BsArrowRightCircleFill } from "react-icons/bs";

import { IconLink } from "./IconLink";

export type Sublink = {
  label: string;
  href: string;
};

export type FooterLinkItem = {
  category: string;
  sublinks: Sublink[];
};

const footerNavItems: FooterLinkItem[] = [
  {
    category: "Links",
    sublinks: [
      {
        label: "Github",
        href: "https://github.com/contentfi",
      },
      {
        label: "Become Partners",
        href: "mailto:contact@fanmake.xyz",
      },
    ],
  },
  {
    category: "Platform",
    sublinks: [
      {
        label: "FanMake(MVP)",
        href: "http://fanmake.xyz",
      },
      {
        label: "Leapstart(Comming Soon)",
        href: "#",
      },
    ],
  },
];

export const Footer = () => {
  return (
    <VStack width="full" bg="#000">
      <Stack
        minH="288px"
        width="full"
        direction={{ base: "column", xl: "row" }}
        px={{ base: 5, md: 40 }}
        justify="space-between"
        color="#E6E8EC"
        pb={20}
        maxW={1480}
        borderTop="#777E91 solid 1px"
        id="FOOTER"
      >
        <VStack
          minW="390px"
          pt={20}
          alignItems={{ base: "center", xl: "start" }}
        >
          <Image width="245px" src="/logo-bk.png" alt="naruto" fit="contain" />
          <Text maxW={390} fontSize={14} lineHeight={1.5} display="block">
            A community-owned sustainable decntralized P-focused Content
            financial ecosystem:
          </Text>
          <Text
            maxW={390}
            mt={50}
            fontSize={14}
            lineHeight={1.5}
            display="block"
          >
            Monetisation infrastructure for IPs
          </Text>
          <IconLink />
        </VStack>
        <VStack minW={380}>
          <VStack minW="380px" align="start" pt={20}>
            <Text color="#FCFCFD" fontWeight={700} fontSize="16px" mb="11px">
              Get More Updates
            </Text>
            <Text color="#FCFCFD" fontSize="14px" fontWeight={400} pb="10px">
              Join our mailing list to stay in the loop with our latest updates
            </Text>
            <form
              action="https://contentfi.us9.list-manage.com/subscribe/post?u=46db0940971cfe089685277c9&amp;id=da45dcdcc1&amp;f_id=00f20fe1f0"
              method="post"
              id="revue-form"
              name="revue-form"
              target="_blank"
              style={{ width: "100%" }}
            >
              <InputGroup w="100%">
                <Input
                  sx={{
                    flex: 1,
                  }}
                  placeholder="Enter Email"
                  variant="greyOutlineRounded"
                  border="1px solid white"
                  name="EMAIL"
                  id="mce-EMAIL"
                  required
                />
                <InputRightElement>
                  <IconButton
                    variant="roundedWithPadding"
                    aria-label="Enter your email"
                    // bg="white"
                    p="2px"
                    value="Subscribe"
                    name="member[subscribe]"
                    id="member_submit"
                    type="submit"
                    icon={
                      <BsArrowRightCircleFill size="100%" color="#00CC9C" />
                    }
                  />
                </InputRightElement>
              </InputGroup>
            </form>
          </VStack>
          {/* link section */}
          <Stack w="380px" direction="row" justifyContent="space-between">
            {footerNavItems.map((categoryItem) => {
              return (
                <VStack
                  maxW="132px"
                  align="start"
                  key={categoryItem.category}
                  pt="28px"
                >
                  <Text
                    color="#FCFCFD"
                    fontFamily="Poppins"
                    fontWeight={600}
                    fontSize={16}
                    mb="14px"
                  >
                    {categoryItem.category}
                  </Text>
                  <UnorderedList styleType="none" spacing={5}>
                    {categoryItem.sublinks.map((sublink) => {
                      return (
                        <ListItem key={sublink.label}>
                          <Link
                            maxW={64}
                            fontSize="sm"
                            fontWeight={400}
                            lineHeight={1}
                            color="#E0E0E0"
                            display="block"
                            href={sublink.href}
                          >
                            {sublink.label}
                          </Link>
                        </ListItem>
                      );
                    })}
                  </UnorderedList>
                </VStack>
              );
            })}
          </Stack>
        </VStack>
      </Stack>
      <Divider bg="#353945" width="78%" />
      <VStack
        minH="84px"
        width="full"
        bg="#000"
        align="center"
        justify="center"
      >
        <Text fontSize="xs" color="#777E91">
          Copyright © 2022 LeapStart. All rights reserved
        </Text>
      </VStack>
    </VStack>
  );
};
