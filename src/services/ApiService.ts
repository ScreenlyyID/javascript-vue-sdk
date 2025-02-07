import  axios from 'axios'
import { BASE_URL, API_KEY } from './Config'
import { store } from './Store'


// **** DOCUMENT API CALLS ******
export async function CreateSession() {
    const url = BASE_URL + '/api/v1/enrolment/initialize';
    const headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY,
                    'X-Correlation-Id': store.correlationId
                }
            };

    const response = await axios.post(url, null, headers);

   
    return response.data;
}

export async function EnrolDocument() {
    const url = BASE_URL + '/api/v1/enrolment/document';

    const headers = {
                headers: {
                    'Content-Type': 'application/json',
                    'x-api-key': API_KEY,
                    'X-Correlation-Id': store.correlationId,
                    'x-access-token' : store.accessToken
                }
            };

   const base64image = await blobToBase64(store.image);


    const body = {
            "imageBase": base64image
    };

    const response = await axios.post(url, body, headers);

    return response.data;
}

function blobToBase64(blob:any) {
    return new Promise((resolve, _) => {
      const reader = new FileReader();
      reader.onloadend = () => resolve(reader.result);
      reader.readAsDataURL(blob);
    });
  }


// *****************