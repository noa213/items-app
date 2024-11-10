import React from "react";
import Link from "next/link";
import { ILink } from "@/app/types/link";

const NavLink = (props: ILink) => {
  return (
    <Link
      className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
      href={props.href}
    >
      {props.text}
    </Link>
  );
};

export default NavLink;
