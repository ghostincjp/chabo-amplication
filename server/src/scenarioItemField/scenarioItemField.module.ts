import { Module } from "@nestjs/common";
import { ScenarioItemFieldModuleBase } from "./base/scenarioItemField.module.base";
import { ScenarioItemFieldService } from "./scenarioItemField.service";
import { ScenarioItemFieldController } from "./scenarioItemField.controller";
import { ScenarioItemFieldResolver } from "./scenarioItemField.resolver";

@Module({
  imports: [ScenarioItemFieldModuleBase],
  controllers: [ScenarioItemFieldController],
  providers: [ScenarioItemFieldService, ScenarioItemFieldResolver],
  exports: [ScenarioItemFieldService],
})
export class ScenarioItemFieldModule {}
