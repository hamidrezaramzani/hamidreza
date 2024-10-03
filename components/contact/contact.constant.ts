import { PiInstagramLogoLight, PiTelegramLogo } from "react-icons/pi";
import { ContactItem } from "./contact.type";

import { MdOutlineAlternateEmail } from "react-icons/md";

export const contacts: ContactItem[] = [
  {
    icon: MdOutlineAlternateEmail,
    link: "mailto://hamidrezaramzani@gmail.com",
    label: "hamidrezaramzani80@gmail.com",
  },
  {
    icon: PiTelegramLogo,
    link: "https://t.me/hamidrezaramzani",
    label: "t.me/hamidrezaramzani",
  },
  {
    icon: PiInstagramLogoLight,
    link: "https://instagram.com/hamidrezaramzani_",
    label: "instagram.com/hamidrezaramzani",
  },
];
