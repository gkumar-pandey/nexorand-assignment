"use client";
import React from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import PasswordInput from "../passwordInput/PasswordInput";
import { Button } from "../ui/button";
import Link from "next/link";
import { loginService } from "@/services/authServices";
import { useAppDispatch } from "@/store/hook";
import { setUser } from "@/store/slice/userSlice";
import { useRouter } from "next/navigation";

const LoginForm = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const loginFormSchema = z.object({
    username: z.string(),
    password: z.string(),
  });

  const form = useForm<z.infer<typeof loginFormSchema>>({
    resolver: zodResolver(loginFormSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof loginFormSchema>) {
    try {
      const res = await loginService(values);
      if (res) {
        const { token, data } = res;
        const userPayload = {
          token: token,
          username: data?.username,
          firstName: data?.firstName,
          lastName: data?.lastName,
          email: data?.email,
          Points: data?.Points,
        };

        localStorage.setItem("user", JSON.stringify(userPayload));
        dispatch(setUser(userPayload));
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleLoginAsGuest = () => {
    form.setValue("username", "guest123");
    form.setValue("password", "test1234");
  };

  return (
    <div className="max-w-md border shadow-md rounded-md w-full py-4 px-5">
      <h1 className="text-3xl text-center font-bold">Login</h1>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col gap-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    required={true}
                    placeholder="Username"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <PasswordInput field={field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="flex flex-col gap-2">
            <Button
              onClick={handleLoginAsGuest}
              variant={"outline"}
              className="font-semibold"
              type="button">
              Login as guest
            </Button>
            <Button type="submit" className="font-semibold">
              Login
            </Button>
            <p className="text-center">
              Don't have account?{" "}
              <Link
                className="hover:underline cursor-pointer text-blue-600"
                href={"/register"}>
                Register
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default LoginForm;
