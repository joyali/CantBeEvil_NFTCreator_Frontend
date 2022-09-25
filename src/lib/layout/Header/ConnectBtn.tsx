import { Box, Button } from "@chakra-ui/react";
import { ConnectButton } from "@rainbow-me/rainbowkit";

import { CustomAvatar } from "@/lib/components/WalletAvatar/WalletAvatar";

export const ConnectBtn = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {/* <Button
              variant="greyLightRounded"
              onClick={openChainModal}
              type="button"
            >
              {chain?.hasIcon && (
                <div
                  style={{
                    background: chain.iconBackground,
                    width: 12,
                    height: 12,
                    borderRadius: 999,
                    overflow: "hidden",
                    marginRight: 4,
                  }}
                >
                  {chain.iconUrl && (
                    <img
                      alt={chain.name ?? "Chain icon"}
                      src={chain.iconUrl}
                      style={{ width: 12, height: 12 }}
                    />
                  )}
                </div>
              )}
              {chain?.name}
            </Button> */}
            {(() => {
              if (!connected) {
                return (
                  <Button
                    variant="greyRoundedPrimary"
                    type="button"
                    onClick={openConnectModal}
                  >
                    Connect Wallet
                  </Button>
                );
              }

              if (chain.unsupported) {
                return (
                  <Button
                    variant="greyRoundedWarn"
                    onClick={openChainModal}
                    type="button"
                  >
                    Wrong network
                  </Button>
                );
              }

              return (
                <div style={{ display: "flex" }}>
                  <Button
                    variant="greyLightRounded"
                    onClick={openAccountModal}
                    type="button"
                    leftIcon={
                      <Box>
                        <CustomAvatar size={32} address={account.address} />
                      </Box>
                    }
                  >
                    {account.displayName}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};
