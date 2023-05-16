import { FC, ReactNode } from "react";

type ILayoutProps = {
  children: ReactNode;
};

const Container: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-10">
      {children}
    </div>
  );
};

export default Container;
