import { Box, Image } from "@chakra-ui/react";
import type { AvatarComponent } from "@rainbow-me/rainbowkit";
import type { ComponentProps } from "react";

import { emojiAvatarForAddress } from "./emojiAvatarForAddress";

export const CustomAvatar: AvatarComponent = ({
  address,
  ensImage,
  size,
}: ComponentProps<AvatarComponent>) => {
  const { color: backgroundColor, emoji } = emojiAvatarForAddress(address);
  return ensImage ? (
    <Image
      src={ensImage}
      width={size}
      height={size}
      style={{ borderRadius: 999 }}
    />
  ) : (
    <Box
      alignItems="center"
      display="flex"
      justifyContent="center"
      overflow="hidden"
      style={{
        backgroundColor,
        height: size,
        width: size,
        borderRadius: 999,
      }}
    >
      {emoji}
    </Box>
  );
};
