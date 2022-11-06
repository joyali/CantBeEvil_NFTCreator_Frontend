import { SmallAddIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Image,
  Text,
  Link,
  Button,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import { NFTStorage } from "nft.storage";
import { useState } from "react";

import { AddTokenModal } from "../CollectionForm/AddTokenModal";
import type { CBELicenseVersion } from "@/lib/types/CBELicenseType";

import ImageLicenseTag from "./ImageLicenseTag";

export interface CollectionItemProps {
  name?: string;
  logo?: string;
  desc?: string;
  license?: CBELicenseVersion;
  address: string;
  chainId: string;
  isMine?: boolean;
}

const CollectionItem = (props: CollectionItemProps) => {
  const { name, logo, desc, license, address, chainId, isMine } = props;

  const { onOpen, onClose, isOpen } = useDisclosure();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const token = process.env.NEXT_PUBLIC_NFT_STORAGE_TOKEN;

  const [args, setArgs] = useState<string | string[]>("");
  const url =
    chainId === "1"
      ? `https://etherscan.io/address/${address}`
      : `https://goerli.etherscan.io//address/${address}`;

  const mintNFT = async (
    _name: string,
    image: Blob,
    description: string,
    recipient: string,
    setValue: (value: number) => void,
    setText: (text: string) => void
  ) => {
    const storage = new NFTStorage({ token: token || "" });
    setValue(30);
    setText("Uploading image");
    const cidFile = await storage.storeBlob(image || new Blob());
    const statusFile = await storage.status(cidFile);
    const imageLink = `https://${statusFile.cid}.ipfs.nftstorage.link`;
    const metadata = JSON.stringify({
      name: _name,
      description,
      image: imageLink,
    });
    setValue(50);
    setText("Uploading metadata");
    const cid = await storage.storeBlob(
      new Blob([metadata], {
        type: "text/plain",
      })
    );

    const status = await storage.status(cid);
    const metadataURI = `https://${status.cid}.ipfs.nftstorage.link`;

    setValue(80);
    setText("minting NFT");
    setArgs([recipient, metadataURI]);
    // setIsLoading(false);
  };
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
      {/* validateDOMNesting(...): <a> cannot appear as a descendant of <a>: ImageLicenseTag */}
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
        <Box fontSize="medium" marginTop="20px" textAlign="right">
          <Button size="sm" colorScheme="whatsapp">
            {chainId === "1" ? "Mainnet" : "Testnet"}
          </Button>
          {isMine && (
            <IconButton
              ml="10px"
              size="sm"
              icon={<SmallAddIcon />}
              aria-label="add token"
              onClick={(e) => {
                e.preventDefault();
                onOpen();
              }}
            />
          )}
        </Box>
        <Text fontSize="medium" color="#333">
          {name}
        </Text>
        <Text fontSize="xs" marginTop="12px" noOfLines={2} color="#333">
          {desc}
        </Text>
      </Link>
      <AddTokenModal
        isOpen={isOpen}
        onClose={onClose}
        onCreate={mintNFT}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
        args={args}
        address={address}
        setArgs={setArgs}
      />
    </Flex>
  );
};

export default CollectionItem;
