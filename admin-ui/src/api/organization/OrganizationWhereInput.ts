import { StringFilter } from "../../util/StringFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type OrganizationWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  users?: UserListRelationFilter;
};
