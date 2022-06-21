import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ScenarioItemFieldCreateNestedManyWithoutScenarioItemsInput } from "./ScenarioItemFieldCreateNestedManyWithoutScenarioItemsInput";

export type ScenarioItemCreateInput = {
  organization: OrganizationWhereUniqueInput;
  scenarioItemFields?: ScenarioItemFieldCreateNestedManyWithoutScenarioItemsInput;
};
