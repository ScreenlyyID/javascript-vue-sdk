<script setup lang="ts">
import {inject, ref } from "vue";
import type { FaceCallback } from "@innovatrics/dot-face-auto-capture";
import { Step, Emits } from "../types";
import FaceCamera from "./FaceCamera.vue";
import FaceUi from "./FaceUi.vue";
import { ProcessIDandSelfie } from "../services/DocumentService"
import { store } from "../services/Store";

const emit = defineEmits<Emits<FaceCallback>>();
const parentFn:any = inject('parentFn');

const isButtonDisabled = ref(true);

const handlePhotoTaken: FaceCallback = async (res) => {
  isButtonDisabled.value = false;
  store.progress.percecntageComplete = 50;
  store.progress.stepName = "Capture Selfie";
  store.progress.stepNext = "Complete";
  store.progress.stepNumber = 2;

  emit("onBack", Step.PROCESSING_IMAGE);

  await ProcessIDandSelfie(res.image);

  store.progress.percecntageComplete = 100;
  store.progress.stepName = "Process complete!";
  store.progress.stepNext = "";
  store.progress.stepNumber = 3;

  parentFn(Step.RESULTS);
};


const handleError = (error: Error) => {
  emit("onError", error);
};
</script>

<template>
  <div>
    <div class="container">
      <FaceCamera :cameraOptions="{
        cameraFacing: 'user',
        onPhotoTaken: handlePhotoTaken,
        onError: handleError,
      }" />
      <FaceUi :uiProps="{ showCameraButtons: true }" />
    </div>
  </div>
</template>
