<script setup lang="ts">
import { provide, ref } from "vue";
import DocumentAutoCapture from "./components/DocumentAutoCapture.vue";
import FaceAutoCapture from "./components/FaceAutoCapture.vue";
import { Step } from "./types";
import { CallbackImage } from "@innovatrics/dot-document-auto-capture";
import GetStarted from "./components/GetStarted.vue";
import ProcessingStep from "./components/ProcessingStep.vue";
import ResultStep from "./components/ResultStep.vue";
import ProgressIndicator from "./components/ProgressIndicator.vue"
import QRCode from "./components/QRCode.vue";


const currentStep = ref(Step.GET_STARTED);

const imageUrl = ref("");

const handlePhotoTaken = <T,>(imageData: CallbackImage<T>, _content: Uint8Array) => {
  imageUrl.value = URL.createObjectURL(imageData.image);
};


const isMobile = () => {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){
  // true for mobile device
    console.log("mobile device");
  }else{
    // false for not mobile device
    // currentStep.value = Step.DESKTOP;
    console.log("not mobile device");
}
}

const handleError = (error: Error) => {
  alert(error);
};

const handleStepChange = (step: Step) => {
  currentStep.value = step;
  imageUrl.value = "";
};

provide('parentFn', handleStepChange); 

isMobile();

</script>

<template>
  <div>
    <div v-if="currentStep === Step.DESKTOP">
      <QRCode />
    </div>

    <div v-if="currentStep === Step.GET_STARTED">
      <GetStarted @onClick="handleStepChange"/>
    </div>

    <div v-if="currentStep === Step.DOCUMENT_CAPTURE">
      <DocumentAutoCapture @on-complete="handlePhotoTaken" @on-error="handleError" @on-back="handleStepChange" @on-processing="handleStepChange" />
    </div>
    <div v-if="currentStep === Step.PROCESSING_IMAGE">
      <ProgressIndicator />
      <ProcessingStep />
    </div>
    <div v-else-if="currentStep === Step.FACE_CAPTURE">
      <FaceAutoCapture  @on-complete="handlePhotoTaken" @on-photo-taken="handlePhotoTaken" @on-error="handleError" @on-back="handleStepChange" />
    </div>
    <div v-else-if="currentStep === Step.RESULTS">
      <ProgressIndicator />
      <ResultStep />
    </div> 
  </div>
</template>

<style>

body {
  margin:0px !important;
}

#app {
  font-family: "Montserrat", sans-serif;
  font-size: 100%;
  line-height: 1.5;
  color: #404354;
  text-align: center;
}

.container {
  max-width: 50rem;
  /* margin: 20px auto; */
  position: relative;
}

.container.overflow-hidden {
  overflow: hidden;
}

.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 0.375em;
  padding: 0.625em 1em;
  background: #00bfb2;
  color: white;
  border: 0;
  box-shadow: 0px 0.375rem 0.625rem rgba(0, 0, 0, 0.3);
  cursor: pointer;
  font-family: Montserrat, Arial, sans-serif;
  font-weight: 600;
  font-size: 1rem;
  margin: 0 0.5rem 1rem 0.5rem;
}

.button[disabled] {
  background-color: lightgrey;
  color: gray;
  cursor: not-allowed;
}
</style>
