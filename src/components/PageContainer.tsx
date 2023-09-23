import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const PageContainer = ({ children }: Props) => {
  return <div className=" bg-zinc-900 h-screen p-5">{children}</div>;
};

export default PageContainer;
