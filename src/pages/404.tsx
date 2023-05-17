import { useEffect } from "react";
import { useRouter } from "next/router";
import Container from "@/components/Container/Container";

const Error = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      router.replace("/");
    }, 3000);
  }, [router]);

  return (
    <Container>
      <section className="pt-24 text-center ">
        <h1 className="text-5xl sm:text-7xl">Oops!</h1>

        <p className="text-3xl mt-10">
          Something went wrong. Page not found. You will be redirected to the
          home page in 3 seconds.
        </p>
      </section>
    </Container>
  );
};

export default Error;
