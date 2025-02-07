import  axios from 'axios'
import { store } from './Store'
import { BASE_URL, API_KEY } from './Config'
import * as apiService from './ApiService'

export async function InitVerificatoinProcess(){
    console.log("STEP 1: Create Instance");
    const correlationId = await GetCorrelationId();   
    store.correlationId = correlationId;

    console.log("STEP 2: Create Document Session");
    const sessionResponse = await apiService.CreateSession();
    store.sessionId = sessionResponse.SessionId;
    store.accessToken = sessionResponse.AccessToken;
}


export async function ProcessIDandSelfie(selfie: any){

    console.log("STEP 4: Liveness Check");
    await ProcessLiveness(selfie, store.correlationId); 

    console.log("STEP 5 & 6:Get Image List and Get Document Photo"); // note you should make the  extra call to GetDocumentImageList to retreive the actual document names. For the purpose of demo this is skipped.
    const documentImage = await GetDocumentPhoto(store.correlationId);

    console.log("STEP 7: Process Face Match");
    await ProcessFaceMatch(selfie, documentImage, store.correlationId); 

    console.log("STEP 8: Complete Enrolment");
    await CompleleEnrolment();

    console.log("STEP 9: Get Document Data");
    const documentData = await GetDocumentData();

    console.log("STEP 10: Get Decision Result");
    const documentResult = await GetDecisionResults();

    store.documentdata = documentData;
    store.documentresult = documentResult;
}


export async function EnrolDocument() {

    const enrolment = await apiService.EnrolDocument();
    return enrolment;

}

async function GetDocumentPhoto(correlationId:any) {
    const url = BASE_URL + `/api/v1/data/${store.sessionId}/images/primary_face`

    try {
            const result = await axios({
                method: 'get',
                url: url,
                responseType: 'blob',
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY,
                    'X-Correlation-Id': `${correlationId}`
                    }
            });

            const reader = new FileReader();
            reader.readAsDataURL(result.data);
        
            return new Promise((resolve, reject) => {
                reader.onloadend = () => {
                    // Here, the result string starts with 'data:' because it's a data URL
                    // But you only need the base64 string, so let's remove the unnecessary part

                   const base64data = (<string>reader.result).split(',').pop();
                //    const base64data = reader.result;
                    resolve(base64data);
                };
                reader.onerror = reject;
            });
    }
    catch (err) {
            console.error('Fetch error: ', err);
    }
}


async function ProcessLiveness(selfie:any, correlationId:any) {

    const base64image = await blobToBase64(selfie);
    const normalisedb64 = (<string>base64image).split(',').pop();
  

    const body = { "Image": normalisedb64 };
    const url = BASE_URL + `/api/v1/liveness`
    const headers = {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
            'X-Correlation-Id': `${correlationId}`
            }
        };

    const result = await axios.post(url, body, headers);
    
    return result.data;
}

async function ProcessFaceMatch(selfie:any, idPhoto:any, correlationId:any) {

    const base64image = await blobToBase64(selfie);
    const normalisedb64 = (<string>base64image).split(',').pop();

    const body = { 
        "Settings" : 
        {
            "SubscriptionId" : "" //ignore this, it should be left blank.
        },
        "Data": 
            { 
                "ImageOne": normalisedb64, 
                "ImageTwo": idPhoto 
            } 
        };

        const url = BASE_URL + `/api/v1/facematch`
        const headers = {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,
            'X-Correlation-Id': `${correlationId}`
            }
        };

        const result = await axios.post(url, body, headers);
    
    return result.data;
}


export async function CompleleEnrolment() {
    const url = BASE_URL + '/api/v1/enrolment/complete';
    const headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY,
                    'X-Correlation-Id': store.correlationId,
                    'x-access-token' : store.accessToken
                }
            };
   
    const response = await axios.post(url, null, headers);

    return response.data;

}


export async function GetDocumentData() {
    const url = BASE_URL + `/api/v1/data/${store.sessionId}/document/result`;
    const headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY,
                    'X-Correlation-Id': store.correlationId,
                }
            };
   
            const response = await axios.get(url, headers);

    return response.data;

}


export async function GetDecisionResults() {
    const url = BASE_URL + `/api/v1/data/${store.sessionId}/decision/result`;
    const headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY,
                    'X-Correlation-Id': store.correlationId,
                }
            };
   
    const response = await axios.get(url, headers);

    return response.data;
}


export async function GetCorrelationId() {

    const body = {
            "FirstName": "Bill", // OPTIONAL; this will show in the admin dashboard on the verifications page
            "LastName": "Jobs",  // OPTIONAL; this will show in the admin dashboard on the verifications page
            "ClientLookupId": null,
            "GlobalScreening": ["idv"], // you must set this to idv to run an identity check. You can set other product codes if you plan on calling them with the returned correlationId. See Create Instance API; https://admin.screenlyyid.com/docs/api
            "CustomerIntelligence": []
        }

        const url = BASE_URL + `/api/v1/instance/create`;
        const headers = {
        headers: {
            'Content-Type': 'application/json',
            'x-api-key': API_KEY,

        }
    };
    const response = await axios.post(url, body, headers);

    return response.data.CorrelationId;
    
}

function blobToBase64(blob:any) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }