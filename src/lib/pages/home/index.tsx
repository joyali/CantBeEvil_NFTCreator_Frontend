import { Flex, useDisclosure } from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useState, useEffect } from "react";

import { CBEImage } from "@/lib/components/Home/CBEImage";
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
  const [isEnd, setIsEnd] = useState(false);
  const [anchorId, setAnchorId] = useState("0");
  const [collectionData, setCollectionData] = useState<CollectionItemProps[]>(
    []
  );
  const [isShowMine, setIsShowMine] = useState(false);
  const init = async () => {
    fetch(
      `https://api.longxia.asia/collection/?size=8&anchorId=0&reverse=true`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((data) => {
        setIsEnd(data.isEnd);
        setCollectionData(data.collections);
        setAnchorId(data.anchorId);
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
      <NextSeo title="Home" />
      <CBEImage />
      {/* <Carousel images={images} /> */}
      <Banner setLicense={setLicense} onOpen={onOpen} />
      <CollectionForm
        license={license}
        isOpenProps={isOpen}
        onCloseProps={onClose}
        setIsShowMine={setIsShowMine}
      />
      <CollectionSection
        initData={collectionData}
        isEnd={isEnd}
        setIsEnd={setIsEnd}
        anchorId={anchorId}
        setAnchorId={setAnchorId}
        setIsShowMine={setIsShowMine}
        isShowMine={isShowMine}
      />
      <NFTCheck />
    </Flex>
  );
};

export default Home;
