import { APP_NAME } from "@/lib/constant";
import Image from "next/image";
import Link from "next/link";
import Search from "./Search";
import { Button } from "@/components/ui/button";
import { MenuIcon } from "lucide-react";
import data from "@/lib/data";
import Menu from "./Menu";



export default function Header() {
  return (
    <header className="bg-white text-black">
      <div className="py-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link
              className="flex items-center header-button font-extrabold text-2xl m-1"
              href="/"
            >
              <Image src="/logo.svg" alt={`${APP_NAME}`} width={50} height={50} />
              {APP_NAME}
            </Link>
          </div>
          <div className="hidden md:block flex-1 max-w-xl">
            <Search />
          </div>
          <Menu />
        </div>
        <div className="md:hidden block py-2">
          <Search />
        </div>
      </div>

      <div className="flex items-center px-3 mb-[1px] bg-gray-800 text-gray-300">
        <Button
          variant="ghost"
          className="dark header-button flex items-center gap-1 text-base [&_svg]:size-6"
        >
          <MenuIcon />
          All
        </Button>
        <div className="flex items-center flex-wrap gap-3 overflow-hidden max-h-[42px]">
          {data.headerMenus.map((menu) => (
            <Link
              href={menu.href}
              key={menu.href}
              className="header-button !p-2"
            >
              {menu.name}
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
