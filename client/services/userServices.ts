import axios from "axios";
import { BASE_URL } from "./authServices";
import toast from "react-hot-toast";

export const getUsersService = async () => {
  return await axios.get(`${BASE_URL}/user/v1/get-users`);
};

export const updateUserPointService = async (username: string) => {
  return await axios.patch(`${BASE_URL}/user/v1/claim-points`, {
    username,
  });
};

export const getUserHistoryService = async (username: string) => {
  return await axios.post(`${BASE_URL}/user/v1/your-history`, { username });
};
