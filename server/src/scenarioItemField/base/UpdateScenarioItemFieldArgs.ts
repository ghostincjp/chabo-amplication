/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ScenarioItemFieldWhereUniqueInput } from "./ScenarioItemFieldWhereUniqueInput";
import { ScenarioItemFieldUpdateInput } from "./ScenarioItemFieldUpdateInput";

@ArgsType()
class UpdateScenarioItemFieldArgs {
  @Field(() => ScenarioItemFieldWhereUniqueInput, { nullable: false })
  where!: ScenarioItemFieldWhereUniqueInput;
  @Field(() => ScenarioItemFieldUpdateInput, { nullable: false })
  data!: ScenarioItemFieldUpdateInput;
}

export { UpdateScenarioItemFieldArgs };