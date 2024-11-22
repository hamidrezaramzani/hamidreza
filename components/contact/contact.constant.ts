import {
  PiInstagramLogoLight,
  PiMailboxLight,
  PiTelegramLogoThin,
} from "react-icons/pi";
import { ContactItem } from "./contact.type";

export const contacts: ContactItem[] = [
  {
    id: 1,
    title: "Email",
    icon: PiMailboxLight,
    link: "mailto://hamidrezaramzani@gmail.com",
    label: "hamidrezaramzani80@gmail.com",
  },
  {
    id: 2,
    title: "Telegram",
    icon: PiTelegramLogoThin,
    link: "https://t.me/hamidrezaramzani",
    label: "t.me/hamidrezaramzani",
  },
  {
    id: 3,
    title: "Instagram",
    icon: PiInstagramLogoLight,
    link: "https://instagram.com/hamidrezaramzani_",
    label: "instagram.com/hamidrezaramzani",
  },
];
