#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "aws-cdk-lib";
import { HonoLambdaEdgeConninfo20240705Stack } from "../lib/hono-lambda-edge-conninfo-20240705-stack";

const app = new cdk.App();
new HonoLambdaEdgeConninfo20240705Stack(
  app,
  "HonoLambdaEdgeConninfo20240705Stack",
  {
    env: {
      account: process.env.CDK_DEFAULT_ACCOUNT,
      region: "us-east-1",
    },
  },
);
