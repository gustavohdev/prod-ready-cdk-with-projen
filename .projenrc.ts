import { awscdk } from 'projen';
const project = new awscdk.AwsCdkTypeScriptApp({
  authorName: 'Gustavo Avide',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: 'prod-ready-cdk',
  projenrcTs: true,
  description: 'A CDK project for my blog posts',
  keywords: [
    'AWS CDK',
    'projen',
    'Typescript',
    'Deployment',
  ],

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();