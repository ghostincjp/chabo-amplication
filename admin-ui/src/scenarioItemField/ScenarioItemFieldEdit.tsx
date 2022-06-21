import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
} from "react-admin";
import { ScenarioItemTitle } from "../scenarioItem/ScenarioItemTitle";

export const ScenarioItemFieldEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="scenarioitem.id"
          reference="ScenarioItem"
          label="schenarioItem"
        >
          <SelectInput optionText={ScenarioItemTitle} />
        </ReferenceInput>
      </SimpleForm>
    </Edit>
  );
};
