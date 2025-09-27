"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

function NavLink({ path, children }) {
  const pathname = usePathname();

  return (
    <Link
      className={`block py-2 hover:text-secondary-900 transition-all ease-out
        ${pathname === path ? "bg-primary-900 rounded-md px-3 text-white" : ""}
      `}
      href={path}
    >
      {children}
    </Link>
  );
}

export default NavLink;
