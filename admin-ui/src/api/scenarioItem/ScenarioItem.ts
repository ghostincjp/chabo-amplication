import { Organization } from "../organization/Organization";
import { ScenarioItemField } from "../scenarioItemField/ScenarioItemField";

export type ScenarioItem = {
  createdAt: Date;
  id: string;
  organization?: Organization;
  scenarioItemFields?: Array<ScenarioItemField>;
  updatedAt: Date;
};
