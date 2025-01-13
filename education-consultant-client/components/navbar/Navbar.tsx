import Link from "next/link";
import ThemeController from "../buttons/ThemeController";
import { RiMenu3Fill } from "react-icons/ri";
export default function Navbar() {
  const navItem = (
    <>
      <li>
        <Link href="/services">Our Services</Link>
      </li>
      {/* <li>
        <details>
          <summary>Parent</summary>
          <ul className="p-2">
            <li>
              <a>Submenu 1</a>
            </li>
            <li>
              <a>Submenu 2</a>
            </li>
          </ul>
        </details>
      </li> */}
      <li>
        <Link href="/about-us">About Us</Link>
      </li>
      <li>
        <Link href="/contact">Contact</Link>
      </li>
    </>
  );
  return (
    <div className="navbar bg-base-100 mx-auto container">
      <div className="navbar-start">
        
        <Link href="/" className="btn btn-ghost text-xl">
          Stair Touch
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItem}</ul>
      </div>
      <div className="navbar-end gap-2">
        <ThemeController />
        <div className="dropdown dropdown-left">
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItem}
          </ul>
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <RiMenu3Fill  size={25}/>
          </div>
        </div>
        <a className="btn btn-primary btn-md rounded-3xl hidden md:flex ">
          Free Consulting
        </a>
      </div>
    </div>
  );
}
