import { StringFilter } from "../../util/StringFilter";
import { ScenarioItemWhereUniqueInput } from "../scenarioItem/ScenarioItemWhereUniqueInput";

export type ScenarioItemFieldWhereInput = {
  id?: StringFilter;
  schenarioItem?: ScenarioItemWhereUniqueInput;
};
