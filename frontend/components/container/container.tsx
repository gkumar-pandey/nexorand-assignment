import React, { FC } from "react";

type ContainerProps = {
  children: React.ReactNode;
};

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-[1440px] ">{children}</div>;
};

export default Container;
