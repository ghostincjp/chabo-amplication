import { ScenarioItemWhereInput } from "./ScenarioItemWhereInput";
import { ScenarioItemOrderByInput } from "./ScenarioItemOrderByInput";

export type ScenarioItemFindManyArgs = {
  where?: ScenarioItemWhereInput;
  orderBy?: Array<ScenarioItemOrderByInput>;
  skip?: number;
  take?: number;
};
