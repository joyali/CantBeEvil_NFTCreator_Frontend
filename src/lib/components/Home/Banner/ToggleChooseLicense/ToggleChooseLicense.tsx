/* eslint-disable no-bitwise */
import { Box, Button, Flex, Link, Switch, Text } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { useState } from "react";

import license2PDFMap from "@/lib/components/utils/CBEutils";
import { CBELicenseVersion } from "@/lib/types/CBELicenseType";

interface FormProps {
  setLicense: (license: CBELicenseVersion) => void;
  onOpen: () => void;
}
const val2License = (val: number) => {
  switch (val) {
    case 8:
      return CBELicenseVersion.CBE_CC0;
    case 0:
      return CBELicenseVersion.CBE_PR;
    case 1:
      return CBELicenseVersion.CBE_PR_HS;
    case 4:
      return CBELicenseVersion.CBE_ECR;
    case 6:
      return CBELicenseVersion.CBE_NECR;
    case 7:
      return CBELicenseVersion.CBE_NECR_HS;
    default:
      return CBELicenseVersion.CBE_CC0;
  }
};
export const ToggleChooseLicense = (props: FormProps) => {
  // CC0: 8, commercial: 4, exploitation: 2, HStoggle: 1;
  // 8: CC0; 0: CBE-PR; 1: CBE-PR-HS; 4:CBE-ECR; 6: CBE-NECR-HS; 7: CBE-NECR;
  const router = useRouter();
  const { setLicense, onOpen } = props;
  const [value, setValue] = useState(8);
  const onToggleChange = (num: number) => {
    // eslint-disable-next-line no-underscore-dangle, @typescript-eslint/naming-convention
    let _value = value;
    if (num === 8) _value = 0;
    if (num === -4 && (value & 2) !== 0) _value -= 2;
    if (num === 4 && (value & 1) !== 0) _value -= 1;
    if (num === -2 && (value & 1) !== 0) _value -= 1;
    setValue(_value + num);
  };
  return (
    <Flex direction="column" mx="auto" width="100%">
      <Text lineHeight="40px" fontWeight="700" fontSize={20} mb="20px">
        License
      </Text>
      <Flex
        direction="row"
        alignItems="top"
        justifyContent="space-between"
        mb={10}
      >
        <Text fontSize={14} color="#4f4f4f">
          Waive all your copyrights
        </Text>
        <Switch
          isChecked={(value & 8) !== 0}
          colorScheme="whatsapp"
          onChange={(e) => {
            if (e.target.checked) {
              onToggleChange(8);
            } else onToggleChange(-8);
          }}
        />
      </Flex>
      <Flex
        direction="row"
        alignItems="top"
        justifyContent="space-between"
        mb={10}
      >
        <Text fontSize={14} color="#4f4f4f">
          Holders can use the NFT for commercial purpose, or modify and adapt
          the NFT for secondary creation
        </Text>
        <Switch
          isChecked={(value & 4) !== 0}
          isDisabled={(value & 8) !== 0}
          colorScheme="whatsapp"
          onChange={(e) => {
            if (e.target.checked) {
              onToggleChange(4);
            } else onToggleChange(-4);
          }}
        />
      </Flex>
      <Flex
        direction="row"
        alignItems="top"
        justifyContent="space-between"
        mb={10}
      >
        <Text fontSize={14} color="#4f4f4f">
          Retain creator exploitation rights
        </Text>
        <Switch
          isChecked={(value & 2) !== 0}
          colorScheme="whatsapp"
          isDisabled={(value & 8) !== 0 || (value & 6) === 0}
          onChange={(e) => {
            if (e.target.checked) {
              onToggleChange(2);
            } else onToggleChange(-2);
          }}
        />
      </Flex>
      <Flex
        direction="row"
        alignItems="top"
        justifyContent="space-between"
        mb={10}
      >
        <Text fontSize={14} color="#4f4f4f">
          Terminate hate speech
        </Text>
        <Switch
          colorScheme="whatsapp"
          isChecked={(value & 1) !== 0}
          isDisabled={(value & 8) !== 0 || value === 4}
          onChange={(e) => {
            if (e.target.checked) {
              onToggleChange(1);
            } else onToggleChange(-1);
          }}
        />
      </Flex>
      <Box
        p="9px 16px 10px"
        w="100%"
        minH={70}
        border="1px solid #353945"
        borderRadius={8}
      >
        <Text fontSize={14} fontWeight={500} color="#777E91">
          CBE License
        </Text>
        <Box>
          <Flex direction="row" alignItems="center">
            <Text color="#00CC9C" display="flex" fontSize={16} mr={1}>
              {val2License(value)}
            </Text>
            <Link
              href={license2PDFMap[val2License(value)]}
              target="_blank"
              rel="noreferrer"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                style={{ display: "flex" }}
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                  fill="#777E91"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.1333 9.50073C10.8568 9.97879 10.2451 10.1421 9.76702 9.86561C9.28896 9.58906 9.1256 8.97733 9.40214 8.49927C9.91934 7.60518 10.8885 7 12.0002 7C13.657 7 15.0002 8.34315 15.0002 10C15.0002 11.0977 14.3268 11.994 13.5002 12.5C12.8362 12.9065 13.2502 14 11.9976 14C11.4453 14 10.9976 13.5523 10.9976 13C10.9976 12.9649 10.9994 12.9302 11.0029 12.896C11.0306 12.3672 11.2665 11.9368 11.5232 11.6239C11.7944 11.2935 12.1509 11.0237 12.4235 10.8616C13.9402 9.96 12.0904 8.1154 11.1333 9.50073ZM11.9976 15C11.4453 15 10.9976 15.4477 10.9976 16C10.9976 16.5523 11.4453 17 11.9976 17C12.5498 17 12.9976 16.5523 12.9976 16C12.9976 15.4477 12.5498 15 11.9976 15Z"
                  fill="#777E91"
                />
              </svg>
            </Link>
          </Flex>
        </Box>
      </Box>
      <Button
        bg="#42FFD2"
        borderRadius={90}
        m="20px 0 10px"
        h="48px"
        onClick={() => {
          setLicense(val2License(value));
          router.push("#FORM");
          onOpen();
        }}
      >
        Confirm & Create
      </Button>
      <Button
        onClick={() => {
          setValue(8);
        }}
        bg="#fff"
        border="1px solid #353945"
        h="48px"
        borderRadius={90}
      >
        Reset
      </Button>
    </Flex>
  );
};
