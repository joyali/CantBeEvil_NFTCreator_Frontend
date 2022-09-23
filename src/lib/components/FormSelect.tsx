import type { FormControlProps } from "@chakra-ui/react";
import {
  FormErrorMessage,
  FormHelperText,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import type {
  ActionMeta,
  ChakraStylesConfig,
  DropdownIndicatorProps,
  GroupBase,
  OptionBase,
  PropsValue,
  SingleValue,
} from "chakra-react-select";
import { Select, chakraComponents } from "chakra-react-select";
import { useId } from "react";
import { CgChevronDownO } from "react-icons/cg";
// import type { GroupBase, OptionProps } from "react-select";

// type FormTextInputType = {
//   value: string;
//   onInputChange: ChangeEventHandler<HTMLInputElement> | undefined;
//   //   setError: (errMsg: string | null) => void;
//   errorMessage?: string | null;
//   helperText?: null | string;
//   labelText: string;
// } & FormControlProps;

interface SelectOptionType extends OptionBase {
  label: string;
  value: string;
}

const components = {
  DropdownIndicator: (
    props: JSX.IntrinsicAttributes &
      DropdownIndicatorProps<
        SelectOptionType,
        false,
        GroupBase<SelectOptionType>
      >
  ) => (
    <chakraComponents.DropdownIndicator {...props}>
      <CgChevronDownO size="1.4em" color="#777E91" />
    </chakraComponents.DropdownIndicator>
  ),
};

const chakraStyles: ChakraStylesConfig<
  SelectOptionType,
  false,
  GroupBase<SelectOptionType>
> = {
  control: (provided) => ({
    ...provided,
    borderColor: "#353945",
    borderWidth: "2px",
    borderRadius: "12px",
  }),
  option: (provided, state) => ({
    ...provided,
    color: "#F4F5F6",

    background: state.isFocused ? "#141416" : "#23262F",
    borderRadius: state.isFocused && "8px",
    _active: {
      bg: "#00CC9C",
    },
  }),
  menuList: (provided) => ({
    ...provided,

    background: "#23262F",
    border: "none",
    borderRadius: "12px",
    px: 2,
  }),
  menu: (provided) => ({
    ...provided,

    // background: "#23262F",
    border: "none",
    borderRadius: "12px",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    pr: 2,
    bg: "transparent",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    visibility: "hidden",
  }),
};
type FormSelectType = {
  value: PropsValue<SelectOptionType> | undefined;
  helperText?: null | string;
  errorMessage?: string | null;
  labelText: string;
  options: SelectOptionType[];
  onSelectChange: (
    newValue: SingleValue<SelectOptionType>,
    actionMeta: ActionMeta<SelectOptionType>
  ) => void;
} & FormControlProps;

const FormSelect = ({
  helperText,
  labelText,
  errorMessage = null,
  onSelectChange,
  value,
  options,
  ...formControlRestProps
}: FormSelectType) => {
  const isError = errorMessage !== null && errorMessage !== "";

  return (
    <FormControl
      isInvalid={isError}
      {...formControlRestProps}
      color="#FCFCFD"
      fontFamily="font-family: 'Poppins'"
    >
      <FormLabel fontFamily="Inter" fontWeight={700} color="#B1B5C4">
        {labelText}
      </FormLabel>
      <Select<SelectOptionType, false, GroupBase<SelectOptionType>>
        components={components}
        instanceId={useId()}
        value={value}
        onChange={onSelectChange}
        chakraStyles={chakraStyles}
        focusBorderColor="#00CC9C"
        errorBorderColor="EF466F"
        options={options}
      />
      {!!helperText && !isError && (
        <FormHelperText>{helperText}</FormHelperText>
      )}
      {isError && <FormErrorMessage>{errorMessage}</FormErrorMessage>}
    </FormControl>
  );
};
export { FormSelect };
export type { SelectOptionType };
