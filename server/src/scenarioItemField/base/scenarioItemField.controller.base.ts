/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { ScenarioItemFieldService } from "../scenarioItemField.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { ScenarioItemFieldCreateInput } from "./ScenarioItemFieldCreateInput";
import { ScenarioItemFieldWhereInput } from "./ScenarioItemFieldWhereInput";
import { ScenarioItemFieldWhereUniqueInput } from "./ScenarioItemFieldWhereUniqueInput";
import { ScenarioItemFieldFindManyArgs } from "./ScenarioItemFieldFindManyArgs";
import { ScenarioItemFieldUpdateInput } from "./ScenarioItemFieldUpdateInput";
import { ScenarioItemField } from "./ScenarioItemField";
@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class ScenarioItemFieldControllerBase {
  constructor(
    protected readonly service: ScenarioItemFieldService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ScenarioItemField",
    action: "create",
    possession: "any",
  })
  @common.Post()
  @swagger.ApiCreatedResponse({ type: ScenarioItemField })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async create(
    @common.Body() data: ScenarioItemFieldCreateInput
  ): Promise<ScenarioItemField> {
    return await this.service.create({
      data: {
        ...data,

        schenarioItem: {
          connect: data.schenarioItem,
        },
      },
      select: {
        createdAt: true,
        id: true,

        schenarioItem: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ScenarioItemField",
    action: "read",
    possession: "any",
  })
  @common.Get()
  @swagger.ApiOkResponse({ type: [ScenarioItemField] })
  @swagger.ApiForbiddenResponse()
  @ApiNestedQuery(ScenarioItemFieldFindManyArgs)
  async findMany(@common.Req() request: Request): Promise<ScenarioItemField[]> {
    const args = plainToClass(ScenarioItemFieldFindManyArgs, request.query);
    return this.service.findMany({
      ...args,
      select: {
        createdAt: true,
        id: true,

        schenarioItem: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ScenarioItemField",
    action: "read",
    possession: "own",
  })
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: ScenarioItemField })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async findOne(
    @common.Param() params: ScenarioItemFieldWhereUniqueInput
  ): Promise<ScenarioItemField | null> {
    const result = await this.service.findOne({
      where: params,
      select: {
        createdAt: true,
        id: true,

        schenarioItem: {
          select: {
            id: true,
          },
        },

        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @nestAccessControl.UseRoles({
    resource: "ScenarioItemField",
    action: "update",
    possession: "any",
  })
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: ScenarioItemField })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async update(
    @common.Param() params: ScenarioItemFieldWhereUniqueInput,
    @common.Body() data: ScenarioItemFieldUpdateInput
  ): Promise<ScenarioItemField | null> {
    try {
      return await this.service.update({
        where: params,
        data: {
          ...data,

          schenarioItem: {
            connect: data.schenarioItem,
          },
        },
        select: {
          createdAt: true,
          id: true,

          schenarioItem: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @nestAccessControl.UseRoles({
    resource: "ScenarioItemField",
    action: "delete",
    possession: "any",
  })
  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: ScenarioItemField })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @swagger.ApiForbiddenResponse({ type: errors.ForbiddenException })
  async delete(
    @common.Param() params: ScenarioItemFieldWhereUniqueInput
  ): Promise<ScenarioItemField | null> {
    try {
      return await this.service.delete({
        where: params,
        select: {
          createdAt: true,
          id: true,

          schenarioItem: {
            select: {
              id: true,
            },
          },

          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}