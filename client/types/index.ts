export interface User {
  _id: string;
  email: string;
  username: string;
  firstName: string;
  lastName: string;
  Points: number;
}

export type UserData = User[];
