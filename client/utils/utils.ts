import { UserData } from "@/types";

export const getSortedUsers = (users: UserData) => {
  return users?.slice().sort((a, b) => {
    const pointsA = a.Points ?? 0; // Default to 0 if Points is null or undefined
    const pointsB = b.Points ?? 0;
    return pointsB - pointsA; // Ascending order
  });
};
