"use client";
import React from "react";

import Link from "next/link";

import Container from "../container/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <nav className="py-4 w-full shadow-md">
      <Container>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-3">
            <Link href={"/"}>Home</Link>
            <Link href={"/login"}>Login</Link>
            <Link href={"/register"}>Register</Link>
          </div>
          <div>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
