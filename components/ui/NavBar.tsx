import { SVGfind } from "@/assets/IconsSVG";
import { PublicRoutes } from "@/routes/routes";
import Link from "next/link";

const NavBar = ({ logo }: { logo: string }) => {
  return (
    <nav className=" bg-red-200 h-[50px] fixed w-full flex items-center px-[100px] justify-between z-50">
      <Link href={PublicRoutes.HOME}> {logo} </Link>
      <div className="w-1/3 flex h-[40px]">
        <input className="w-full h-full rounded-l-2xl px-2 outline-none" />
        <span className="relative h-full bg-slate-50 rounded-r-xl px-2 border-l-[.5px] p-2 border-slate-300">
          <SVGfind />
        </span>
      </div>
      <div className="flex gap-5">
        <Link href={PublicRoutes.CART}>Cart</Link>
        <Link href={PublicRoutes.ACCOUNT}>Account</Link>
      </div>
    </nav>
  );
};
export default NavBar;
