import type { FormControlProps, TextareaProps } from "@chakra-ui/react";
import {
  FormErrorMessage,
  FormHelperText,
  FormControl,
  FormLabel,
  Textarea,
} from "@chakra-ui/react";
import type { ChangeEventHandler } from "react";

type FormTextAreaType = {
  value: string;
  onTextAreaChange: ChangeEventHandler<HTMLTextAreaElement> | undefined;
  //   setError: (errMsg: string | null) => void;
  errorMessage?: string | null;
  helperText?: null | string;
  labelText: string;
  placeholder?: string;
  textareaProps?: TextareaProps;
} & FormControlProps;

const FormTextArea = ({
  value,
  onTextAreaChange,
  errorMessage = null,
  helperText = null,
  labelText,
  placeholder,
  textareaProps,
  ...formControlRestProps
}: FormTextAreaType) => {
  const isError = errorMessage !== null && errorMessage !== "";
  return (
    <FormControl
      //   isInvalid={isError}
      {...formControlRestProps}
    >
      <FormLabel fontFamily="Inter" fontWeight={700} color="#B1B5C4">
        {labelText}
      </FormLabel>
      <Textarea
        // border="2px solid #353945"
        color="#333333"
        borderWidth="2px"
        borderStyle="solid"
        borderRadius="12px"
        value={value}
        onChange={onTextAreaChange}
        placeholder={placeholder}
        size="sm"
        _focusVisible={{ boxShadow: "none" }}
        _hover={{ borderColor: isError ? "#EF466F" : "#E6E8EC" }}
        _focus={{
          borderColor: isError ? "#EF466F" : "#00CC9C",
        }}
        borderColor={isError ? "#EF466F" : "#353945"}
        sx={{
          "&::placeholder": {
            color: "#777E91",
          },
        }}
        maxH="350px"
        h="150px"
        {...textareaProps}
      />
      {!!helperText && !isError && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
      {isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};
export { FormTextArea };
