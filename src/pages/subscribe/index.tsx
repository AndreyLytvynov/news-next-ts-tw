import { FC } from "react";

import SubscribeFormSection from "@/sections/SubscribeFormSection/SubscribeFormSection";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscribePage: FC = () => {
  return (
    <>
      <SubscribeFormSection />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        draggable={false}
        closeOnClick
        pauseOnHover
        className="mb-20"
        limit={3}
      />
    </>
  );
};

export default SubscribePage;
