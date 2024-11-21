import React, { ReactNode, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { getUserHistoryService } from "@/services/userServices";
import toast from "react-hot-toast";
import { Button } from "../ui/button";

interface UserHistory {
  date: string;
  pointsAwarded: number;
}

const UserHistoryModal = ({
  children,
  username,
  firstName,
  lastName,
}: {
  children: ReactNode;
  username: string;
  firstName: string;
  lastName: string;
}) => {
  const [userHistory, setUserHistory] = useState<UserHistory[] | []>([]);

  const fetchUserHistory = async () => {
    try {
      const res = await getUserHistoryService(username);

      if (res.status === 200) {
        const userHistoryData = res?.data?.data;
        console.log("History data", res.data);
        toast.success(res.data.message);
        setUserHistory(userHistoryData);
      } else {
        toast.error("something wents wrong!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="w-full">
      <Dialog>
        <DialogTrigger onClick={() => fetchUserHistory()} className="w-full ">
          {children}
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{firstName + " " + lastName}'s History</DialogTitle>
            <DialogDescription></DialogDescription>
            {userHistory?.map((ele, idx) => {
              return (
                <div>
                  <div>Data : {ele?.date}</div>
                  <div>Point Awarded : {ele?.pointsAwarded}</div>
                </div>
              );
            })}
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserHistoryModal;
