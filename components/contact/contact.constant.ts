import { PiTelegramLogoDuotone } from "react-icons/pi";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { ContactItem } from "./contact.type";
import { CgInstagram } from "react-icons/cg";

export const contacts: ContactItem[] = [
  {
    id: 1,
    title: "Email",
    icon: MdOutlineAlternateEmail,
    link: "mailto://hamidrezaramzani@gmail.com",
    label: "hamidrezaramzani80@gmail.com",
  },
  {
    id: 2,
    title: "Telegram",
    icon: PiTelegramLogoDuotone,
    link: "https://t.me/hamidrezaramzani",
    label: "t.me/hamidrezaramzani",
  },
  {
    id: 3,
    title: "Instagram",
    icon: CgInstagram,
    link: "https://instagram.com/hamidrezaramzani_",
    label: "instagram.com/hamidrezaramzani",
  },
];
