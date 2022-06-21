import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScenarioItemFieldService } from "./scenarioItemField.service";
import { ScenarioItemFieldControllerBase } from "./base/scenarioItemField.controller.base";

@swagger.ApiTags("scenarioItemFields")
@common.Controller("scenarioItemFields")
export class ScenarioItemFieldController extends ScenarioItemFieldControllerBase {
  constructor(
    protected readonly service: ScenarioItemFieldService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
