import { ReactNode } from "react";

const GridMain = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid  grid-cols-5 grid-rows-6 gap-4 min-h-[60vh] ">
      {children}
    </div>
  );
};
export default GridMain;
