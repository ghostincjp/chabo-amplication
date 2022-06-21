import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";

export type ScenarioItemWhereInput = {
  id?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
};
