import { Flex, Text, Box, useDisclosure } from "@chakra-ui/react";
import { useState, useEffect } from "react";

import { CollectionForm } from "@/lib/components/Home/CollectionForm";
import type { CollectionItemProps } from "@/lib/components/Home/CollectionItem";
import CollectionSection from "@/lib/components/Home/CollectionSection";
import NFTCheck from "@/lib/components/Home/NFTCheck";
import { CBELicenseVersion } from "@/lib/types/CBELicenseType";
// import Carousel from "lib/components/Home/Carousel";
import Banner from "lib/components/Home/Banner";

const Home = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [license, setLicense] = useState(CBELicenseVersion.CBE_CC0);
  const [isLoading, setIsLoading] = useState(false);
  const [collectionData, setCollectionData] = useState<CollectionItemProps[]>(
    []
  );
  const init = async () => {
    setIsLoading(true);
    fetch("/api/hello")
      .then((res) => res.json())
      .then((data) => {
        setCollectionData(data);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <Flex
      background="#fff"
      direction="column"
      alignItems="center"
      justifyContent="center"
      minHeight="70vh"
    >
      <Box py={5} px={{ base: 5, md: 40 }} w="100%">
        <Text className="text-fill1" fontSize={24} fontWeight={700}>
          NFT = Non-Fungible Token
        </Text>
      </Box>
      <Box w="100%" px={{ base: 5, md: 40 }}>
        <Text maxW="990px" fontSize="64px" fontWeight={700}>
          Applying Your{" "}
          <span
            className="text-fill2"
            style={{ textDecorationLine: "underline" }}
          >
            NFT
          </span>{" "}
          to the A16Z “<span className="text-fill1">Can’t Be Evil</span>”
          Licenses.
        </Text>
      </Box>

      {/* <Carousel images={images} /> */}
      <Banner setLicense={setLicense} onOpen={onOpen} />
      <CollectionForm
        init={init}
        license={license}
        isOpenProps={isOpen}
        onCloseProps={onClose}
      />
      <CollectionSection initData={collectionData} isLoading={isLoading} />
      <NFTCheck />
    </Flex>
  );
};

export default Home;
