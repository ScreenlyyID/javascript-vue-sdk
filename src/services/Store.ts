import { reactive } from 'vue'

interface Store {
    image: Blob,
    side: string,
    // instanceId: "",
    correlationId: string,
    documentdata: any,
    documentresult:any,
    livenessscore: any,
    documentphoto: any,
    facematchscore: any,
    lookupId: string,
    scansAllowed: any,
    apiKey: string,
    additionaldata: any,
    ipaddress: string,
    useragent: string,
    host: string,
    sessionId: string,
    accessToken: string,
    progress: Progress
}

interface Progress {
    stepNumber:number,
    stepName:string,
    stepNext:string,
    percecntageComplete:number
}
export const store:Store = reactive({
    image: new Blob,
    side: "",
    // instanceId: "",
    correlationId: "",
    documentdata: {},
    documentresult:{},
    livenessscore: {},
    documentphoto: {},
    facematchscore: {},
    lookupId: "",
    scansAllowed: {},
    apiKey: "",
    additionaldata: {},
    ipaddress: "",
    useragent: "",
    host: "",
    sessionId: "",
    accessToken: "",
    progress: {
        stepNumber:1,
        stepName:"Upload your ID",
        stepNext:"Capture selfie",
        percecntageComplete: 25
    }

})