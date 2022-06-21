import { Injectable } from "@nestjs/common";
import { PrismaService } from "nestjs-prisma";
import { ScenarioItemServiceBase } from "./base/scenarioItem.service.base";

@Injectable()
export class ScenarioItemService extends ScenarioItemServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
