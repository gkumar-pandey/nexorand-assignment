"use client";
import { useAppDispatch, useAppSelector } from "@/store/hook";
import React from "react";
import UserCard from "../UserCard/UserCard";
import toast from "react-hot-toast";
import { updateUserPointService } from "@/services/userServices";
import { updateUserData } from "@/store/slice/usersDataSlice";
import { getSortedUsers } from "@/utils/utils";

const UsersList = () => {
  const { users } = useAppSelector(state => state.usersData);
  const dispatch = useAppDispatch();
  const sortedUsers = getSortedUsers(users);

  const updateUserPoint = async (username: string) => {
    const toastId = toast.loading("Loading...");
    try {
      const res = await updateUserPointService(username);

      if (res.status === 200) {
        const data = res.data;
        dispatch(updateUserData(data?.data));
        toast.success(res.data.message, {
          id: toastId,
        });
      } else {
        toast.error("something wents wrong.", { id: toastId });
      }
    } catch (error: any) {
      console.error("Error updating user points:", error);
      const errorMessage =
        error?.response?.data?.message ||
        error?.message ||
        "An unexpected error occurred.";
      toast.error(errorMessage, { id: toastId });
    }
  };

  return (
    <div>
      {sortedUsers?.map((user, idx) => (
        <div onClick={() => updateUserPoint(user.username)}>
          <UserCard key={idx} rank={idx} {...user} />
        </div>
      ))}
    </div>
  );
};

export default UsersList;
