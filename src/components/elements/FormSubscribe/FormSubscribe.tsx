import { FC, useCallback, useEffect } from "react";
import { useRouter } from "next/router";

import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schema } from "@/helpers/validateFormSchema";

import SubmitFormBtn from "@/components/ui/Buttons/SubmitFormBtn";

import ToastMessage from "@/components/ui/Toast/Toast";

import { IFormValues } from "@/components/elements/FormSubscribe/types";
import { ToastMessageType } from "@/components/ui/Toast/interfaces";

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
        <div className="md:flex md:items-center mb-8">
          <div className="md:w-2/12">
            <label
              className="block text-gray-500 font-bold text-left mb-1 md:mb-0 "
              htmlFor="inline-name"
            >
              Name
            </label>
          </div>
          <div className="md:w-11/12">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400"
              id="inline-name"
              type="text"
              placeholder="Djack Wick"
              aria-label="Name"
              {...register("name")}
            />
            <div className="absolute text-red-500 text-xs">
              {errors?.name?.message}
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-8">
          <div className="md:w-2/12">
            <label
              className="block text-gray-500 font-bold text-left mb-1 md:mb-0 "
              htmlFor="inline-phone"
            >
              Phone
            </label>
          </div>
          <div className="md:w-11/12">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400"
              id="inline-phone"
              type="tel"
              placeholder="+380990000000"
              {...register("phone")}
              aria-label="phone"
            />
            <div className="absolute text-red-500 text-xs">
              {errors?.phone?.message}
            </div>
          </div>
        </div>
        <div className="md:flex md:items-center mb-8">
          <div className="md:w-2/12">
            <label
              className="block text-gray-500 font-bold text-left mb-1 md:mb-0 "
              htmlFor="inline-email"
            >
              Email
            </label>
          </div>
          <div className="md:w-11/12">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-400"
              id="inline-email"
              type="email"
              placeholder="hello@example.com"
              {...register("email")}
              aria-label="email"
            />
            <div className="absolute text-red-500 text-xs">
              {errors?.email?.message}
            </div>
          </div>
        </div>
        <div className="md:flex mb-6">
          <div className="md:w-2/12"></div>
          <label className="md:w-11/12 block text-gray-500 font-bold ">
            <input
              className="mr-2 leading-tight"
              type="checkbox"
              {...register("newsletter")}
            />
            <span className="text-sm">Send me your newsletter!</span>
            <div className="absolute text-red-500 text-xs font-normal">
              {errors?.newsletter?.message}
            </div>
          </label>
        </div>
        <div className="md:flex md:justify-center">
          <SubmitFormBtn />
        </div>
      </div>
    </form>
  );
};

export default FormSubscribe;
