import { ScenarioItem } from "../scenarioItem/ScenarioItem";
import { User } from "../user/User";

export type Organization = {
  createdAt: Date;
  id: string;
  name: string;
  scenarioItems?: Array<ScenarioItem>;
  updatedAt: Date;
  users?: Array<User>;
};
