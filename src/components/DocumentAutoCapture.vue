<script setup lang="ts">
import { inject, ref } from "vue";
import type { DocumentCallback } from "@innovatrics/dot-document-auto-capture";
import { Emits } from "../types";
import DocumentCamera from "./DocumentCamera.vue";
import DocumentUi from "./DocumentUi.vue";
import { store } from '../services/Store';
import { EnrolDocument } from "../services/DocumentService"
import { Step } from "../types";

const emit = defineEmits<Emits<DocumentCallback>>();
const parentFn:any = inject('parentFn');

const isButtonDisabled = ref(true);

const handlePhotoTaken: DocumentCallback = async (imageData) => {
  isButtonDisabled.value = false;

  store.image = imageData.image;
  await ProcessImage();

};

async function ProcessImage() {
    //TODO show processing image step.
    emit('onProcessing', Step.PROCESSING_IMAGE)


    console.log("STEP 3: Enrol Document");
    const classification = await EnrolDocument();
    store.side = (classification.PageSide == "FRONT") ? "BACK" :classification.PageSide;

    if (classification.HasError) {
       console.log(classification.Error);
       console.log("handle gracefully and ask for the image to be re-submitted. I.e repeat document capture and Step 3.");
        //TODO you should handle any error gracefully. 
        // Here you can ask the user to re-take the photo of their ID and re-enrol the image with the same correlationId and AccessToken.
        return;
        
    }

    if (classification.IsTwoSideDocument) {
        // ask for back
        if (classification.PageSide == "FRONT") {
          parentFn(Step.DOCUMENT_CAPTURE);
          return;
        }
        else if (classification.PageSide == "BACK") {
          parentFn(Step.FACE_CAPTURE);
            return;
        } 
            //todo some unknown value, show error to reset
            return;
    } else {
        parentFn(Step.FACE_CAPTURE);
        return;
    }

}

const handleError = (error: Error) => {
  emit("onError", error);
};
</script>

<template>
  <div>
    <div class="container" style="width: 100%;">
      <div id="side-indicator" class="side hide" style="font-size: 16px;"><strong>CAPTURE {{ (!store.side) ? "FRONT" : store.side }}</strong></div>
      <DocumentCamera :cameraOptions="{
        cameraFacing: 'environment',
        onPhotoTaken: handlePhotoTaken,
        onError: handleError,
      }" />
      <DocumentUi :uiProps="{ showCameraButtons: true }" />
    </div>
  </div>
</template>

<style scoped>
.side {
    width: 140px;
    height: 26px;
    border: 1px solid #2A7F84;
    background-color: #2A7F84;
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    text-align: center;
    border-radius: 4px;
    color: white;
    z-index: 10000;
    top:11rem;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
}

</style>
