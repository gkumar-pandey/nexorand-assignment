"use client";
import Container from "@/components/container/container";
import Loader from "@/components/Loader/Loader";
import ProtectedRoute from "@/components/protectedRoute/ProtectedRoute";
import UsersList from "@/components/UsersList/UsersList";
import { getUsersService } from "@/services/userServices";
import { useAppDispatch } from "@/store/hook";
import { setUsersData } from "@/store/slice/usersDataSlice";

import { useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function Home() {
  const dispatch = useAppDispatch();
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsersData = async () => {
    try {
      setIsLoading(true);
      const { status, data } = await getUsersService();
      if (status === 200) {
        dispatch(setUsersData(data.data));
      } else {
        toast.error("Something wents wrong.");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsersData();
  }, []);

  return (
    <ProtectedRoute>
      <Container>
        <div>{isLoading ? <Loader /> : <UsersList />}</div>
      </Container>
    </ProtectedRoute>
  );
}
