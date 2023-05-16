import { FC, ReactNode } from "react";

type ILayoutProps = {
  children: ReactNode;
};

const Container: FC<ILayoutProps> = ({ children }) => {
  return <div className="container mx-auto px-4">{children}</div>;
};

export default Container;
