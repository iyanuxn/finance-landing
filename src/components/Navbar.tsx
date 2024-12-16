import Link from "next/link";
import { FaApple } from "react-icons/fa6";

const Navbar = () => {
  return (
    <div className="w-full h-20 px-20 flex items-center justify-between">
      <Link className="w-1/3 flex" href="/">
        <div className="flex items-center justify-center relative">
          <span className="font-bold text-xl tracking-tighter">
            Pro Finance
          </span>
          <div className="w-9 h-9 absolute -z-10 -right-3 bg-primary rounded-full"></div>
        </div>
      </Link>
      <div className="flex items-center gap-10 font-medium md:text-sm text-xs text-neutral-600 w-1/3 justify-center">
        <Link href="/">About Us</Link>
        <Link href="/">Catalog</Link>
        <Link href="/">Price</Link>
        <Link href="/">Help</Link>
      </div>
      <div className="flex items-center gap-3 w-1/3 justify-end">
        <button className="btn bg-grey  md:text-xs">Log In</button>
        <button className="btn bg-black text-white md:text-xs gap-2 border border-black hover:bg-white hover:text-black transition-all duration-300 ease-in-out">
          <FaApple className="text-sm" />
          Download App
        </button>
      </div>
    </div>
  );
};

export default Navbar;
