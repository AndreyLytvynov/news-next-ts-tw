import { FC } from "react";

import Container from "@/components/elements/Container/Container";
import SubscribeFormSection from "@/components/sections/SubscribeFormSection/SubscribeFormSection";

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
      />
    </>
  );
};

export default SubscribePage;
