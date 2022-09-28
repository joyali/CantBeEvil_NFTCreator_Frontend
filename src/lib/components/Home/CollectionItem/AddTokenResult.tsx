import { Text } from "@chakra-ui/react";
import { usePrepareContractWrite, useContractWrite } from "wagmi";

import Contract from "../CollectionForm/contract/contrat.json";

interface Props {
  address: string;
  args: string[] | string;
  clearStatus: () => void;
}
export const AddTokenResult = (props: Props) => {
  const { address, args, clearStatus } = props;
  const { config } = usePrepareContractWrite({
    addressOrName: address,
    contractInterface: Contract.abi,
    functionName: "mint",
    args,
  });

  const { write, status } = useContractWrite({
    ...config,
  });
  if (write && status === "idle") {
    write();
  }
  if (status === "success") {
    clearStatus();
  }
  return <Text>{status}</Text>;
};
