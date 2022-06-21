import { ScenarioItemField as TScenarioItemField } from "../api/scenarioItemField/ScenarioItemField";

export const SCENARIOITEMFIELD_TITLE_FIELD = "id";

export const ScenarioItemFieldTitle = (record: TScenarioItemField): string => {
  return record.id || record.id;
};
