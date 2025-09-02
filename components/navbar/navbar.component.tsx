"use client";
import Link from "next/link";
import { navbarItems } from "./navbar.constant";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import { useContext } from "react";
import { ThemeContextProvider } from "@/context";
import { ThemeContainer } from "../theme-container";
import { FiGithub } from "react-icons/fi";

export const Navbar = () => {
  const { setTheme, theme } = useContext(ThemeContextProvider);

  const toggleTheme = () => {
    document.documentElement.classList.toggle("dark");
    setTheme?.((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  return (
    <div className="bg-white dark:bg-dark-bg flex justify-around items-center z-50 w-full fixed top-0 right-0 h-16">
      <div className="w-1/6 flex justify-center">
        <a href="https://github.com/hamidrezaramzani">
          <FiGithub className="dark:text-white text-slate-600" />
        </a>
      </div>
      <nav className="flex justify-center py-5 w-4/6">
        <ul className="flex gap-10 z-50">
          {navbarItems.map((item, index: number) => (
            <li key={index}>
              <Link
                href={item.link}
                className="text-slate-600 raleway-regular font-normal dark:text-white text-sm hover:text-slate-900"
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="w-1/6 flex justify-center">
        <button
          onClick={toggleTheme}
          className="dark:text-white text-slate-600"
        >
          <ThemeContainer
            theme={theme}
            dark={<IoMoonOutline />}
            light={<IoSunnyOutline />}
          />
        </button>
      </div>
    </div>
  );
};
