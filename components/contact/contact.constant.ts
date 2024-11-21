import { PiInstagramLogoLight, PiTelegramLogo } from "react-icons/pi";
import { ContactItem } from "./contact.type";

import { MdOutlineAlternateEmail } from "react-icons/md";

export const contacts: ContactItem[] = [
  {
    id: 1,
    icon: MdOutlineAlternateEmail,
    link: "mailto://hamidrezaramzani@gmail.com",
    label: "hamidrezaramzani80@gmail.com",
  },
  {
    id: 2,
    icon: PiTelegramLogo,
    link: "https://t.me/hamidrezaramzani",
    label: "t.me/hamidrezaramzani",
  },
  {
    id: 3,
    icon: PiInstagramLogoLight,
    link: "https://instagram.com/hamidrezaramzani_",
    label: "instagram.com/hamidrezaramzani",
  },
];
