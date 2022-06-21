import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type UserUpdateInput = {
  firstName?: string | null;
  lastName?: string | null;
  organization?: OrganizationWhereUniqueInput | null;
  password?: string;
  roles?: Array<string>;
  username?: string;
};
