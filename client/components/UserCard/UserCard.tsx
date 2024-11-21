import React, { FC } from "react";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { updateUserPointService } from "@/services/userServices";
import { useAppDispatch } from "@/store/hook";
import toast from "react-hot-toast";
import { updateUserData } from "@/store/slice/usersDataSlice";

interface User {
  _id: string;
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  Points: number;
  rank: number;
}

const UserCard: FC<User> = ({
  _id,
  username,
  firstName,
  lastName,
  email,
  Points,
  rank,
}) => {
  return (
    <div className="flex flex-row items-center justify-between p-3 max-w-2xl mx-auto hover:bg-slate-100 cursor-pointer">
      <div className="flex flex-row items-center gap-2">
        <Avatar>
          <AvatarFallback>{firstName[0]?.toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <p>{firstName}</p>
          <p>Rank : {rank + 1}</p>
        </div>
      </div>
      <div>
        <span className="text-lg text-green-500">{Points}</span>
      </div>
    </div>
  );
};

export default UserCard;
