import { ScenarioItemUpdateManyWithoutOrganizationsInput } from "./ScenarioItemUpdateManyWithoutOrganizationsInput";
import { UserUpdateManyWithoutOrganizationsInput } from "./UserUpdateManyWithoutOrganizationsInput";

export type OrganizationUpdateInput = {
  name?: string;
  scenarioItems?: ScenarioItemUpdateManyWithoutOrganizationsInput;
  users?: UserUpdateManyWithoutOrganizationsInput;
};
