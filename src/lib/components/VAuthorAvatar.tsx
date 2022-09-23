import { Center, Flex, Text, VStack } from "@chakra-ui/react";

import { CustomAvatar } from "@/lib/components/WalletAvatar/WalletAvatar";

import { shortenAddress } from "./utils/shortenAddress";

type VAuthorAvatarType = {
  address: string;
};

export const VAuthorAvatar = ({ address }: VAuthorAvatarType) => {
  return (
    <Flex align="center" justify="flex-start" fontFamily="Poppins">
      <Center w="40px" h="60px">
        <CustomAvatar size={32} address={address} />
      </Center>
      <VStack>
        <Text fontSize="xs" fontWeight={600} color="#FCFCFD">
          Creator
        </Text>
        <Text fontSize="xs" color="#777E91">
          {shortenAddress(address)}
        </Text>
      </VStack>
    </Flex>
  );
};
