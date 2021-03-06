/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as graphql from "@nestjs/graphql";
import * as apollo from "apollo-server-express";
import * as nestAccessControl from "nest-access-control";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { CreateScenarioItemArgs } from "./CreateScenarioItemArgs";
import { UpdateScenarioItemArgs } from "./UpdateScenarioItemArgs";
import { DeleteScenarioItemArgs } from "./DeleteScenarioItemArgs";
import { ScenarioItemFindManyArgs } from "./ScenarioItemFindManyArgs";
import { ScenarioItemFindUniqueArgs } from "./ScenarioItemFindUniqueArgs";
import { ScenarioItem } from "./ScenarioItem";
import { ScenarioItemFieldFindManyArgs } from "../../scenarioItemField/base/ScenarioItemFieldFindManyArgs";
import { ScenarioItemField } from "../../scenarioItemField/base/ScenarioItemField";
import { Organization } from "../../organization/base/Organization";
import { ScenarioItemService } from "../scenarioItem.service";

@graphql.Resolver(() => ScenarioItem)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ScenarioItemResolverBase {
  constructor(
    protected readonly service: ScenarioItemService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ScenarioItem",
    action: "read",
    possession: "any",
  })
  async _scenarioItemsMeta(
    @graphql.Args() args: ScenarioItemFindManyArgs
  ): Promise<MetaQueryPayload> {
    const results = await this.service.count({
      ...args,
      skip: undefined,
      take: undefined,
    });
    return {
      count: results,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [ScenarioItem])
  @nestAccessControl.UseRoles({
    resource: "ScenarioItem",
    action: "read",
    possession: "any",
  })
  async scenarioItems(
    @graphql.Args() args: ScenarioItemFindManyArgs
  ): Promise<ScenarioItem[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ScenarioItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ScenarioItem",
    action: "read",
    possession: "own",
  })
  async scenarioItem(
    @graphql.Args() args: ScenarioItemFindUniqueArgs
  ): Promise<ScenarioItem | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ScenarioItem)
  @nestAccessControl.UseRoles({
    resource: "ScenarioItem",
    action: "create",
    possession: "any",
  })
  async createScenarioItem(
    @graphql.Args() args: CreateScenarioItemArgs
  ): Promise<ScenarioItem> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        organization: {
          connect: args.data.organization,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ScenarioItem)
  @nestAccessControl.UseRoles({
    resource: "ScenarioItem",
    action: "update",
    possession: "any",
  })
  async updateScenarioItem(
    @graphql.Args() args: UpdateScenarioItemArgs
  ): Promise<ScenarioItem | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          organization: {
            connect: args.data.organization,
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => ScenarioItem)
  @nestAccessControl.UseRoles({
    resource: "ScenarioItem",
    action: "delete",
    possession: "any",
  })
  async deleteScenarioItem(
    @graphql.Args() args: DeleteScenarioItemArgs
  ): Promise<ScenarioItem | null> {
    try {
      return await this.service.delete(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new apollo.ApolloError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => [ScenarioItemField])
  @nestAccessControl.UseRoles({
    resource: "ScenarioItemField",
    action: "read",
    possession: "any",
  })
  async scenarioItemFields(
    @graphql.Parent() parent: ScenarioItem,
    @graphql.Args() args: ScenarioItemFieldFindManyArgs
  ): Promise<ScenarioItemField[]> {
    const results = await this.service.findScenarioItemFields(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.ResolveField(() => Organization, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Organization",
    action: "read",
    possession: "any",
  })
  async organization(
    @graphql.Parent() parent: ScenarioItem
  ): Promise<Organization | null> {
    const result = await this.service.getOrganization(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
