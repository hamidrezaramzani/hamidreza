import { wordBook } from "@/constants/wordBook";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full md:w-2/3 flex flex-col md:flex-row items-center h-32">
      <Image
        src="/images/alien.png"
        alt="This is main logo"
        width={200}
        height={100}
        className="grayscale"
      />
      <div className="px-5 h-auto flex flex-col gap-2 py-3">
        <h1 className="text-white font-qs-bold md:text-left text-center text-3xl">
          {wordBook.view.home.introduction.en}
        </h1>
        <h3 className="font-qs-light text-lg text-indigo-500 md:text-left text-center">
          {wordBook.view.home.webDeveloper.en}
        </h3>
        <p className="font-qs-light text-md  leading-7 text-white md:text-left text-center">
          {wordBook.view.home.bio.en}
        </p>
      </div>
    </div>
  );
}
