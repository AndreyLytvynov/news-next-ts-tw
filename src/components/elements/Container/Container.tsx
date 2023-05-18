import { FC } from "react";
import { ILayoutProps } from "@/components/elements/Container/types";

const Container: FC<ILayoutProps> = ({ children }) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

export default Container;