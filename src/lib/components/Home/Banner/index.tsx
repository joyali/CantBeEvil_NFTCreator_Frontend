import { Flex, Image, Text, Box } from "@chakra-ui/react";

import type { CBELicenseVersion } from "@/lib/types/CBELicenseType";

import { ToggleChooseLicense } from "./ToggleChooseLicense/ToggleChooseLicense";

interface FormProps {
  setLicense: (license: CBELicenseVersion) => void;
  onOpen: () => void;
}
const Banner = (props: FormProps) => {
  const { setLicense, onOpen } = props;
  return (
    <Box
      w="full"
      pb={12}
      pt={{ base: 6, md: 30 }}
      background="linear-gradient(99.25deg, rgba(255, 72, 139, 0.1) 7.61%, rgba(66, 255, 210, 0.1) 89.97%), linear-gradient(180deg, #FFFFFF 0%, rgba(255, 255, 255, 0) 100%);"
    >
      <Flex
        mx="auto"
        maxW="80rem"
        direction={{ base: "column", md: "row" }}
        justifyContent="space-between"
        display="flex"
      >
        <Flex
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          padding="auto 0"
          maxW={{ base: "100%", md: "700px" }}
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            maxW="700px"
            px={5}
          >
            <Text
              fontWeight={700}
              fontSize={32}
              my={22}
              pt={{ base: 6, md: 30 }}
              letterSpacing="0.025rem"
              color="#59656F"
            >
              Gain NFT ownership
            </Text>
            <Text
              color="#333333"
              fontSize="48px"
              lineHeight="58px"
              fontWeight={700}
              textTransform="uppercase"
              maxW={600}
            >
              Choose Your <span style={{ color: "#FF488B" }}>License</span> Then
              Create your first <span className="text-fill1">NFT</span> in
              minutes
            </Text>
            <Text color="#4f4f4f" fontSize={20} marginTop="30px" maxW={480}>
              Transparently codify the rights of NFT creators, buyers, and
              sellers
            </Text>
            <Text fontSize={20} mt={66} fontWeight={600}>
              Created By
            </Text>
            <Flex
              flexDirection="row"
              marginTop="10px"
              alignItems="center"
              justifyContent="space-between"
              maxW={260}
              flexWrap="wrap"
              mb={10}
            >
              {/* <Image src="/a16z.png" width="110px" /> */}
              <Image src="/logo.png" width="110px" />
            </Flex>
          </Flex>
        </Flex>
        <Flex w={380} alignItems="center">
          <Box
            w={380}
            mx={5}
            bg="#fff"
            mt={67}
            px="32px"
            py="20px"
            boxShadow="0px 4px 49px rgba(0, 0, 0, 0.12);"
            borderRadius="20px"
          >
            <ToggleChooseLicense setLicense={setLicense} onOpen={onOpen} />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Banner;
