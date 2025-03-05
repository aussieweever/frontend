# Frontend Demo

## Introduction

This is a frontend demo, integrated with Azure Entra ID, Azure Web Pubsub Service Service, and APIM. The repo is based on react app, using `msal` library for authentication.

### main.tsx

The entry point of the application, wrapped by the `msal` provider

### App.tsx

It checks if it's logged in or not, then return either the Login page or the Home page.

### auth-config.ts

Contains configurations for the `msal` library

- clientId: the client Id of the this frontend that registered in Microsoft ERntra ID
- authority: http://login.microsoftonline.com/${Tenant ID}
- redirectUri: using `window.location.origin` so that it can match different values in different environments.

### Login.tsx

This page simply call the `adsl` to do a login, which redirects the user to the centrelised login page. It also shows a loading icon in case the redirection is slow.

### Layout.tsx

Websocket connection is set up here.

### Home.tsx

The index page, contains a button to call the APIM to get a hard coded list of tickets.
It should render the result the page if API call succeeded.

### About.tsx

Contains a button used to create a ticket. At this stage this call will always failed due to lack of the role claim. This is to verify the jwt validation policy on the APIM side.

## Run Local

- npm i
- npm run dev
