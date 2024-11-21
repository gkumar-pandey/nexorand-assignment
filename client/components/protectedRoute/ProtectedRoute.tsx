"use client";
import React, { ReactNode, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/store/hook";
import { setUser } from "@/store/slice/userSlice";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const router = useRouter();
  const dispatch = useAppDispatch();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) {
      const user = JSON.parse(userData);
      dispatch(setUser(user));
      setIsAuthenticated(true);
    } else {
      router.push("/login");
    }
  }, [router, dispatch]);

  return <>{children}</>;
};

export default ProtectedRoute;
