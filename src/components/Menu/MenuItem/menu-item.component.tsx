"use client";
import Link from "next/link";
import { MenuItemProps } from "./menu-item.type";
import { usePathname } from "next/navigation";
import { BiHome } from "react-icons/bi";

export default function MenuItem({ children, link, Icon }: MenuItemProps) {
  const pathname = usePathname();

  const activeLinkClassName = pathname === link ? "text-indigo-500" : "";
  return (
    <li
      className={`text-white flex items-center justify-center gap-3 font-qs-light text-xl hover:text-indigo-600 transition-all ${activeLinkClassName}`}
    >
      {Icon} <Link href={link}>{children}</Link>
    </li>
  );
}
