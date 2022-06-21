import { StringFilter } from "../../util/StringFilter";
import { ScenarioItemListRelationFilter } from "../scenarioItem/ScenarioItemListRelationFilter";
import { UserListRelationFilter } from "../user/UserListRelationFilter";

export type OrganizationWhereInput = {
  id?: StringFilter;
  name?: StringFilter;
  scenarioItems?: ScenarioItemListRelationFilter;
  users?: UserListRelationFilter;
};
