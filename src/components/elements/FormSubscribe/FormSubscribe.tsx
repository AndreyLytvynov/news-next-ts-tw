import { FC, useCallback, useEffect } from "react";
import { useRouter } from "next/router";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/helpers/validateFormSchema";

import InputsSubscribeForm from "@/components/ui/Inputs/InputsSubscribeForm/InputsSubscribeForm";
import CheckBoxSubscribeForm from "@/components/ui/checkboxes/CheckBoxSubscribeForm/CheckBoxSubscribeForm";
import SubmitFormBtn from "@/components/ui/buttons/SubmitFormBtn";

import ToastMessage from "@/components/ui/Toast/Toast";
import { ToastMessageType } from "@/components/ui/Toast/interfaces";

import { IFormValues } from "@/components/elements/FormSubscribe/types";

const FormSubscribe: FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<IFormValues>({
    resolver: yupResolver(schema),
  });
  const router = useRouter();

  const notify = useCallback((type: ToastMessageType, message: string) => {
    ToastMessage({ type, message });
  }, []);

  useEffect(() => {
    if (errors.name || errors.email || errors.phone) {
      notify("error", "Please fill in all fields.");
    }
    if (errors.newsletter) {
      notify("error", "Please confirm the email submission.");
    }
  }, [errors, notify]);

  const onSubmit: SubmitHandler<IFormValues> = async (data) => {
    console.log(data);
    notify("success", "Success! Please check your email.");
    reset();
    setTimeout(() => {
      router.replace("/");
    }, 2000);
  };

  return (
    <form
      className="flex flex-col items-center"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
    >
      <div className="shadow p-4 max-w-full w-120">
        <InputsSubscribeForm
          label="Name"
          id="inline-name"
          placeholder="Djack Wick"
          register={register("name")}
          error={errors?.name?.message}
        />
        <InputsSubscribeForm
          label="Phone"
          id="inline-phone"
          placeholder="+380990000000"
          register={register("phone")}
          error={errors?.phone?.message}
        />
        <InputsSubscribeForm
          label="Email"
          id="inline-email"
          placeholder="hello@example.com"
          register={register("email")}
          error={errors?.email?.message}
        />
        <CheckBoxSubscribeForm
          id="inline-email"
          register={register("newsletter")}
          error={errors?.newsletter?.message}
        />

        <div className="md:flex md:justify-center">
          <SubmitFormBtn />
        </div>
      </div>
    </form>
  );
};

export default FormSubscribe;