import { FC } from "react";
import { CheckBoxFieldProps } from "@/components/ui/checkboxes/CheckBoxSubscribeForm/interfaces";

const CheckBoxSubscribeForm: FC<CheckBoxFieldProps> = ({
  id,
  error,
  register,
}) => {
  return (
    <label
      className="w-full sm:flex items-center mb-6 cursor-pointer"
      htmlFor={id}
    >
      <div className="sm:w-20"></div>
      <div className="sm:w-96 flex text-gray-500 font-bold relative">
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          {...register}
          id={id}
        />
        <span className="text-sm">Send me your newsletter!</span>
        {error && (
          <div className="absolute text-red-500 text-xs font-normal top-5">
            {error}
          </div>
        )}
      </div>
    </label>
  );
};

export default CheckBoxSubscribeForm;
