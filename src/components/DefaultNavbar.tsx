"use client";
import React from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
  Card,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Collapse,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";

export function StickyNavbar() {
  const [openNav, setOpenNav] = React.useState(false);

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  // Define the JSON array for navbar items
  const navbarItems = [
    {
      name: "Seniors",
      href: "#",
      subMenu: [
        { name: "Femenino", href: "/seniors/femenino" },
        { name: "Masculino", href: "/seniors/masculino" },
        { name: "Touch", href: "/seniors/touch" },
        { name: "Equipo de Madres", href: "/seniors/equipomadres" },
      ],
    },
    { name: "Personas Socias", href: "#" },
    { name: "Escuela", href: "#" },
    { name: "Proyecto", href: "#" },
  ];

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      {navbarItems.map((item) => (
        <Menu key={item.name}>
          <MenuHandler>
            <Button
              variant="text"
              className="flex items-center gap-3 text-base font-normal capitalize tracking-normal"
            >
              {item.name}
            </Button>
          </MenuHandler>
          {item.subMenu ? (
            <MenuList>
              {item.subMenu.map((subItem) => (
                <Link key={subItem.name} href={subItem.href}>
                  <MenuItem key={subItem.name}>{subItem.name}</MenuItem>
                </Link>
              ))}
            </MenuList>
          ) : (
            ""
          )}
        </Menu>
      ))}
    </ul>
  );

  return (
    <Navbar className="sticky top-0 z-10 h-max max-w-full rounded-none py-2 px-4 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Link href={"/"}>
          <Image
            src="/logos/logo_VRU_v3_Alta.png"
            alt={"Logo VRU"}
            width={80}
            height={80}
          ></Image>
        </Link>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={openNav}>{navList}</Collapse>
    </Navbar>
  );
}
