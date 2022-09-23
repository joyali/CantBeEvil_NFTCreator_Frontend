import { Link, Stack, Text, VStack } from "@chakra-ui/react";
import { useState } from "react";
import { useContractReads } from "wagmi";

import { ar2http } from "../../utils/CBEutils";

const contractInterface = [
  {
    name: "getLicenseURI",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        internalType: "string",
        name: "uri",
        type: "string",
      },
    ],
  },
  {
    name: "getLicenseName",
    type: "function",
    stateMutability: "view",
    inputs: [],
    outputs: [
      {
        internalType: "string",
        name: "name",
        type: "string",
      },
    ],
  },
];

interface ResultProps {
  contractAddress: string;
  setIsLoading: (isLoading: boolean) => void;
  setIsSuccess: (isSuccess: boolean) => void;
  setIsError: (isError: boolean) => void;
  setErrMessage: (errMessage: string) => void;
}
export const Result = (props: ResultProps) => {
  const [name, setName] = useState("");
  const [uri, setUri] = useState("");
  const {
    contractAddress,
    setIsLoading,
    setIsSuccess,
    setIsError,
    setErrMessage,
  } = props;
  const { data } = useContractReads({
    contracts: [
      {
        addressOrName: contractAddress,
        contractInterface,
        functionName: "getLicenseName",
      },
      {
        addressOrName: contractAddress,
        contractInterface,
        functionName: "getLicenseURI",
      },
    ],
    onSuccess: () => {
      setIsLoading(false);
      setIsSuccess(true);
      if (data) {
        setName(data[0].toString());
        setUri(data[1].toString());
      }
    },
    onError: (e) => {
      setIsLoading(false);
      setIsSuccess(false);
      setIsError(true);
      setErrMessage(e.message);
    },
    allowFailure: false,
  });
  return name ? (
    <VStack direction="column" w="full">
      <Stack
        direction="row"
        pt={10}
        pb={5}
        maxW="480px"
        w="100%"
        justifyContent="space-between"
      >
        <Text>Result: </Text>
        <Text>{name}</Text>
      </Stack>
      <Stack
        direction="row"
        pb={5}
        maxW="480px"
        w="100%"
        justifyContent="space-between"
      >
        <Text>License Detail: </Text>
        <Text>
          <Link href={ar2http(uri)} target="_blank">
            Check PDF documentation
          </Link>{" "}
        </Text>
      </Stack>
    </VStack>
  ) : null;
};
