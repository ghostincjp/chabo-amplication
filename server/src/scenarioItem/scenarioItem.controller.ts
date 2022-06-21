import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { ScenarioItemService } from "./scenarioItem.service";
import { ScenarioItemControllerBase } from "./base/scenarioItem.controller.base";

@swagger.ApiTags("scenarioItems")
@common.Controller("scenarioItems")
export class ScenarioItemController extends ScenarioItemControllerBase {
  constructor(
    protected readonly service: ScenarioItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
