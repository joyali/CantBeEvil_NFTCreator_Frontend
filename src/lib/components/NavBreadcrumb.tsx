import { ChevronRightIcon } from "@chakra-ui/icons";
import {
  HStack,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";

type BreadcrumbDataItemType = {
  label: string;
  href: string;
};

export const NavBreadcrumb = ({
  breadcrumbData,
}: {
  breadcrumbData: BreadcrumbDataItemType[];
}) => {
  return (
    <HStack w="full" h="90px" align="center" borderBottom="#777E91 solid 1px">
      <Breadcrumb
        spacing={8}
        color="#777E91"
        px={{ base: 40 }}
        separator={<ChevronRightIcon color="gray.500" />}
      >
        {breadcrumbData.map((item, index, arr) => {
          return (
            <BreadcrumbItem
              key={item.label}
              isCurrentPage={index === arr.length - 1}
              sx={{
                color: index === arr.length - 1 ? "#FCFCFD" : "#777E91",
              }}
            >
              <BreadcrumbLink href={item.href}>{item.label}</BreadcrumbLink>
            </BreadcrumbItem>
          );
        })}
      </Breadcrumb>
    </HStack>
  );
};
