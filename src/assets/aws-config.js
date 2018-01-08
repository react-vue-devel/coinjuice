// WARNING: DO NOT EDIT. This file is Auto-Generated by AWS Mobile Hub. It will be overwritten.

// Copyright 2017 Amazon.com, Inc. or its affiliates (Amazon). All Rights Reserved.
// Code generated by AWS Mobile Hub. Amazon gives unlimited permission to
// copy, distribute and modify it.

// AWS Mobile Hub Project Constants
const aws_app_analytics = 'enable';
const aws_cognito_identity_pool_id = 'us-west-2:a696c156-b515-4199-af1b-9f4661f91df6';
const aws_cognito_region = 'us-west-2';
const aws_content_delivery = 'enable';
const aws_content_delivery_bucket = 'coinpesa-hosting-mobilehub-941852605';
const aws_content_delivery_bucket_region = 'us-west-2';
const aws_content_delivery_cloudfront = 'enable';
const aws_content_delivery_cloudfront_domain = 'd23p8ks8m0u1a8.cloudfront.net';
const aws_dynamodb = 'enable';
const aws_dynamodb_all_tables_region = 'us-west-2';
const aws_dynamodb_table_schemas = '[{"tableName":"ionic-mobile-hub-tasks","attributes":[{"name":"userId","type":"S"},{"name":"taskId","type":"S"},{"name":"category","type":"S"},{"name":"created","type":"N"},{"name":"description","type":"S"}],"indexes":[{"indexName":"DateSorted","hashKey":"userId","rangeKey":"created"}],"region":"us-west-2","hashKey":"userId","rangeKey":"taskId"}]';
const aws_mobile_analytics_app_id = 'cb8700c4eb3d46d08396d8cf265090fa';
const aws_project_id = '29672d42-0cbd-406b-9b37-60dc6926d88c';
const aws_project_name = 'coinPesa';
const aws_project_region = 'us-west-2';
const aws_resource_name_prefix = 'coinpesa-mobilehub-941852605';
const aws_sign_in_enabled = 'enable';
const aws_user_files = 'enable';
const aws_user_files_s3_bucket = 'coinpesa-userfiles-mobilehub-941852605';
const aws_user_files_s3_bucket_region = 'us-west-2';
const aws_user_pools = 'enable';
const aws_user_pools_id = 'us-west-2_Dty4yDjn0';
const aws_user_pools_mfa_type = 'OFF';
const aws_user_pools_web_client_id = '3p2di11k4d58j6lt0a8mcrsupb';
const aws_user_settings = 'enable';

AWS.config.region = aws_project_region;
AWS.config.credentials = new AWS.CognitoIdentityCredentials({
    IdentityPoolId: aws_cognito_identity_pool_id
  }, {
    region: aws_cognito_region
});
AWS.config.update({customUserAgent: 'MobileHub v0.1'});