import { PublicClientApplication } from "@azure/msal-browser";
import { createContext } from "react";
import { MSAL_CONFIG } from "./auth-config";

export const msalInstance = new PublicClientApplication(MSAL_CONFIG);
await msalInstance.initialize();

export const authContext = createContext(msalInstance);
