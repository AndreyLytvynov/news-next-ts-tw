import { UseFormRegisterReturn } from "react-hook-form";

export interface InputFieldProps {
  label: string;
  id: string;
  placeholder: string;
  error?: string;
  register: UseFormRegisterReturn;
}
