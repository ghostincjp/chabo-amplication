import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ScenarioItemResolverBase } from "./base/scenarioItem.resolver.base";
import { ScenarioItem } from "./base/ScenarioItem";
import { ScenarioItemService } from "./scenarioItem.service";

@graphql.Resolver(() => ScenarioItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ScenarioItemResolver extends ScenarioItemResolverBase {
  constructor(
    protected readonly service: ScenarioItemService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
