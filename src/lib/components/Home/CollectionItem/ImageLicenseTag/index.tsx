import {
  Box,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
} from "@chakra-ui/react";

import license2PDFMap from "@/lib/components/utils/CBEutils";
import type { CBELicenseVersion } from "@/lib/types/CBELicenseType";

interface TagProps {
  license: CBELicenseVersion;
}
const ImageLicenseTag = (props: TagProps) => {
  const { license } = props;
  return (
    <Popover placement="top-start" trigger="hover">
      <PopoverTrigger>
        <Box
          position="absolute"
          bg="#42FFD2"
          top="10px"
          right="10px"
          fontSize={14}
          p="2px 10px"
          fontWeight={700}
          borderRadius={32}
          border="2px solid #fff"
        >
          <a href={license2PDFMap[license]} target="_blank" rel="noreferrer">
            {license}
          </a>
        </Box>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverArrow />
        <PopoverBody>{`click this badge to view ${license} PDF documentation`}</PopoverBody>
      </PopoverContent>
    </Popover>
  );
};
export default ImageLicenseTag;
