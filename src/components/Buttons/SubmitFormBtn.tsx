import React, { FC } from "react";

const SubmitFormBtn: FC = () => {
  return (
    <button
      className="shadow bg-blue-400 hover:bg-blue-500 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
      type="submit"
    >
      Sign Up
    </button>
  );
};

export default SubmitFormBtn;
