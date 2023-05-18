import { FC } from "react";
import { CheckBoxFieldProps } from "@/components/ui/checkboxes/CheckBoxSubscribeForm/interfaces";

const CheckBoxSubscribeForm: FC<CheckBoxFieldProps> = ({
  id,
  error,
  register,
}) => {
  return (
    <div className="md:flex mb-6">
      <div className="md:w-2/12"></div>
      <label className="md:w-11/12 block text-gray-500 font-bold" htmlFor={id}>
        <input
          className="mr-2 leading-tight"
          type="checkbox"
          {...register}
          id={id}
        />
        <span className="text-sm">Send me your newsletter!</span>
        {error && (
          <div className="absolute text-red-500 text-xs font-normal">
            {error}
          </div>
        )}
      </label>
    </div>
  );
};

export default CheckBoxSubscribeForm;
