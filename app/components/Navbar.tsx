
"use client";

import Link from "next/link";
import { Navbar } from "flowbite-react";
import { MdMovie } from "react-icons/md";

export function NavbarReact() {
  return (
    <Navbar fluid rounded className="bg-slate-800">
      <Navbar.Brand as={Link} href="https://movie-app-frontend-eta.vercel.app">
        <MdMovie className="w-10 h-10 mx-2" />
        <span className="self-center whitespace-nowrap text-xl font-bold dark:text-white">Movie App</span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        {/* <Navbar.Link as={Link} href="#">
          About
        </Navbar.Link> */}
        <Navbar.Link href="#" className="text-white">Coming Soon</Navbar.Link>
        {/* <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link> */}
      </Navbar.Collapse>
    </Navbar>
  );
}
