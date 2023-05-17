import { FC } from "react";
import GoBackBtn from "@/components/Buttons/GoBackBtn";
import FormSubscribe from "@/components/FormSubscribe/FormSubscribe";

const SubscribeFormSection: FC = () => {
  return (
    <section className="pt-24">
      <div className=" flex justify-end">{/* <GoBackBtn /> */}</div>
      <h2 className="font-bold text-4xl sm:text-4xl text-center mb-3">
        Subscribe to News
      </h2>
      <p className="text-xl text-center mb-4">
        to receive notifications about the latest news
      </p>
      <FormSubscribe />
    </section>
  );
};

export default SubscribeFormSection;
