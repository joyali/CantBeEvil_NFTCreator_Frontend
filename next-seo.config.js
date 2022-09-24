/** @type {import('next-seo').DefaultSeoProps} */
const defaultSEOConfig = {
  title: "ContentFi",
  titleTemplate: "%s | ContentFi",
  defaultTitle: "ContentFi",
  description: "Applying Your NFT to the A16Z “Can’t Be Evil” Licenses.",
  canonical: "https://nextarter-chakra.sznm.dev",
  openGraph: {
    url: "https://nextarter-chakra.sznm.dev",
    title: "ContentFi",
    description: "Applying Your NFT to the A16Z “Can’t Be Evil” Licenses.",
    images: [
      {
        url: "https://og-image.sznm.dev/**nextarter-chakra**.sznm.dev.png?theme=dark&md=1&fontSize=125px&images=https%3A%2F%2Fsznm.dev%2Favataaars.svg&widths=250",
        alt: "nextarter-chakra.sznm.dev og-image",
      },
    ],
    site_name: "nextarter-chakra",
  },
  twitter: {
    handle: "@0xContentFi",
    cardType: "summary_large_image",
  },
};

export default defaultSEOConfig;
