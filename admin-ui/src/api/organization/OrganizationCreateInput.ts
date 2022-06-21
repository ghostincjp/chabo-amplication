import { ScenarioItemCreateNestedManyWithoutOrganizationsInput } from "./ScenarioItemCreateNestedManyWithoutOrganizationsInput";
import { UserCreateNestedManyWithoutOrganizationsInput } from "./UserCreateNestedManyWithoutOrganizationsInput";

export type OrganizationCreateInput = {
  name: string;
  scenarioItems?: ScenarioItemCreateNestedManyWithoutOrganizationsInput;
  users?: UserCreateNestedManyWithoutOrganizationsInput;
};
