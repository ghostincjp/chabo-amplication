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
import { CreateScenarioItemFieldArgs } from "./CreateScenarioItemFieldArgs";
import { UpdateScenarioItemFieldArgs } from "./UpdateScenarioItemFieldArgs";
import { DeleteScenarioItemFieldArgs } from "./DeleteScenarioItemFieldArgs";
import { ScenarioItemFieldFindManyArgs } from "./ScenarioItemFieldFindManyArgs";
import { ScenarioItemFieldFindUniqueArgs } from "./ScenarioItemFieldFindUniqueArgs";
import { ScenarioItemField } from "./ScenarioItemField";
import { ScenarioItem } from "../../scenarioItem/base/ScenarioItem";
import { ScenarioItemFieldService } from "../scenarioItemField.service";

@graphql.Resolver(() => ScenarioItemField)
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
export class ScenarioItemFieldResolverBase {
  constructor(
    protected readonly service: ScenarioItemFieldService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "ScenarioItemField",
    action: "read",
    possession: "any",
  })
  async _scenarioItemFieldsMeta(
    @graphql.Args() args: ScenarioItemFieldFindManyArgs
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
  @graphql.Query(() => [ScenarioItemField])
  @nestAccessControl.UseRoles({
    resource: "ScenarioItemField",
    action: "read",
    possession: "any",
  })
  async scenarioItemFields(
    @graphql.Args() args: ScenarioItemFieldFindManyArgs
  ): Promise<ScenarioItemField[]> {
    return this.service.findMany(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => ScenarioItemField, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ScenarioItemField",
    action: "read",
    possession: "own",
  })
  async scenarioItemField(
    @graphql.Args() args: ScenarioItemFieldFindUniqueArgs
  ): Promise<ScenarioItemField | null> {
    const result = await this.service.findOne(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ScenarioItemField)
  @nestAccessControl.UseRoles({
    resource: "ScenarioItemField",
    action: "create",
    possession: "any",
  })
  async createScenarioItemField(
    @graphql.Args() args: CreateScenarioItemFieldArgs
  ): Promise<ScenarioItemField> {
    return await this.service.create({
      ...args,
      data: {
        ...args.data,

        schenarioItem: {
          connect: args.data.schenarioItem,
        },
      },
    });
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @graphql.Mutation(() => ScenarioItemField)
  @nestAccessControl.UseRoles({
    resource: "ScenarioItemField",
    action: "update",
    possession: "any",
  })
  async updateScenarioItemField(
    @graphql.Args() args: UpdateScenarioItemFieldArgs
  ): Promise<ScenarioItemField | null> {
    try {
      return await this.service.update({
        ...args,
        data: {
          ...args.data,

          schenarioItem: {
            connect: args.data.schenarioItem,
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

  @graphql.Mutation(() => ScenarioItemField)
  @nestAccessControl.UseRoles({
    resource: "ScenarioItemField",
    action: "delete",
    possession: "any",
  })
  async deleteScenarioItemField(
    @graphql.Args() args: DeleteScenarioItemFieldArgs
  ): Promise<ScenarioItemField | null> {
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
  @graphql.ResolveField(() => ScenarioItem, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "ScenarioItem",
    action: "read",
    possession: "any",
  })
  async schenarioItem(
    @graphql.Parent() parent: ScenarioItemField
  ): Promise<ScenarioItem | null> {
    const result = await this.service.getSchenarioItem(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}
