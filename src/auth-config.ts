import { PublicClientApplication } from "@azure/msal-browser";

const MSAL_CONFIG = {
  auth: {
    clientId: "8cf2eb08-fd2f-4be3-bb16-1fb929526c56",
    authority:
      "https://login.microsoftonline.com/fbe002c2-fe4e-47bd-afbc-29bb25af671e",
    redirectUri: window.location.origin, // to match the redirect URI in the Azure portal for different environments
  },
  cache: {
    cacheLocation: "localStorage",
    storeAuthStateInCookie: false,
  },
};

const LOGIN_REQUEST = {
  scopes: ["openid", "offline_access", "profile"],
};

const PUBLIC_CLIENT_APPLICATION = new PublicClientApplication(MSAL_CONFIG);

// initialize the MSAL application, this step is required to set up the auth module
await PUBLIC_CLIENT_APPLICATION.initialize();

export { MSAL_CONFIG, LOGIN_REQUEST, PUBLIC_CLIENT_APPLICATION };
