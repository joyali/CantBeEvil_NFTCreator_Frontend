import type { LayoutProps, StackProps } from "@chakra-ui/react";
import {
  Center,
  Icon,
  Image,
  VStack,
  Text,
  Spacer,
  IconButton,
  Heading,
  Box,
} from "@chakra-ui/react";
import type { MouseEventHandler } from "react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { AiFillFileAdd } from "react-icons/ai";
import { RiDeleteBin6Line } from "react-icons/ri";

type FormDropZoneImageParamsType = {
  onFileAccepted: (file: File | null) => void;
  hText: string;
  descText: string;
  height: LayoutProps["height"];
  width: LayoutProps["width"];
} & StackProps;

export function FormDropZoneImage({
  hText,
  descText,
  onFileAccepted,
  height,
  width,
  ...rest
}: FormDropZoneImageParamsType) {
  const [localImgSrc, setLocalImgSrc] = useState<string | null>(null);
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      onFileAccepted(acceptedFiles[0]);
      setLocalImgSrc(URL.createObjectURL(acceptedFiles[0]));
    },
    [onFileAccepted]
  );
  const onDeleteFile = useCallback<MouseEventHandler<HTMLButtonElement>>(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      onFileAccepted(null);
      setLocalImgSrc(null);
    },
    [onFileAccepted]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    maxFiles: 1,
    multiple: false,
  });

  return (
    <VStack w="full" align="flex-start" {...rest}>
      <Box mb="4">
        <Heading
          fontWeight={500}
          fontFamily="Inter"
          color="#333"
          fontSize="md"
          lineHeight="tall"
        >
          {hText}
        </Heading>
        <Text
          color="#777E91"
          fontFamily="Poppins"
          fontSize={12}
          lineHeight="tall"
        >
          {descText}
        </Text>
      </Box>

      <Center
        cursor="pointer"
        width={width}
        h={height}
        // eslint-disable-next-line no-nested-ternary
        bg={localImgSrc ? "transparent" : isDragActive ? "#9f9f9f" : "#F2F2F2"}
        _hover={{ bg: localImgSrc ? "transparent" : "#E6E8EC" }}
        transition="background-color 0.2s ease"
        borderRadius="16px"
        position="relative"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        {localImgSrc ? (
          <>
            <Image src={localImgSrc} width={width} h={height} fit="contain" />

            <Center
              width={width}
              h={height}
              position="absolute"
              sx={{
                "&:hover  button": {
                  visibility: "visible",
                },
              }}
            >
              <IconButton
                visibility="hidden"
                bg="#353945"
                borderRadius="50%"
                onClick={onDeleteFile}
                aria-label="delete"
                icon={<RiDeleteBin6Line color="#EF466F" />}
              />
            </Center>
          </>
        ) : (
          <VStack dir="column" width={width} h={height}>
            <Spacer />
            <Icon color="#777E91" as={AiFillFileAdd} mr={2} />
            <Text color="#777E91">PNG, JPG, Ratio 1:1</Text>
            <Spacer />
          </VStack>
        )}
      </Center>
    </VStack>
  );
}
