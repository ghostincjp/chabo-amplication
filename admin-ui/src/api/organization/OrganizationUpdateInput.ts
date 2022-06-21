import { UserUpdateManyWithoutOrganizationsInput } from "./UserUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  name?: string;
  users?: UserUpdateManyWithoutOrganizationsInput;
};
