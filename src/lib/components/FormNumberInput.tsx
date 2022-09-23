import type {
  FormControlProps,
  NumberInputFieldProps,
  NumberInputProps,
} from "@chakra-ui/react";
import {
  NumberInput,
  NumberInputField,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  InputGroup,
} from "@chakra-ui/react";
import type { ReactNode } from "react";

type FormTextInputType = {
  value: string;
  onInputChange:
    | ((valueAsString: string, valueAsNumber: number) => void)
    | undefined;
  //   setError: (errMsg: string | null) => void;
  placeholder?: string;
  errorMessage?: string | null;
  helperText?: null | string;
  labelText: string;
  inputLeftElem?: ReactNode;
  inputRightElem?: ReactNode;
  numberInputRestProps?: NumberInputProps;
  numberInputFieldRestProps?: NumberInputFieldProps;
} & FormControlProps;

export const FormNumberInput = ({
  value,
  onInputChange,
  //   setError,
  placeholder = "",
  errorMessage = null,
  helperText = null,
  labelText,
  inputLeftElem = null,
  inputRightElem = null,
  numberInputRestProps,
  numberInputFieldRestProps,

  ...formControlRestProps
}: FormTextInputType) => {
  const isError = errorMessage !== null && errorMessage !== "";
  return (
    <FormControl isInvalid={isError} {...formControlRestProps}>
      <FormLabel fontFamily="Inter" fontWeight={700} color="#B1B5C4">
        {labelText}
      </FormLabel>

      <InputGroup w="full">
        <NumberInput
          //   pr="10px"
          w="full"
          variant="leapstart"
          sx={{
            boxShadow: "none",
            border: "none",
          }}
          value={value}
          onChange={onInputChange}
          {...numberInputRestProps}
        >
          {inputLeftElem}
          <NumberInputField
            placeholder={placeholder}
            // color="#FCFCFD"
            // borderWidth="2px"
            // borderStyle="solid"
            // _focusVisible={{ boxShadow: "none" }}
            // _hover={{ borderColor: isError ? "#EF466F" : "#E6E8EC" }}
            // _focus={{
            //   borderColor: isError ? "#EF466F" : "#00CC9C",
            // }}
            // borderColor={isError ? "#EF466F" : "#353945"}
            // borderRadius="12px"
            {...numberInputFieldRestProps}
            sx={{
              "&::placeholder": {
                color: "#777E91",
              },
            }}
          />
        </NumberInput>
        {inputRightElem}
      </InputGroup>
      {!!helperText && !isError && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
      {isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};
