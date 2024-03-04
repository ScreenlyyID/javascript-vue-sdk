<script setup lang="ts">
import { store } from '../services/Store'

let expirydateScore = "";
let expirydateLevel = "";
let livenessScore = "";
let livenessLevel = "";
let faceverificationScore = "";
let facialverificationLevel = "";
let passivelivenessScore = "";
let passivelivenessLevel = "";
let overallocrconfidenceScore = "";
let overallocrconfidenceLevel = "";
let overalldecisionScore = "";
let overalldecisionLevel = "";

if (store.documentresult.Verifications)
{
    if (store.documentresult.Verifications.DateOfExpiration) {
        expirydateScore =  store.documentresult.Verifications.DateOfExpiration.Score;
        expirydateLevel = store.documentresult.Verifications.DateOfExpiration.Level;
    }

    if (store.documentresult.Verifications.DocumentLiveness) {
        livenessScore = store.documentresult.Verifications.DocumentLiveness.Score;
        livenessLevel = store.documentresult.Verifications.DocumentLiveness.Level;
    }

    if ( store.documentresult.Verifications.FaceVerification) {
        faceverificationScore = store.documentresult.Verifications.FaceVerification.Score;
        facialverificationLevel = store.documentresult.Verifications.FaceVerification.Level;
    }

    if (store.documentresult.Verifications.PassiveLiveness) {
        passivelivenessScore = store.documentresult.Verifications.PassiveLiveness.Score;
        passivelivenessLevel = store.documentresult.Verifications.PassiveLiveness.Level;
    }

    if (store.documentresult.Verifications.OverallOcrFieldsConfidence) {
        overallocrconfidenceScore = store.documentresult.Verifications.OverallOcrFieldsConfidence.Score;
        overallocrconfidenceLevel = store.documentresult.Verifications.OverallOcrFieldsConfidence.Level;
    }

    if (store.documentresult.Decision) {
        overalldecisionScore = store.documentresult.Decision.Score;
        overalldecisionLevel = store.documentresult.Decision.Level;
    }
}


let mrzcrosscheckScoreModel = "";
let mrzcrosscheckLevelModel = "";
if (store.documentresult.Verifications.MrzOcrCrossCheck) {
    mrzcrosscheckScoreModel = store.documentresult.Verifications.MrzOcrCrossCheck.Score;
    mrzcrosscheckLevelModel = store.documentresult.Verifications.MrzOcrCrossCheck.Level;
} 

</script>

<style scoped>
.result-img {
  width: 100%;
}
</style>

<template>
            <div class="d-flex justify-content-center">
                <div class="">
                    <div class="vstack gap-2 mx-auto">
                      
                        <p><strong>Results</strong></p>
                        <table class="styled-table">
                            <tbody>
                                 <tr>
                                     <td>Overall Confidence</td>
                                      <td> {{ overalldecisionScore }} </td>
                                      <td> {{ overalldecisionLevel }} </td>
                                </tr>                  
                                 <tr>
                                     <td>Date of Expiry</td>
                                      <td> {{ expirydateScore }} </td>
                                      <td> {{ expirydateLevel }} </td>
                                </tr>

                                <tr>
                                     <td>Document Liveness</td>
                                      <td> {{ livenessScore }} </td>
                                      <td> {{ livenessLevel }} </td>
                                </tr>

                                <tr>
                                     <td>Facematch</td>
                                      <td> {{ faceverificationScore }} </td>
                                      <td> {{ facialverificationLevel }} </td>
                                </tr>

                                <tr>
                                     <td>Passive Liveness</td>
                                      <td> {{ passivelivenessScore }} </td>
                                      <td> {{ passivelivenessLevel }} </td>
                                </tr>

                                <tr>
                                     <td>Overall OCR Field Confidence</td>
                                      <td> {{ overallocrconfidenceScore }} </td>
                                      <td> {{ overallocrconfidenceLevel }} </td>
                                </tr>

                                <tr v-if="mrzcrosscheckScoreModel != ''">
                                     <td>MRZ Cross Check Score</td>
                                      <td> {{ mrzcrosscheckScoreModel }} </td>
                                      <td> {{ mrzcrosscheckLevelModel }} </td>
                                </tr>
                                                       
                            </tbody>
                        
                        </table>
                    
                    </div>
               
                </div>
            </div>
            
            <div class="row">
                <div class="col-12 mx-auto">
                    <div class="vstack gap-2 mx-auto">
                      
                        <p><strong>Visual Data</strong></p>
                        <table class="styled-table">
                            <tbody>   
                                
                                <tr v-for="item in store.documentdata.DocumentVisualResults" :key="item.name">
                                    <td>{{ item.Name }}</td>
                                    <td>{{ item.Value }}</td>
                                </tr>
                                            
                            </tbody>
                        
                        </table>
                    
                    </div>
               
                </div>
            </div>

            <div class="row"  v-if="mrzcrosscheckScoreModel != ''">
                <div class="col-12 mx-auto">
                    <div class="vstack gap-2 mx-auto">
                      
                        <p><strong>MRZ Data</strong></p>
                        <table class="styled-table">
                            <tbody>                           
                                <tr v-for="item in store.documentdata.DocumentMrzResults" :key="item.name">
                                    <td>{{ item.Name }}</td>
                                    <td>{{ item.Value }}</td>
                                </tr>
                            </tbody>
                        
                        </table>
                    
                    </div>
               
                </div>
            </div>
</template>


<style scoped>
.styled-table {
    border-collapse: collapse;
    margin: 25px 0;
    font-size: 0.9em;
    font-family: sans-serif;
    /* min-width: 400px; */
    /* box-shadow: 0 0 20px rgba(0, 0, 0, 0.15); */
    text-align: left;
}

.styled-table thead tr {
    background-color: #009879;
    color: #ffffff;
    text-align: left;
}


.styled-table th,
.styled-table td {
    padding: 12px 15px;
}

.styled-table tbody tr {
    border-bottom: 1px solid #dddddd;
}

/* .styled-table tbody tr:nth-of-type(even) {
    background-color: #f3f3f3;
} */

.styled-table tbody tr:last-of-type {
    border-bottom: 2px solid #009879;
}

.styled-table tbody tr.active-row {
    font-weight: bold;
    color: #009879;
}

</style>