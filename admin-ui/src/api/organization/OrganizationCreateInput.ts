import { UserCreateNestedManyWithoutOrganizationsInput } from "./UserCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  name: string;
  users?: UserCreateNestedManyWithoutOrganizationsInput;
};
