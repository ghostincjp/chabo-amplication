import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { OrganizationList } from "./organization/OrganizationList";
import { OrganizationCreate } from "./organization/OrganizationCreate";
import { OrganizationEdit } from "./organization/OrganizationEdit";
import { OrganizationShow } from "./organization/OrganizationShow";
import { ScenarioItemList } from "./scenarioItem/ScenarioItemList";
import { ScenarioItemCreate } from "./scenarioItem/ScenarioItemCreate";
import { ScenarioItemEdit } from "./scenarioItem/ScenarioItemEdit";
import { ScenarioItemShow } from "./scenarioItem/ScenarioItemShow";
import { ScenarioItemFieldList } from "./scenarioItemField/ScenarioItemFieldList";
import { ScenarioItemFieldCreate } from "./scenarioItemField/ScenarioItemFieldCreate";
import { ScenarioItemFieldEdit } from "./scenarioItemField/ScenarioItemFieldEdit";
import { ScenarioItemFieldShow } from "./scenarioItemField/ScenarioItemFieldShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"Chabo"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Organization"
          list={OrganizationList}
          edit={OrganizationEdit}
          create={OrganizationCreate}
          show={OrganizationShow}
        />
        <Resource
          name="ScenarioItem"
          list={ScenarioItemList}
          edit={ScenarioItemEdit}
          create={ScenarioItemCreate}
          show={ScenarioItemShow}
        />
        <Resource
          name="ScenarioItemField"
          list={ScenarioItemFieldList}
          edit={ScenarioItemFieldEdit}
          create={ScenarioItemFieldCreate}
          show={ScenarioItemFieldShow}
        />
      </Admin>
    </div>
  );
};

export default App;
