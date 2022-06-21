import { User } from "../user/User";

export type Organization = {
  createdAt: Date;
  id: string;
  name: string;
  updatedAt: Date;
  users?: Array<User>;
};
