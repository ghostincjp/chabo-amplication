import { Module } from "@nestjs/common";
import { ScenarioItemModuleBase } from "./base/scenarioItem.module.base";
import { ScenarioItemService } from "./scenarioItem.service";
import { ScenarioItemController } from "./scenarioItem.controller";
import { ScenarioItemResolver } from "./scenarioItem.resolver";

@Module({
  imports: [ScenarioItemModuleBase],
  controllers: [ScenarioItemController],
  providers: [ScenarioItemService, ScenarioItemResolver],
  exports: [ScenarioItemService],
})
export class ScenarioItemModule {}
