import { Dispatch, SetStateAction } from "react";

export interface FormInputProps {
  name: string;
  label: string;
  handleChange: (value: string) => void;
  isError: boolean;
  type?: string;
  placeholder: string;
  value: string | undefined;
}
