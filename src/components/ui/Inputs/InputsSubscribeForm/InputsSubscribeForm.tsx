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
    <>
      <label
        className="w-full text-gray-500 font-bold text-left sm:flex items-center cursor-pointer"
        htmlFor={id}
      >
        <p className="w-20">{label}</p>

        <div className="w-full sm:w-96">
          <input
            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400"
            id={id}
            type="text"
            placeholder={placeholder}
            aria-label={label}
            {...register}
          />
          {error && (
            <div className="absolute text-red-500 text-xs font-normal">
              {error}
            </div>
          )}
        </div>
      </label>
    </>
  );
};

export default InputsSubscribeForm;
