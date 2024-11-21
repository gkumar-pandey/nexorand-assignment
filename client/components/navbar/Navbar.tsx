"use client";
import React from "react";
import Link from "next/link";

import Container from "../container/container";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAppSelector } from "@/store/hook";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "../ui/button";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { setUser } from "@/store/slice/userSlice";

const Navbar = () => {
  const router = useRouter();
  const user = useAppSelector(state => state.user);

  const logoutHandler = () => {
    const resetUser = {
      email: "",
      firstName: "",
      lastName: "",
      token: "",
      username: "",
    };
    localStorage.removeItem("user");
    router.push("/login");
    setUser(resetUser);
    toast.success("Logout successfully.");
  };

  return (
    <nav className="py-4 w-full shadow-md">
      <Container>
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row gap-3">
            <Link href={"/"}>Home</Link>
            <Link href={"/leaderboard"}>Leaderboard</Link>
          </div>
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarImage
                    src={user.firstName ? "" : "https://github.com/shadcn.png"}
                    alt="@shadcn"
                  />
                  <AvatarFallback>
                    {user?.firstName[0]?.toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem>{user?.email}</DropdownMenuItem>
                <DropdownMenuItem>{user?.firstName}</DropdownMenuItem>
                <DropdownMenuItem>Points : {user?.Points}</DropdownMenuItem>
                <DropdownMenuItem>
                  <Button
                    onClick={logoutHandler}
                    className="bg-red-500 text-white w-full hover:bg-red-600">
                    Logout
                  </Button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
