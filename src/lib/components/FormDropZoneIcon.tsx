import type { LayoutProps, StackProps } from "@chakra-ui/react";
import { Button, HStack, Image, Text, Box } from "@chakra-ui/react";
import type { MouseEventHandler } from "react";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { IoAddCircleOutline } from "react-icons/io5";

type FormDropZoneIconParamsType = {
  onFileAccepted: (file: File | null) => void;
  hintText: string;
  removeText?: string;
  height: LayoutProps["height"];
  width: LayoutProps["width"];
} & StackProps;

export function FormDropZoneIcon({
  hintText,
  removeText = "Remove",
  onFileAccepted,
  height,
  width,
  ...rest
}: FormDropZoneIconParamsType) {
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
    <HStack
      w="full"
      align="center"
      {...rest}
      cursor="pointer"
      width={width}
      minH="6rem"
      h={height}
      bg={isDragActive ? "#00CC9C" : "#23262F"}
      color="#FCFCFD"
      _hover={{
        bg: "#E6E8EC",
        color: "#777E91",
        "& > *::not(#removebtn)": {
          color: isDragActive ? "#00CC9C" : "#777E91",
        },
      }}
      transition="background-color 0.2s ease"
      borderRadius="16px"
      position="relative"
      {...getRootProps()}
      {...rest}
    >
      <input {...getInputProps()} />
      {localImgSrc ? (
        <Box h="3rem" w="3rem" overflow="hidden">
          <Image
            borderRadius="50%"
            h="3rem"
            w="3rem"
            src={localImgSrc}
            fit="cover"
          />
        </Box>
      ) : (
        <Box>
          <IoAddCircleOutline size="3rem" />
        </Box>
      )}
      <Text fontFamily="Inter" fontSize="sm" fontWeight="700">
        {hintText}
      </Text>
      {localImgSrc && (
        <Button
          onClick={onDeleteFile}
          color="#EF466F"
          id="removebtn"
          variant="link"
        >
          {removeText}
        </Button>
      )}
    </HStack>
  );
}
