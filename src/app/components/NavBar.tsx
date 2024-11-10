import React from "react";
import NavLink from "./NavLink";

const NavBar = () => {
  const links = [
    { href: "/pages/contact", text: "sing-in" },
    { href: "/pages/contact", text: "log-in" },
    { href: "/pages/products", text: "products" },
    { href: "/pages/cities", text: "cities" },
    { href: "/pages/books", text: "books" },
    { href: "/pages/contact", text: "sing-out" },
  ];
  return (
    <div className="bg-gray-800 flex items-baseline space-x-4">
      ITEMS APP
      <div className="flex items-center justify-between h-16">
        {links.map((link, index) => (
          <NavLink key={index} text={link.text} href={link.href} />
        ))}
      </div>
    </div>
  );
};

export default NavBar;
