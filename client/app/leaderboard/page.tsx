"use client";
import Container from "@/components/container/container";
import UserCard from "@/components/UserCard/UserCard";
import UserHistoryModal from "@/components/UserHistoryModal/UserHistoryModal";
import { useAppSelector } from "@/store/hook";
import { getSortedUsers } from "@/utils/utils";
import React from "react";

const Page = () => {
  const { users } = useAppSelector(state => state.usersData);
  const sortedUsers = getSortedUsers(users);

  return (
    <div>
      <Container>
        <div className="border border-red-50">
          {sortedUsers.map((user, idx) => {
            return (
              <UserHistoryModal
                username={user.username}
                firstName={user.firstName}
                lastName={user.lastName}
                key={idx}>
                <UserCard rank={idx} {...user} />
              </UserHistoryModal>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

export default Page;
