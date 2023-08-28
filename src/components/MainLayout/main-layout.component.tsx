import Menu from "../Menu/menu.component";
import { MainLayoutProps } from "./main-layout.type";

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="w-full flex h-full-vh bg-neutral-950">
      <Menu />
      <div className="w-9/12 h-full bg-neutral-900">{children}</div>
    </div>
  );
}
