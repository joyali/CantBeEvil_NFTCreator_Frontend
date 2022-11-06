import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Divider,
  // Flex,
  Heading,
  Text,
  Stack,
  // useDisclosure,
  Button,
} from "@chakra-ui/react";
import { NextSeo } from "next-seo";
import { useEffect } from "react";

import RewardItem from "./RewardItem";
// import { Text } from "@chakra-ui/react"

// import { CBEImage } from "@/lib/components/Home/CBEImage";
// import { CollectionForm } from "@/lib/components/Home/CollectionForm";
// import type { CollectionItemProps } from "@/lib/components/Home/CollectionItem";
// import CollectionSection from "@/lib/components/Home/CollectionSection";
// import NFTCheck from "@/lib/components/Home/NFTCheck";
// import { CBELicenseVersion } from "@/lib/types/CBELicenseType";
// // import Carousel from "lib/components/Home/Carousel";
// import Banner from "lib/components/Home/Banner";

const Home = () => {
  // const { isOpen, onOpen, onClose } = useDisclosure();
  // const [license, setLicense] = useState(CBELicenseVersion.CBE_CC0);
  // const [isEnd, setIsEnd] = useState(false);
  // const [anchorId, setAnchorId] = useState("0");
  // const [collectionData, setCollectionData] = useState<CollectionItemProps[]>(
  //   []
  // );
  // const [isShowMine, setIsShowMine] = useState(false);
  const init = async () => {
    // fetch(
    //   `https://api.longxia.asia/collection/?size=8&anchorId=0&reverse=true`,
    //   { method: "GET" }
    // )
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setIsEnd(data.isEnd);
    //     setCollectionData(data.collections);
    //     setAnchorId(data.anchorId);
    //   });
  };
  useEffect(() => {
    init();
  }, []);
  return (
    <div className="bg-black text-white py-4">
      <NextSeo title="Start a project" />
      <Container maxW="container.lg" className="flex-1 flex-row">
        <Heading size="lg" fontSize="40px" marginBottom="2">
          Rewards
        </Heading>
        <Divider bg="#353945" width="100%" marginBottom="44px" />
        <Text
          fontSize="32px"
          marginBottom="3"
          as="div"
          className="flex justify-between"
        >
          <span>Reward Tiers</span>
          <Button
            width="48px"
            height="48px"
            borderRadius="50%"
            background="#D9D9D9"
          >
            <AddIcon color="#000" />
          </Button>
        </Text>
        <Stack spacing={8} direction="row">
          <Box w="256px">
            <Box className="project-reward-left justify-start">
              <Button
                leftIcon={<AddIcon />}
                w="100%"
                background="none"
                sx={{ justifyContent: "flex-start" }}
                _hover={{ background: "#000" }}
                variant="solid"
              >
                Items
              </Button>
              <Divider bg="#E6E8EC" width="100%" />
              <Button
                leftIcon={<AddIcon />}
                w="100%"
                background="none"
                sx={{ justifyContent: "flex-start" }}
                _hover={{ background: "#000" }}
                variant="solid"
              >
                Reward tiers
              </Button>
            </Box>
            <Text mt="16px" color="#B1B5C4">
              Most creators offer 3-10 reward tiers, which can be physical items
              or special experiences. Make sure to set reasonable backer
              expectations.
            </Text>
          </Box>
          <Box className="flex-1">
            <RewardItem />
          </Box>
        </Stack>
        <Divider bg="#353945" width="100%" margin="44px 0" />
        <Box className="flex justify-end mb-12">
          <Button
            height="48px"
            borderRadius="24px"
            background="none"
            border="2px"
            borderColor="#777e91"
            className="back-btn"
            _hover={{ background: "none" }}
          >
            Back
          </Button>
          <Button
            className="continue-btn ml-8"
            height="48px"
            borderRadius="24px"
            background="#00CC9C"
            border="2px"
            borderColor="#00CC9C"
            _hover={{ background: "#00CC9C" }}
          >
            Continue
          </Button>
        </Box>
      </Container>
    </div>
  );
};

export default Home;
