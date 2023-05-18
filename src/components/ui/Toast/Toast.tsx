import { toast } from "react-toastify";

import { ToastMessageComponent } from "@/components/ui/Toast/interfaces";

const ToastMessage: ToastMessageComponent = ({ type, message }) => {
  const toastId = toast[type](<div>{message}</div>);
  return <div>{toastId}</div>;
};

ToastMessage.dismiss = toast.dismiss;

export default ToastMessage;
