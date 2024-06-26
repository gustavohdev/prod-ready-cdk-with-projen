import { App, Stack, StackProps } from 'aws-cdk-lib';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';

export class LambdaStack extends Stack {
  constructor(scope: Construct, id: string, props: StackProps = {}) {
    super(scope, id, props);

    new lambda.Function(this, 'Example Function', {
      functionName: 'example-lambda',
      code: lambda.Code.fromAsset('lambda'),
      handler: 'hello.handler',
      runtime: lambda.Runtime.NODEJS_16_X,
    });
    // define resources here...
  }
}

// for development, use account/region from cdk cli
const devEnv = {
  account: process.env.CDK_DEFAULT_ACCOUNT,
  region: process.env.CDK_DEFAULT_REGION,
};

const app = new App();

new LambdaStack(app, 'lambda-stack-dev', { env: devEnv });

app.synth();