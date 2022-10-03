import {
  Button,
  HStack,
  IconButton,
  Text,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from "@chakra-ui/react";
import { useState } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";

import { FormDropZoneImage } from "../../FormDropZoneImage";
import { FormTextInput } from "../../FormTextInput";
import { SectionHeading } from "../../SectionHeading";
import { AddTokenResult } from "../CollectionItem/AddTokenResult";

export const AddTokenModal = ({
  onClose,
  isOpen,
  onCreate,
  isLoading,
  setIsLoading,
  args,
  address,
  setArgs,
}: {
  onClose: () => void;
  isOpen: boolean;
  isLoading: boolean;
  setIsLoading: (isLoading: boolean) => void;
  onCreate: (
    name: string,
    image: Blob,
    description: string,
    recipient: string,
    setValue: (value: number) => void,
    setText: (text: string) => void
  ) => void;
  args: string | string[];
  address: string;
  setArgs: (args: string | string[]) => void;
}) => {
  const [name, setName] = useState<string>("");
  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const [desc, setDesc] = useState<string>("");
  const onDescChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDesc(e.target.value);
  };
  const [image, setImage] = useState<File | null>(null);
  const onImageChange = (file: File | null) => {
    if (file) setImage(file);
  };
  const [errMessage, setErrMessage] = useState<string>("");

  const [recipient, setRecipient] = useState<string>("");
  const onRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipient(e.target.value);
  };

  const [value, setValue] = useState<number>(0);
  const [text, setText] = useState<string>("");
  const clearStatus = () => {
    setName("");
    setDesc("");
    setRecipient("");
    setArgs("");
    setIsLoading(false);
    setValue(0);
    setText("");
    onClose();
  };
  const isValid = () => {
    if (!name) {
      setErrMessage("Title is required");
      return false;
    }
    if (!image) {
      setErrMessage("Image is required");
      return false;
    }
    if (!desc) {
      setErrMessage("Description is required");
      return false;
    }
    if (!recipient) {
      setErrMessage("Recipient is required");
      return false;
    }
    return true;
  };
  const onCreateClick = () => {
    setIsLoading(true);
    if (!isValid()) {
      setIsLoading(false);
      return;
    }
    setValue(59);
    onCreate(name, image || new Blob(), desc, recipient, setValue, setText);
  };
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      closeOnEsc
      onCloseComplete={clearStatus}
    >
      <ModalOverlay />

      <ModalContent
        maxH="85vh"
        sx={{
          aspectRatio: "448 / 888",
        }}
        w="448px"
        maxW="80vw"
        bg="#fff"
        boxShadow="0px 64px 64px -48px rgba(31, 47, 70, 0.12)"
        borderRadius="20px"
        p={8}
      >
        <HStack>
          <ModalHeader pl={0} flex={1}>
            <SectionHeading color="#000">Mint New Token</SectionHeading>
          </ModalHeader>
          <IconButton
            borderRadius="50%"
            borderWidth="0"
            aria-label="close modal"
            bg="black"
            _hover={{
              bg: "#fff",
              "&  *": {
                color: "black",
              },
            }}
            onClick={onClose}
            icon={<AiOutlineCloseCircle size="2.5rem" color="#FCFCFD" />}
          />
        </HStack>

        <ModalBody>
          <FormDropZoneImage
            height="256px"
            width="256px"
            hText="Upload Project Cover Photo"
            descText="Drag or choose your file to upload"
            onFileAccepted={onImageChange}
            alignSelf="center"
            mb={8}
          />
          <FormTextInput
            labelText="Name"
            value={name}
            onInputChange={onNameChange}
            placeholder="xxx"
            w="100%"
            mb={8}
          />
          <FormTextInput
            labelText="Description"
            value={desc}
            onInputChange={onDescChange}
            placeholder="xxx"
            w="100%"
            mb={8}
          />
          <FormTextInput
            labelText="recipient"
            value={recipient}
            onInputChange={onRecipientChange}
            placeholder="0x1cc..."
            w="100%"
            mb={8}
          />
        </ModalBody>
        {errMessage && (
          <Text color="red.500" width="full" textAlign="center">
            {errMessage}
          </Text>
        )}
        <ModalFooter>
          <Button
            variant="greenBgWhiteText"
            w="100%"
            onClick={onCreateClick}
            isLoading={isLoading}
            loadingText={text}
            color="#333"
            _loading={{ opacity: "1" }}
            _hover={{ bg: "rgba(0, 204, 156, 1)" }}
            bg={
              value === 0
                ? `rgba(0,204,156,1)`
                : `linear-gradient(90deg, rgba(0,204,156,1) 0%, rgba(0,204,156,1) ${value}%, rgba(0,204,156,0.5) ${value}%, rgba(0,204,156,0.5) 100%);`
            }
          >
            Mint
          </Button>
          {args && (
            <AddTokenResult
              clearStatus={clearStatus}
              args={args}
              address={address}
            />
          )}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};
