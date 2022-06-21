import { ScenarioItem as TScenarioItem } from "../api/scenarioItem/ScenarioItem";

export const SCENARIOITEM_TITLE_FIELD = "id";

export const ScenarioItemTitle = (record: TScenarioItem): string => {
  return record.id || record.id;
};
