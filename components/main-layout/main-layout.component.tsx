import { MainLayoutProps } from "./main-layout.type";

export const MainLayout = ({ title, children }: MainLayoutProps) => {
  return (
    <div className="section w-full flex justify-center align-middle h-screen">
      <div className="flex justify-center w-full gap-5">
        <div className="flex flex-col w-1/2 gap-5 justify-center align-middle">
          {title && (
            <h1 className="text-9xl raleway-bold text-slate-200 mb-16">
              {title}
            </h1>
          )}

          <div className="flex flex-col justify-center h-80 pl-6 w-full border-l py-2 border-slate-600 relative">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
