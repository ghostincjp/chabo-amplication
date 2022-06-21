import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { ScenarioItemFieldResolverBase } from "./base/scenarioItemField.resolver.base";
import { ScenarioItemField } from "./base/ScenarioItemField";
import { ScenarioItemFieldService } from "./scenarioItemField.service";

@graphql.Resolver(() => ScenarioItemField)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ScenarioItemFieldResolver extends ScenarioItemFieldResolverBase {
  constructor(
    protected readonly service: ScenarioItemFieldService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
