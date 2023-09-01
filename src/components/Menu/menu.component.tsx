import MenuItem from "./MenuItem/menu-item.component";
import { wordBook } from "@/constants/wordBook";
import { IconBaseProps } from "react-icons";
import { BiHome } from "react-icons/bi";
import {
  AiOutlineProject,
  AiOutlineHeart,
  AiOutlinePhone,
  AiOutlineLinkedin,
} from "react-icons/ai";
import { TbBrandBlogger, TbBrandTelegram } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import Link from "next/link";

export default function Menu() {
  const iconStyles: IconBaseProps = {
    fontSize: 18,
    className: "text-indigo-600",
  };
  return (
    <div className="hidden md:w-3/12 h-full bg-neutral-950 md:flex justify-center items-center">
      <ul className="flex flex-col gap-10">
        <MenuItem link="/" Icon={<BiHome {...iconStyles} />}>
          {wordBook.view.menu.home.en}
        </MenuItem>
        <MenuItem link="/projects" Icon={<AiOutlineProject {...iconStyles} />}>
          {wordBook.view.menu.projects.en}
        </MenuItem>
        <MenuItem link="/blog" Icon={<TbBrandBlogger {...iconStyles} />}>
          {wordBook.view.menu.blog.en}
        </MenuItem>
        <MenuItem link="/hobbies" Icon={<AiOutlineHeart {...iconStyles} />}>
          {wordBook.view.menu.hobbies.en}
        </MenuItem>
        <MenuItem link="/contact" Icon={<AiOutlinePhone {...iconStyles} />}>
          {wordBook.view.menu.contact.en}
        </MenuItem>
        <li className="font-qs-light text-sm text-indigo-500"></li>

        <li className="flex flex-col gap-2">
          <div className="w-full justify-center flex gap-2">
            <Link href="https://instagram.com/hamidrezaramzani_">
              <IoLogoInstagram className="font-qs-light text-xl text-indigo-500" />
            </Link>

            <Link href="https://t.me/hamidrezaramzani">
              <TbBrandTelegram className="font-qs-light text-xl text-indigo-500" />
            </Link>

            <Link href="https://linkedin.com/in/hamidrezaramzani">
              <AiOutlineLinkedin className="font-qs-light text-xl text-indigo-500" />
            </Link>
          </div>
          <span className="font-qs-light text-sm text-indigo-500">
            {wordBook.view.menu.copyRight.en}
          </span>
        </li>
      </ul>
    </div>
  );
}
