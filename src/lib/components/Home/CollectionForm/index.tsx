import {
  Box,
  Button,
  Divider,
  Flex,
  Collapse,
  ScaleFade,
  Text,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import type { ChangeEventHandler } from "react";
import { useState } from "react";

import { FormDropZoneImage } from "@/lib/components/FormDropZoneImage";
import { FormTextArea } from "@/lib/components/FormTextArea";
import { FormTextInput } from "@/lib/components/FormTextInput";
import { SectionHeading } from "@/lib/components/SectionHeading";
import type { CBELicenseVersion } from "@/lib/types/CBELicenseType";

interface FormProps {
  license: CBELicenseVersion;
  isOpenProps: boolean;
  onCloseProps: () => void;
  init: () => void;
}
export const CollectionForm = (props: FormProps) => {
  const { isOpenProps, onCloseProps, license, init } = props;
  const { isOpen, onOpen } = useDisclosure();
  const onCollectionLogoAccepted = (f: File | null) => {
    // eslint-disable-next-line no-console
    console.log(f);
  };
  // const { isOpen, onToggle } = useDisclosure();
  const [collectionName, setCollectionName] = useState("");
  const onChangeCollectionName: ChangeEventHandler<HTMLInputElement> = (e) => {
    setCollectionName(e.target.value);
  };
  const [collectionSymbol, setCollectionSymbol] = useState("");
  const onChangeCollectionSymbol: ChangeEventHandler<HTMLInputElement> = (
    e
  ) => {
    setCollectionSymbol(e.target.value);
  };
  const [shortDesc, setShortDesc] = useState("");
  const onShortDescChange: ChangeEventHandler<HTMLTextAreaElement> = (e) =>
    setShortDesc(e.target.value);
  const onSubmit = () => {
    // console.log("Name is", collectionName);
    // console.log("Symbol is", collectionSymbol);
    // console.log("Short Desc is", shortDesc);
    // console.log("License is", license);
    // console.log("Logo props TODO");
    onOpen();
    init();
  };
  return (
    <Flex
      direction="column"
      bg="#fff"
      color="#333"
      mx="auto"
      pt={isOpenProps ? 24 : 0}
      maxW="1120px"
      w="100%"
    >
      <Collapse in={isOpenProps}>
        <Flex w="100%" justifyContent="space-between" alignItems="center">
          <SectionHeading mb={1} color="#333">
            Create My NFT Collection
          </SectionHeading>
          <Box
            w="88px"
            py="5px"
            border="1px solid #42FFD2;"
            borderRadius="32px"
            textAlign="center"
            onClick={onCloseProps}
          >
            <Flex
              direction="row"
              alignItems="center"
              justifyContent="space-evenly"
            >
              {" "}
              <span>Hide</span>{" "}
              <svg
                width="16"
                height="10"
                viewBox="0 0 16 10"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                display="inline-block"
              >
                <path
                  d="M14.4495 8.26721L8.18228 2.00003L1.9151 8.26721"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </Flex>
          </Box>
        </Flex>
        <Box h={10} />
        <Flex
          direction="row"
          mx="auto"
          w="100%"
          alignItems="flex-end"
          flexWrap="wrap"
          justifyContent="space-between"
        >
          <Box w="256px" mr={55}>
            <FormDropZoneImage
              height="256px"
              width="100%"
              hText="Upload Project Cover Photo"
              descText="Drag or choose your file to upload"
              onFileAccepted={onCollectionLogoAccepted}
              mb={8}
            />
          </Box>
          <Flex direction="column" w="100%" maxW="800px">
            <Flex direction="row" w="100%">
              <FormTextInput
                labelText="COLLECTION NAME"
                value={collectionName}
                onInputChange={onChangeCollectionName}
                placeholder={`e. g. "character nft ape"`}
                w="100%"
                mb={8}
                mr={5}
              />
              <FormTextInput
                labelText="COLLECTION SYMBOL"
                value={collectionSymbol}
                onInputChange={onChangeCollectionSymbol}
                placeholder={`e. g. " MTK"`}
                w="100%"
                mb={8}
              />
            </Flex>
            <FormTextArea
              value={shortDesc}
              onTextAreaChange={onShortDescChange}
              placeholder="e. g. “this is a short description about your project this is a short description about your project this is a short description about your project this is a short description about your project this is a short description about your project this is a short description about your project this is a short description about your project this is a short description about your project...”"
              labelText="COLLECTION DESCRIPTION"
              mb={8}
            />
          </Flex>
        </Flex>

        <Divider borderColor="#353945" />
        <Stack
          direction="row"
          align="center"
          flexWrap="wrap"
          width="full"
          my="40px"
          spacing={12}
        >
          <Button
            w="fit-content"
            variant="greenBgWhiteText"
            bg="#42FFD2"
            fontWeight="700"
            fontSize="md"
            color="#333"
            p="16px 24px"
            onClick={onSubmit}
            isLoading={isOpen}
          >
            Submit with {license}
          </Button>
          <ScaleFade in={isOpen}>
            <Stack direction="row">
              <svg
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22.3241 10.1591H20.6753C20.3167 10.1591 19.9757 10.3313 19.7647 10.6266L14.2382 18.2907L11.7351 14.8173C11.5241 14.5255 11.1866 14.3497 10.8245 14.3497H9.17568C8.94716 14.3497 8.81357 14.6098 8.94716 14.7962L13.3276 20.8712C13.4311 21.0156 13.5675 21.1333 13.7256 21.2145C13.8836 21.2957 14.0587 21.338 14.2364 21.338C14.4141 21.338 14.5892 21.2957 14.7473 21.2145C14.9053 21.1333 15.0417 21.0156 15.1452 20.8712L22.5491 10.6055C22.6862 10.4192 22.5526 10.1591 22.3241 10.1591Z"
                  fill="#00D015"
                />
                <path
                  d="M15.75 0C7.05234 0 0 7.05234 0 15.75C0 24.4477 7.05234 31.5 15.75 31.5C24.4477 31.5 31.5 24.4477 31.5 15.75C31.5 7.05234 24.4477 0 15.75 0ZM15.75 28.8281C8.52891 28.8281 2.67188 22.9711 2.67188 15.75C2.67188 8.52891 8.52891 2.67188 15.75 2.67188C22.9711 2.67188 28.8281 8.52891 28.8281 15.75C28.8281 22.9711 22.9711 28.8281 15.75 28.8281Z"
                  fill="#00D015"
                />
              </svg>
              <Text fontSize={20} fontWeight={700} ml={5}>
                You created it! Check out your project below.
              </Text>
            </Stack>
          </ScaleFade>
        </Stack>
      </Collapse>
    </Flex>
  );
};
