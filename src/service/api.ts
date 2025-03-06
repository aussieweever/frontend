import { msalInstance } from "../authContext";

export const getToken = async (): Promise<string> => {
  const accounts = msalInstance.getAllAccounts();
  if (accounts !== null && accounts.length > 0) {
    const tokenRequest = {
      account: accounts[0],
      scopes: [
        // declare the scopes for the token
        "api://nick-tasks-api/admin-tasks-api",
        "api://nick-tasks-api/user-tasks-api",
      ],
    };
    const response = await msalInstance.acquireTokenSilent(tokenRequest);
    return response.accessToken;
  } else {
    throw new Error("No active account! Sign in first.");
  }
};

// the token part can be done using an interceptor
export const getTestData = async (token: string): Promise<string> => {
  const response = await fetch(
    "https://nick-urbis-apim.azure-api.net/tickets/api/get-tickets",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const body = await response.json();
  return JSON.stringify(body);
};

export const getWsTokenUrl = async (token: string): Promise<string> => {
  const response = await fetch(
    "https://nick-urbis-apim.azure-api.net/tickets/api/negotiate",
    {
      headers: {
        Authorization: "Bearer " + token,
      },
    }
  );
  const body = await response.json();
  return body.url;
};

export const writeTicket = async (token: string): Promise<void> => {
  const response = await fetch(
    "https://nick-urbis-apim.azure-api.net/tickets/api/create-ticket",
    {
      method: "POST",
      headers: {
        Authorization: "Bearer " + token,
      },
      body: JSON.stringify({
        title: "New Ticket",
        description: "This is a new ticket",
      }),
    }
  );
  console.log(response.status);
};
