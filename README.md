# ScreenlyyID Javascript SDK

This is a working example of the document capture flow. 
This project is not production ready. Use directly at your own risk. However it can be adapted for use, or if you wish you write your own UI, the flow of API and data can be replicated with your custom UI.


## Project Setup

For local development setup.

- Vue 3
- Node 20. Use NVM to manage node versions.
- Navigate to the project root:
- run; npm install


  Other Pre-reqs;
   - An API key created at admin.screenlyyid.com
   - add the API key in Config.ts:

```sh
export const API_KEY = "" //TODO create API key in screenlyyID dashboard and put here.
```

- to start the project run; npm run dev
 



## Overview

This working example project replicates the API flow listed under Custom Installation: 
https://app.theneo.io/screenlyyid/ScreenlyyID/get-started/custom-integration

The API steps here can be replicated with your own document capture UI.

**Step 1: Create Instance**
  - DocumentService.ts
    - InitVerificationProcess() > GetCorrelationId()

**Step 2: Create a Document Session**
  - DocumentService.ts
    - InitVerificationProcess() > CreateSession()

**Step 3: Enrol the Document**
  - DocumentAutoCapture.vue
    - ProcessImage() > EnrolDocument()

**Step 4: Liveness Check**
  - DocumnetService.ts
    - ProcessIDandSelfie() > ProcessLiveness()

**Step 5: Document Image List**
  - this call is skipped in the demo, you should implement it in your system.

**Step 6: Document Image Download**
  - DocumentService.ts
    - ProcessIDandSelfie() > GetDocumentPhoto()

**Step 7: Face Match Check**
  - DocumentService.ts
    - ProcessIDandSelfie() > ProcessFaceMatch()

**Step 8: Complete Enrolment**
  - DocumentService.ts
    - ProcessIDandSelfie() > CompleleEnrolment()

**Step 9: Get OCR Data**
  - DocumentService.ts
    - ProcessIDandSelfie() > GetDocumentData()

**Step 10: Get Decision Results**
  - DocumentService.ts
    - ProcessIDandSelfie() > GetDecisionResults()

  
