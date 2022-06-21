import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ScenarioItemTitle } from "../scenarioItem/ScenarioItemTitle";

export const ScenarioItemFieldCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="scenarioitem.id"
          reference="ScenarioItem"
          label="schenarioItem"
        >
          <SelectInput optionText={ScenarioItemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Create>
  );
};
