import { CBELicenseVersion } from "@/lib/types/CBELicenseType";

const { CBE_CC0, CBE_ECR, CBE_NECR, CBE_NECR_HS, CBE_PR, CBE_PR_HS } =
  CBELicenseVersion;
const license2PDFMap = {
  [CBE_CC0]:
    "https://arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/0",
  [CBE_ECR]:
    "https://arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/1",
  [CBE_NECR]:
    "https://arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/2",
  [CBE_NECR_HS]:
    "https://arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/3",
  [CBE_PR]: "https://arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/4",
  [CBE_PR_HS]:
    "https://arweave.net/_D9kN1WrNWbCq55BSAGRbTB4bS3v8QAPTYmBThSbX3A/5",
};
export default license2PDFMap;
export const ar2http = (uri: string) => {
  if (!uri) return "#";
  return uri.split(":")[1].replace("//", "https://arweave.net/");
};
export const licenceVersion = (version: CBELicenseVersion) => {
  switch (version) {
    case CBE_CC0:
      return 0;
    case CBE_ECR:
      return 1;
    case CBE_NECR:
      return 2;
    case CBE_NECR_HS:
      return 3;
    case CBE_PR:
      return 4;
    case CBE_PR_HS:
      return 5;
    default:
      return "unknown";
  }
};
