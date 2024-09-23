import { MainLayoutProps } from "./main-layout.type";

export const MainLayout = ({ title, children, hash }: MainLayoutProps) => {
  return (
    <div
      className="section w-full flex justify-center align-middle h-screen"
      id={hash}
    >
      <div className="flex justify-center w-full gap-5">
        <div className="flex flex-col w-5/6 md:w-1/2 gap-5 justify-center align-middle">
          {title && (
            <h1 className="text-9xl hidden md:inline-block raleway-bold text-slate-200 mb-16">
              {title}
            </h1>
          )}

          <div className="flex flex-col justify-center md:h-80 h-screen pl-6 w-full md:border-l py-2 md:border-slate-600 relative">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};
