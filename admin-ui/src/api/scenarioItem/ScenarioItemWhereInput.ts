import { StringFilter } from "../../util/StringFilter";
import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ScenarioItemFieldListRelationFilter } from "../scenarioItemField/ScenarioItemFieldListRelationFilter";

export type ScenarioItemWhereInput = {
  id?: StringFilter;
  organization?: OrganizationWhereUniqueInput;
  scenarioItemFields?: ScenarioItemFieldListRelationFilter;
};
