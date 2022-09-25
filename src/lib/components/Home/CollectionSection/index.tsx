import { Button, Flex, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import type { CollectionItemProps } from "../CollectionItem";
import CollectionItem from "../CollectionItem";

interface CollectionSectionProps {
  initData: CollectionItemProps[];
  isEnd: boolean;
  anchorId: string;
  setAnchorId: (anchorId: string) => void;
  setIsEnd: (isEnd: boolean) => void;
}
const CollectionSection = (props: CollectionSectionProps) => {
  const { initData, isEnd, anchorId, setIsEnd, setAnchorId } = props;
  const [data, setData] = useState<CollectionItemProps[]>([]);

  const [isLoading, setIsLoading] = useState(false);
  const onShowMoreClick = () => {
    setIsLoading(true);
    fetch(
      `https://api.longxia.asia/collection/?size=8&anchorId=${anchorId}&reverse=true`,
      { method: "GET" }
    )
      .then((res) => res.json())
      .then((res) => {
        setData(data.concat(res.collections));
        setIsEnd(res.isEnd);
        setAnchorId(res.anchorId);
        setIsLoading(false);
      });
  };
  useEffect(() => {
    setData(initData);
  }, [initData]);
  return (
    <Flex
      w="full"
      justifyContent="center"
      bg="linear-gradient(64.84deg, rgba(255, 72, 139, 0.1) 0%, rgba(66, 255, 210, 0.1) 98.38%);"
    >
      <Flex
        w="full"
        flexDirection="column"
        alignItems="center"
        padding="70px 0  0 0"
      >
        <Text
          id="COLLECTIONS"
          fontSize="40px"
          fontWeight={600}
          color="#333"
          mb={27}
        >
          Collections
        </Text>
        <Flex
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
          flexWrap="wrap"
          maxW={1220}
          w="full"
          mx="auto"
        >
          {data.map((item: CollectionItemProps) => {
            return <CollectionItem key={item.name} {...item} />;
          })}
        </Flex>
        {!isEnd ? (
          <Button
            my="40px"
            w="205px"
            bg="transparent"
            border="1px solid #000000"
            borderRadius="12px"
            h="55px"
            fontSize={20}
            fontWeight={600}
            isLoading={isLoading}
            onClick={onShowMoreClick}
          >
            Show More
          </Button>
        ) : (
          <Button
            my="40px"
            h="55px"
            border="1px solid #000000"
            borderRadius="12px"
            fontWeight="600"
            isDisabled
          >
            There is no more collections
          </Button>
        )}
      </Flex>
    </Flex>
  );
};

export default CollectionSection;
