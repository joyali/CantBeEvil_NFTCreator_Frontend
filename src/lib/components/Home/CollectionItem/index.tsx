import { Box, Flex, Image, Text, Link } from "@chakra-ui/react";

import type { CBELicenseVersion } from "@/lib/types/CBELicenseType";

import ImageLicenseTag from "./ImageLicenseTag";

export interface CollectionItemProps {
  name?: string;
  logo?: string;
  desc?: string;
  license?: CBELicenseVersion;
  address: string;
  chainId: string;
}

const CollectionItem = (props: CollectionItemProps) => {
  const { name, logo, desc, license, address, chainId } = props;

  const url =
    chainId === "1"
      ? `https://etherscan.io/address/${address}`
      : `https://goerli.etherscan.io//address/${address}`;
  return (
    <Flex
      flexDirection="column"
      width="266px"
      borderRadius="23px"
      boxShadow="0px 4px 49px rgba(0, 7, 72, 0.12)"
      mb="40px"
      p="10px"
      bg="linear-gradient(
        155.14deg,
        rgba(255, 255, 255, 0) -2.13%,
        rgba(255, 255, 255, 0.15) 136.58%
      );"
    >
      <Link href={url} target="_blank">
        <Box position="relative">
          {license && <ImageLicenseTag license={license} />}
          <Image
            src={logo}
            width="256px"
            height="256px"
            objectFit="cover"
            borderRadius={20}
          />
        </Box>
        <Text fontSize="medium" marginTop="20px" color="#333">
          {name}
        </Text>
        <Text fontSize="xs" marginTop="12px" noOfLines={2} color="#333">
          {desc}
        </Text>
      </Link>
    </Flex>
  );
};

export default CollectionItem;
