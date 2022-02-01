import { Stack, StackProps, aws_lambda as lambda, Duration } from "aws-cdk-lib";
import { Construct } from "constructs";

export class TaiyoDenkiApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const taiyoDenkiApiFunction = new lambda.Function(
      this,
      "taiyoDenkiApiFunction",
      {
        code: lambda.Code.fromAsset("dist"),
        handler: "index.handler",
        runtime: lambda.Runtime.NODEJS_14_X,
        timeout: Duration.seconds(30),
      }
    );
  }
}
