import * as cdk from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { LambdaStack } from '../src/main';

test('Lambda Created', () => {
  // create the cdk app instance
  const app = new cdk.App();
  // create the lambda stack instance attached to the the app 
  const stack = new LambdaStack(app, 'LambdaStack');
  // generate a cloudformation template from the stack created that was attached to the app
  const template = Template.fromStack(stack);

  template.resourceCountIs('AWS::Lambda::Function', 1);
});