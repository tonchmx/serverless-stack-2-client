const dev = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-dev-attachmentsbucket-t9y2s15531qe"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://xali95mbi8.execute-api.us-east-1.amazonaws.com/dev"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_D7hFGadQS",
    APP_CLIENT_ID: "ba4l9ior7a9rlpssamacc6513",
    IDENTITY_POOL_ID: "us-east-1:d8a1908f-a1de-4fff-9d5e-892265470217"
  }
};

const prod = {
  s3: {
    REGION: "us-east-1",
    BUCKET: "notes-app-2-api-prod-attachmentsbucket-xr8y4lsydfsm"
  },
  apiGateway: {
    REGION: "us-east-1",
    URL: "https://6o5glpzb10.execute-api.us-east-1.amazonaws.com/prod"
  },
  cognito: {
    REGION: "us-east-1",
    USER_POOL_ID: "us-east-1_1hLYqRxiN",
    APP_CLIENT_ID: "4n1499m79ush2sbpljq3dn9ut5",
    IDENTITY_POOL_ID: "us-east-1:32a590f8-06ed-4dcf-8f8a-1bba81187a31"
  }
};

// Default to dev if not set
const config = process.env.REACT_APP_STAGE === 'propd' ? prod : dev;

export default {
  // Add common config values here
  MAX_ATTACHMENT_SIZE: 5000000,
  ...config
};
