"use client";
import React from "react";
import {
  Navbar,
  Button,
  IconButton,
  Menu,
  MenuHandler,
  MenuItem,
  MenuList,
  Collapse,
  Typography,
  Avatar,
} from "@material-tailwind/react";
import Image from "next/image";
import Link from "next/link";
import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  InboxArrowDownIcon,
  LifebuoyIcon,
  PowerIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/outline";
import { signOut, useSession } from "next-auth/react";
const profileMenuItems = [
  {
    label: "My Profile",
    icon: UserCircleIcon,
    action: () => console.log("My Profile clicked"),
  },
  {
    label: "Edit Profile",
    icon: Cog6ToothIcon,
    action: () => console.log("Edit Profile clicked"),
  },
  {
    label: "Inbox",
    icon: InboxArrowDownIcon,
    action: () => console.log("Inbox clicked"),
  },
  {
    label: "Help",
    icon: LifebuoyIcon,
    action: () => console.log("Help clicked"),
  },
  {
    label: "Sign Out",
    icon: PowerIcon,
    action: () => {
      console.log("Sign Out clicked");
      // assuming signOut is defined somewhere
      signOut();
    },
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="p-1">
        {profileMenuItems.map(({ label, icon, action }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={action}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? "hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10"
                  : ""
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? "text-red-500" : ""}`,
                strokeWidth: 2,
              })}
              <Typography
                as="span"
                variant="small"
                className="font-normal"
                color={isLastItem ? "red" : "inherit"}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}

export function MainNavbar() {
  const [openNav, setOpenNav] = React.useState(false);
  const { data: session, status } = useSession();


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
      ],
    },
    {
      name: "Personas Socias",
      subMenu: [{ name: "Modalidades", href: "/personasSocias" }],
    },
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
        {status === "unauthenticated" || status === "loading" ? (
          <div className="hidden gap-2 lg:flex">
            <Link href="/signin">
              <Button variant="text" size="sm" color="blue-gray">
                Iniciar sesión
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="gradient" size="sm">
                Registrarse
              </Button>
            </Link>
          </div>
        ) : (
          <ProfileMenu />
        )}
      </div>
      <Collapse open={openNav}>
        {navList}
        {status === "unauthenticated" || status === "loading" ? (
          <div className="flex-col gap-2 lg:flex">
            <Link href={"/signin"}>
              <Button variant="text" size="sm" color="blue-gray">
                Iniciar sesión
              </Button>
            </Link>
            <Link href={"/signup"}>
              <Button variant="gradient" size="sm">
                Registrarse
              </Button>
            </Link>
          </div>
        ) : (
          <ProfileMenu />
        )}
      </Collapse>
    </Navbar>
  );
}
