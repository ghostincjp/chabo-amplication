import { OrganizationWhereUniqueInput } from "../organization/OrganizationWhereUniqueInput";
import { ScenarioItemFieldUpdateManyWithoutScenarioItemsInput } from "./ScenarioItemFieldUpdateManyWithoutScenarioItemsInput";

export type ScenarioItemUpdateInput = {
  organization?: OrganizationWhereUniqueInput;
  scenarioItemFields?: ScenarioItemFieldUpdateManyWithoutScenarioItemsInput;
};
