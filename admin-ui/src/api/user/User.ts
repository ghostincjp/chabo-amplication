import { Organization } from "../organization/Organization";

export type User = {
  createdAt: Date;
  firstName: string | null;
  id: string;
  lastName: string | null;
  organization?: Organization | null;
  roles: Array<string>;
  updatedAt: Date;
  username: string;
};
