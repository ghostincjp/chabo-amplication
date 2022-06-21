import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  ReferenceArrayInput,
  SelectArrayInput,
} from "react-admin";

import { OrganizationTitle } from "../organization/OrganizationTitle";
import { ScenarioItemFieldTitle } from "../scenarioItemField/ScenarioItemFieldTitle";

export const ScenarioItemEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput
          source="organization.id"
          reference="Organization"
          label="organization"
        >
          <SelectInput optionText={OrganizationTitle} />
        </ReferenceInput>
        <ReferenceArrayInput
          source="scenarioItemFields"
          reference="ScenarioItemField"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={ScenarioItemFieldTitle} />
        </ReferenceArrayInput>
      </SimpleForm>
    </Edit>
  );
};
