import { FC } from "react";
import { toast, Id } from "react-toastify";

export type ToastMessageType = "success" | "error" | "info";

interface ToastMessageProps {
  type: ToastMessageType;
  message: string;
}

interface ToastMessageComponent extends FC<ToastMessageProps> {
  dismiss: (id?: Id) => void;
}

const ToastMessage: ToastMessageComponent = ({ type, message }) => {
  const toastId = toast[type](<div>{message}</div>);
  return <div>{toastId}</div>;
};

ToastMessage.dismiss = toast.dismiss;

export default ToastMessage;
