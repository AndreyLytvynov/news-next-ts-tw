import { FC } from "react";

import FormSubscribe from "@/components/elements/FormSubscribe/FormSubscribe";
import Container from "@/components/elements/Container/Container";

const SubscribeFormSection: FC = () => {
  return (
    <section className="pt-24">
      <Container>
        <h2 className="font-bold text-4xl sm:text-4xl text-center mb-3">
          Subscribe to News
        </h2>
        <p className="text-xl text-center mb-4">
          to receive notifications about the latest news
        </p>
        <FormSubscribe />
      </Container>
    </section>
  );
};

export default SubscribeFormSection;
