import { useRouter } from "next/router";

const GoBackBtn = () => {
  const router = useRouter();

  const handleGoBack = () => {
    router.back();
  };

  return (
    <button
      onClick={handleGoBack}
      className="shadow bg-white text-slate-600 font-bold hover:bg-slate-600 hover:text-white hover:shadow-outline hover:outline-none py-1 px-3 rounded hidden md:block"
      type="button"
    >
      GoBack
    </button>
  );
};

export default GoBackBtn;
