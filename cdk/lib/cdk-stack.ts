import {
  Stack,
  StackProps,
  aws_lambda as lambda,
  Duration,
  aws_s3 as s3,
  aws_s3_deployment as s3deploy,
  aws_cloudfront as cloudfront,
  aws_iam as iam,
} from "aws-cdk-lib";
import { Construct } from "constructs";

export class TaiyoDenkiApiStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const websiteBucket = new s3.Bucket(this, "WebsiteBucket", {
      websiteErrorDocument: "index.html",
      websiteIndexDocument: "index.html",
    });

    const websiteIdentity = new cloudfront.OriginAccessIdentity(
      this,
      "WebsiteIdentity"
    );

    const webSiteBucketPolicyStatement = new iam.PolicyStatement({
      actions: ["s3:GetObject"],
      effect: iam.Effect.ALLOW,
      principals: [websiteIdentity.grantPrincipal],
      resources: [`${websiteBucket.bucketArn}/*`],
    });

    websiteBucket.addToResourcePolicy(webSiteBucketPolicyStatement);

    const websiteDistribution = new cloudfront.CloudFrontWebDistribution(
      this,
      "WebsiteDistribution",
      {
        errorConfigurations: [
          {
            errorCachingMinTtl: 300,
            errorCode: 403,
            responseCode: 200,
            responsePagePath: "/index.html",
          },
          {
            errorCachingMinTtl: 300,
            errorCode: 404,
            responseCode: 200,
            responsePagePath: "/index.html",
          },
        ],
        originConfigs: [
          {
            s3OriginSource: {
              s3BucketSource: websiteBucket,
              originAccessIdentity: websiteIdentity,
            },
            behaviors: [
              {
                isDefaultBehavior: true,
              },
            ],
          },
        ],
        priceClass: cloudfront.PriceClass.PRICE_CLASS_ALL,
      }
    );

    new s3deploy.BucketDeployment(this, "WebsiteDeploy", {
      sources: [s3deploy.Source.asset("../front/dist")],
      destinationBucket: websiteBucket,
      distribution: websiteDistribution,
      distributionPaths: ["/*"],
    });
  }

  // const taiyoDenkiApiFunction = new lambda.Function(
  //   this,
  //   "taiyoDenkiApiFunction",
  //   {
  //     code: lambda.Code.fromAsset("dist"),
  //     handler: "index.handler",
  //     runtime: lambda.Runtime.NODEJS_14_X,
  //     timeout: Duration.seconds(30),
  //   }
  // );
}
