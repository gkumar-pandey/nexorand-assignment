import axios from "axios";
import { toast } from "react-hot-toast";

export const BASE_URL = "https://nexorand-assignment-brown.vercel.app/api";

export const loginService = async ({
  username,
  password,
}: {
  username: string;
  password: string;
}) => {
  const toastId = toast.loading("Loading...");
  try {
    const loginData = { username, password };
    const res = await axios.post(`${BASE_URL}/auth/v1/login`, loginData);

    if (res.status == 200) {
      toast.success("Login successfully.", {
        id: toastId,
      });
      return res.data;
    } else {
      toast.error("Something wents wrong!");
    }
  } catch (error) {
    console.log(error);
  }
};
