import {
  Box,
  Button,
  Collapse,
  Text,
  useDisclosure,
  VStack,
  Image,
} from "@chakra-ui/react";

export const CBEImage = () => {
  const { isOpen, onToggle } = useDisclosure();
  return (
    <>
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
          to the a16z <span className="text-fill1">Can’t Be Evil</span>{" "}
          Licenses.
        </Text>
      </Box>
      <VStack my={10}>
        <Collapse in={isOpen}>
          <Image src="/home/license.png" />
        </Collapse>
        {isOpen ? (
          <Button
            w="205px"
            bg="transparent"
            border="1px solid #000000"
            borderRadius="12px"
            h="55px"
            fontSize={20}
            fontWeight={600}
            onClick={onToggle}
          >
            Hide
          </Button>
        ) : (
          <Button
            h="55px"
            border="1px solid #000000"
            borderRadius="12px"
            fontWeight="600"
            onClick={onToggle}
            bg="transparent"
          >
            Click To Know More About The License
          </Button>
        )}
      </VStack>
    </>
  );
};
