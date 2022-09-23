import type { FormControlProps, InputProps } from "@chakra-ui/react";
import {
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
} from "@chakra-ui/react";
import type { ChangeEventHandler, ReactNode } from "react";

type FormTextInputType = {
  value: string;
  onInputChange: ChangeEventHandler<HTMLInputElement> | undefined;
  //   setError: (errMsg: string | null) => void;
  placeholder?: string;
  errorMessage?: string | null;
  helperText?: null | string;
  labelText: string;
  inputLeftElem?: ReactNode;
  inputRightElem?: ReactNode;
  inputRestProps?: InputProps;
} & FormControlProps;

export const FormTextInput = ({
  value,
  onInputChange,
  //   setError,
  placeholder = "",
  errorMessage = null,
  helperText = null,
  labelText,
  inputLeftElem = null,
  inputRightElem = null,
  inputRestProps,
  ...formControlRestProps
}: FormTextInputType) => {
  const isError = errorMessage !== null && errorMessage !== "";
  return (
    <FormControl isInvalid={isError} {...formControlRestProps}>
      <FormLabel fontFamily="Inter" fontWeight={700} color="#B1B5C4">
        {labelText}
      </FormLabel>

      <InputGroup w="100%">
        {inputLeftElem}
        <Input
          type="text"
          placeholder={placeholder}
          color="#333333"
          borderWidth="2px"
          borderStyle="solid"
          _focusVisible={{ boxShadow: "none" }}
          _hover={{ borderColor: isError ? "#EF466F" : "#E6E8EC" }}
          _focus={{
            borderColor: isError ? "#EF466F" : "#00CC9C",
          }}
          borderColor={isError ? "#EF466F" : "#353945"}
          borderRadius="12px"
          sx={{
            "&::placeholder": {
              color: "#777E91",
            },
          }}
          value={value}
          onChange={onInputChange}
          // pl={4}
          {...inputRestProps}
        />
        {inputRightElem}
      </InputGroup>
      {!!helperText && !isError && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
      {isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};
