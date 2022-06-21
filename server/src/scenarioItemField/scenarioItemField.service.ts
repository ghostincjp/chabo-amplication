import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ScenarioItemFieldServiceBase } from "./base/scenarioItemField.service.base";

@Injectable()
export class ScenarioItemFieldService extends ScenarioItemFieldServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
