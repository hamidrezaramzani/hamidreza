import Link from "next/link";
import { navbarItems } from "./navbar.constant";

export const Navbar = () => {
  return (
    <div className="bg-white z-50 w-full absolute top-0 right-0 h-16">
      <nav className="flex justify-center py-5">
        <ul className="flex gap-10 z-50">
          {navbarItems.map((item) => (
            <li>
              <Link
                href={item.link}
                className="text-slate-600 text-sm hover:text-slate-900"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};
