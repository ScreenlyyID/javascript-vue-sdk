import  axios from 'axios'
import { store } from './Store'
import { BASE_URL, API_KEY } from './Config'
import * as apiService from './ApiService'

export async function InitVerificatoinProcess(){
    const correlationId = await GetCorrelationId();   
    store.correlationId = correlationId;

    const sessionResponse = await apiService.CreateSession();
    store.sessionId = sessionResponse.SessionId;
    store.accessToken = sessionResponse.AccessToken;

}


export async function ProcessIDandSelfie(selfie: any){

    await EnrolFace(selfie);
    await CompleleEnrolment();
    const documentData = await GetDocumentData();
    const documentResult = await GetDecisionResults();

    store.documentdata = documentData;
    store.documentresult = documentResult;
}


export async function EnrolDocument() {

    const enrolment = await apiService.EnrolDocument();
    return enrolment;

}

export async function EnrolFace(selfie:any) {
    const url = BASE_URL + '/api/v1/enrolment/face';
    const headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY,
                    'X-Correlation-Id': store.correlationId,
                    'x-session-id' : store.accessToken
                }
            };

    const base64image = await blobToBase64(selfie);
    
    const body = {
        "imageBase": base64image
    };
   
    const response = await axios.post(url, body, headers);

    return response.data;
}


export async function CompleleEnrolment() {
    const url = BASE_URL + '/api/v1/enrolment/complete';
    const headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY,
                    'X-Correlation-Id': store.correlationId,
                    'x-session-id' : store.accessToken
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