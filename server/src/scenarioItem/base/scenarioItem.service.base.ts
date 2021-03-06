/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "nestjs-prisma";
import {
  Prisma,
  ScenarioItem,
  ScenarioItemField,
  Organization,
} from "@prisma/client";

export class ScenarioItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count<T extends Prisma.ScenarioItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScenarioItemFindManyArgs>
  ): Promise<number> {
    return this.prisma.scenarioItem.count(args);
  }

  async findMany<T extends Prisma.ScenarioItemFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScenarioItemFindManyArgs>
  ): Promise<ScenarioItem[]> {
    return this.prisma.scenarioItem.findMany(args);
  }
  async findOne<T extends Prisma.ScenarioItemFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScenarioItemFindUniqueArgs>
  ): Promise<ScenarioItem | null> {
    return this.prisma.scenarioItem.findUnique(args);
  }
  async create<T extends Prisma.ScenarioItemCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScenarioItemCreateArgs>
  ): Promise<ScenarioItem> {
    return this.prisma.scenarioItem.create<T>(args);
  }
  async update<T extends Prisma.ScenarioItemUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScenarioItemUpdateArgs>
  ): Promise<ScenarioItem> {
    return this.prisma.scenarioItem.update<T>(args);
  }
  async delete<T extends Prisma.ScenarioItemDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.ScenarioItemDeleteArgs>
  ): Promise<ScenarioItem> {
    return this.prisma.scenarioItem.delete(args);
  }

  async findScenarioItemFields(
    parentId: string,
    args: Prisma.ScenarioItemFieldFindManyArgs
  ): Promise<ScenarioItemField[]> {
    return this.prisma.scenarioItem
      .findUnique({
        where: { id: parentId },
      })
      .scenarioItemFields(args);
  }

  async getOrganization(parentId: string): Promise<Organization | null> {
    return this.prisma.scenarioItem
      .findUnique({
        where: { id: parentId },
      })
      .organization();
  }
}
