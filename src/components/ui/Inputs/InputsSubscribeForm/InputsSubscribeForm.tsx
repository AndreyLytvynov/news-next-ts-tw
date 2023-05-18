import { FC } from "react";
import { InputFieldProps } from "./interfaces";

const InputsSubscribeForm: FC<InputFieldProps> = ({
  label,
  id,
  placeholder,
  error,
  register,
}) => {
  return (
    <div className="md:flex md:items-center mb-8">
      <label
        className="block text-gray-500 font-bold text-left mb-1 md:mb-0 md:w-2/12"
        htmlFor={id}
      >
        {label}
      </label>

      <div className="md:w-11/12">
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400"
          id={id}
          type="text"
          placeholder={placeholder}
          aria-label={label}
          {...register}
        />
        {error && <div className="absolute text-red-500 text-xs">{error}</div>}
      </div>
    </div>
  );
};

export default InputsSubscribeForm;
