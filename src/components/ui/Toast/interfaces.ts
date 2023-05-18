import { FC } from "react";
import { Id } from "react-toastify";

export type ToastMessageType = "success" | "error" | "info";

export interface ToastMessageProps {
  type: ToastMessageType;
  message: string;
}

export interface ToastMessageComponent extends FC<ToastMessageProps> {
  dismiss: (id?: Id) => void;
}
