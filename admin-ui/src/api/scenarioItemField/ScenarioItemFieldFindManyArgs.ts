import { ScenarioItemFieldWhereInput } from "./ScenarioItemFieldWhereInput";
import { ScenarioItemFieldOrderByInput } from "./ScenarioItemFieldOrderByInput";

export type ScenarioItemFieldFindManyArgs = {
  where?: ScenarioItemFieldWhereInput;
  orderBy?: Array<ScenarioItemFieldOrderByInput>;
  skip?: number;
  take?: number;
};
