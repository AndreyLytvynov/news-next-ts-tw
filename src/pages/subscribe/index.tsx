import { FC } from "react";

import Container from "@/components/Container/Container";
import SubscribeFormSection from "@/components/Sections/SubscribeFormSection";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SubscribePage: FC = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default SubscribePage;
