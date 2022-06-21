import { Organization } from "../organization/Organization";

export type ScenarioItem = {
  createdAt: Date;
  id: string;
  organization?: Organization;
  updatedAt: Date;
};
