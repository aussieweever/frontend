import { PublicClientApplication } from "@azure/msal-browser";

const MSAL_CONFIG = {
  auth: {
    clientId: "8cf2eb08-fd2f-4be3-bb16-1fb929526c56",
    authority:
      "https://login.microsoftonline.com/fbe002c2-fe4e-47bd-afbc-29bb25af671e",
    redirectUri: window.location.origin,
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

const LOGIN_REQUEST = {
  scopes: ["openid", "offline_access", "profile"],
};

const TOKEN_REQUEST = {
  scopes: ["User.ReadWrite.All"],
};

const GRAPH_CONFIG = {
  graphUsersEndpoint: "https://graph.microsoft.com/v1.0/users",
};

const PUBLIC_CLIENT_APPLICATION = new PublicClientApplication(MSAL_CONFIG);
async function initializeMsal() {
  await PUBLIC_CLIENT_APPLICATION.initialize();
}
initializeMsal();

export {
  MSAL_CONFIG,
  LOGIN_REQUEST,
  TOKEN_REQUEST,
  GRAPH_CONFIG,
  PUBLIC_CLIENT_APPLICATION,
};
