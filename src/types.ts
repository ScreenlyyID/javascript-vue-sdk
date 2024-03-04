import { DocumentCallback } from "@innovatrics/dot-document-auto-capture/.";
import { FaceCallback } from "@innovatrics/dot-face-auto-capture";
import { MagnifEyeLivenessCallback } from "@innovatrics/dot-magnifeye-liveness";
import { SmileLivenessCallback } from "@innovatrics/dot-smile-liveness";

export enum Step {
  GET_STARTED,
  SELECT_COMPONENT,
  DOCUMENT_CAPTURE,
  FACE_CAPTURE,
  DESKTOP,
  // MAGNIFEYE_CAPTURE,
  // SMILE_CAPTURE,
  PROCESSING_IMAGE,
  RESULTS
}

export type Emits<T extends MagnifEyeLivenessCallback | FaceCallback | DocumentCallback | SmileLivenessCallback > = {
  (e: "onProcessing", step: Step) : void;
  (e: "onComplete", ...args: Parameters<T>): void;
  (e: "onError", error: Error): void;
  (e: "onBack", step: Step): void;
}


declare module 'vue3-circle-progress';
