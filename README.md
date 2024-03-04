# ScreenlyyID Javascript SDK

This document provides detailed information about the ScreenlyyID JavaScript Web SDK. The JavaScript Web SDK enables developers to integrate image capture and processing functionality in their mobile web applications.

## Overview

The SDK is made up of 2 processing parts:

1. Javascript that opens the camera, processes the document image, crops it, and assesses it for blur and glare. It also opens the front camera for the selfie and crops the selfie image. 

2. A set of API calls that take the processed image from step 1, and perform OCR extraction, validation, facematch and liveness.

## API Structure

Once document has been extracted by the Javascript SDK, it can be passed to the API for assessment. The APIs must be called in the following order;

1. **Create Document Instance** - call this first to create a unique token for your document (note this is different to the authentication instance API).
2. **Document Image** - post the cropped document image to this end point using the identifier in step 1.
3. **Classify Document** - classify the type of document, this will tell you if you need to also capture the back of the document, or you can continue to selfie. If you need to capture the back of the document, just repeat steps 2 and 3.
4. **Get Document Image Field** - this is an optional step - which allows you to retrieve the passport size photo or the signature, if identified, from the document. You can call this to save the image for later use if you require it.
5. **Get Document Analysis** - this is the call that will analyse the document and return you all the data points and any issues found with the document.

It is recommended you thoroughly read the [API documentation](https://admin.screenlyyid.com/docs/api) to understand these calls as well as API Authentication in detail.


## Project Setup

For local development setup.

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) recommended.

- Node 20 is recommended. Use NVM to manage node versions.
- Navigate to the project root /demo-sdk
- run; npm install


  Other Pre-reqs;
   - You will need an API key - creat one in the admin.screenlyyid.com dashabord, or in test, or local.
   - If testing locally, you will need to be running the APIs locally as well.
   - add the API url and api key in Config.ts:

```sh
export const API_KEY = "" //TODO create API key in screenlyyID dashboard and put here.
export const BASE_URL = ""
```

- to start the project run; npm run dev
 


### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Compile and Minify for Production

```sh
npm run build
```

