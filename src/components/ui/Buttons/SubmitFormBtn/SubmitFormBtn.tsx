import { FC } from "react";
import { Oval } from "react-loader-spinner";
import { AiOutlineSend } from "react-icons/ai";

import { SubmitFormBtnProps } from "@/components/ui/Buttons/SubmitFormBtn/types";

const SubmitFormBtn: FC<SubmitFormBtnProps> = ({ disabled }) => {
  return (
    <button
      className="shadow bg-blue-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded hover:duration-300 h-10 flex items-center justify-between gap-2"
      type="submit"
      disabled={disabled}
    >
      <span>sign up</span>
      {disabled ? (
        <Oval
          height={22}
          width={22}
          color="#ffffff"
          wrapperStyle={{}}
          wrapperClass=""
          ariaLabel="oval-loading"
          secondaryColor="#ffffff"
          strokeWidth={3}
          strokeWidthSecondary={5}
        />
      ) : (
        <div className="p-1">
          <AiOutlineSend className="w-5 h-5" />
        </div>
      )}
    </button>
  );
};

export default SubmitFormBtn;
