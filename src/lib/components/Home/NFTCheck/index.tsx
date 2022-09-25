import {
  Flex,
  InputGroup,
  Input,
  InputRightElement,
  Text,
  Button,
  Box,
} from "@chakra-ui/react";
import type { ChangeEventHandler, MouseEventHandler } from "react";
import { useState } from "react";
import { useAccount } from "wagmi";

import { Result } from "./result";

const NFTCheck = () => {
  const [contractAddress, setContractAddress] = useState("");
  const onChangeContractAddress: ChangeEventHandler<HTMLInputElement> = (e) => {
    setContractAddress(e.target.value);
  };
  const [isLoading, setIsLoading] = useState(false);
  const [errMessage, setErrMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);
  const [isError, setIsError] = useState(false);
  const { status } = useAccount();
  const onCheckClick: MouseEventHandler<HTMLButtonElement> = () => {
    // isValid(contractAddress);
    // 0xF4Dd946D1406e215a87029db56C69e1Bcf3e1773
    if (!contractAddress) {
      setErrMessage("Please enter a contract address");
      setIsError(true);
      return;
    }
    if (status !== "connected") {
      setErrMessage("Please connect wallet and choose network first");
      setIsError(true);
      return;
    }

    setIsLoading(true);
    setIsError(false);
  };

  return (
    <Flex direction="column" alignItems="center" mb="127px" w="full">
      <Text my="60px" fontWeight={700} fontSize={40}>
        Check your NFT License
      </Text>
      <InputGroup maxW="640px" zIndex={2}>
        <Input
          placeholder="Enter Contract Address"
          variant="greyOutlineRounded"
          pr="100px"
          value={contractAddress}
          onChange={onChangeContractAddress}
          py="25px"
          outlineColor={isError ? "red.300" : "#000"}
          bg={isError ? "red.50" : "#fff"}
        />
        <InputRightElement py="25px" w="100px">
          <Button
            h="1.75rem"
            py="20px"
            w="80px"
            bg="#42FFD2"
            borderRadius="100px"
            onClick={onCheckClick}
            isLoading={isLoading}
            disabled={isSuccess}
          >
            Check
          </Button>
        </InputRightElement>
      </InputGroup>
      <Box position="relative" w="100%">
        <Box
          bg="linear-gradient(180deg, rgba(66, 255, 210, 0.25) 0%, rgba(80, 252, 190, 0) 100%);"
          h="127px"
          w="1100px"
          position="absolute"
          top="-20px"
          left="50%"
          ml="-550px"
          zIndex={1}
          borderRadius="20px"
        />
      </Box>
      {isError && (
        <Text color="red.500" mt={1} fontSize={12} maxW={480}>
          {errMessage}
        </Text>
      )}

      {(isLoading || isSuccess) && !isError && (
        <Result
          contractAddress={contractAddress}
          setIsLoading={setIsLoading}
          setIsSuccess={setIsSuccess}
          setIsError={setIsError}
          setErrMessage={setErrMessage}
        />
      )}
    </Flex>
  );
};

export default NFTCheck;
