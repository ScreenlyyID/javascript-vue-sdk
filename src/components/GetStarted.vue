<script setup lang="ts">
import { Step } from "../types";
import { InitVerificatoinProcess } from "../services/DocumentService";


const emit = defineEmits<{
  (e: "onClick", step: Step): void;
}>();

InitVerificatoinProcess();

</script>
<template>
  <div class="row d-flex justify-content-center" id="capture-id" style="margin: 2rem;">
    <div class="col-12 col-xs-12 mx-auto">
      <div class="row">
        <div class="col-12"></div>
      </div>
      <div class="">
        <div class="row">
          <div>
            <h5>Let's get you verified!</h5>
            <p>We will guide you through the digital identification process:</p>
          </div>
        </div>
        <hr class="solid" />
        <div class="steps-container">
          <div class="">
            <div class="d-flex align-items-center fade-in-text-step1">
              <div class="selected-step">
                <span>1</span>
                <i class="tick-icon" data-eva="checkmark-outline"></i>
              </div>
              <div class="d-flex flex-column">
                <div class="step">Step 1</div>
                <div class="step-name">Upload your ID</div>
              </div>
            </div>
            <div class="d-flex flex-column fade-in-text-step2">
              <div class="divider"></div>
              <div class="d-flex align-items-center">
                <div class="selected-step">
                  <span>2</span>
                  <i class="tick-icon" data-eva="checkmark-outline"></i>
                </div>
                <div class="d-flex flex-column">
                  <div class="step">Step 2</div>
                  <div class="step-name">Take a selfie to verify its you</div>
                </div>
              </div>
            </div>
            <div class="d-flex flex-column fade-in-text-step4">
              <div class="divider"></div>
              <div class="d-flex align-items-center">
                <div class="selected-step">
                  <span>3</span>
                  <i class="tick-icon" data-eva="checkmark-outline"></i>
                </div>
                <div class="d-flex flex-column">
                  <div class="step">Step 3</div>
                  <div class="step-name">Process Complete!</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div  id="start-button" class="col-12 start-button fade-in-text-step4">
      <button  class="button" @click="emit('onClick', Step.DOCUMENT_CAPTURE)">LETS GET STARTED!</button>
  </div>
</template>

<style scoped>

.divider {
    height: 32px;
    width: 2px;
    background: #2A7F84;
    margin: 10px 23px;
    border-radius: 2px;
}

.selected-step {
  height: 48px;
  width: 48px;
  flex: none;

  border-radius: 50%;
  background-color: #2a7f84;
  border: 2px solid #2a7f84;
  box-shadow: inset 0 0 0 4px white;
  margin-right: 20px;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
}
.step {
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.06em;
  text-align: left;
  color: #9497a9;
  text-transform: uppercase;
}
.step-name {
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #1e1e1e;
}
.step-name-header {
  font-size: 25px;
  font-style: normal;
  font-weight: 500;
  line-height: 22px;
  letter-spacing: -0.01em;
  text-align: left;
  color: #1e1e1e;
  margin-top: 5px;
}
.step-header {
  font-size: 10px;
  font-style: normal;
  font-weight: 500;
  line-height: 12px;
  letter-spacing: 0.06em;
  color: #9497a9;
  text-transform: uppercase;
  margin-top: 7px;
  text-align: end;
}

.steps-container {
    margin-top: 3rem;
  -webkit-font-smoothing: antialiased;
}

.fade-in-text-step1 {
  animation: fadeIn 1s;
  -webkit-animation: fadeIn 1s;
  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
  -ms-animation: fadeIn 1s;
}

.fade-in-text-step2 {
  opacity: 0;
  animation: fadeIn 1s;
  animation-delay: 0.5s;

  -webkit-animation: fadeIn 1s;
  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
  -ms-animation: fadeIn 1s;
  -webkit-animation-delay: 0.5s;
  -moz-animation-delay: 0.5s;
  -o-animation-delay: 0.5s;
  -ms-animation-delay: 0.5s;
  -webkit-animation-fill-mode: forwards;
}

.fade-in-text-step3 {
  opacity: 0;
  animation: fadeIn 1s;
  animation-delay: 1s;
  -webkit-animation: fadeIn 1s;
  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
  -ms-animation: fadeIn 1s;
  -webkit-animation-delay: 1s;
  -moz-animation-delay: 1s;
  -o-animation-delay: 1s;
  -ms-animation-delay: 1s;
  -webkit-animation-fill-mode: forwards;
}

.fade-in-text-step4 {
  opacity: 0;
  animation: fadeIn 1s;
  animation-delay: 1.5s;
  -webkit-animation: fadeIn 1s;
  -moz-animation: fadeIn 1s;
  -o-animation: fadeIn 1s;
  -ms-animation: fadeIn 1s;
  -webkit-animation-delay: 1.5s;
  -moz-animation-delay: 1.5s;
  -o-animation-delay: 1.5s;
  -ms-animation-delay: 1.5ss;
  -webkit-animation-fill-mode: forwards;
}



@keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@-moz-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@-webkit-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@-o-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

@-ms-keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
}

h5 {
    font-family: "Montserrat", sans-serif;
    font-size:1.4rem;
    font-weight:500;
    line-height:1.5;
    -webkit-font-smoothing: antialiased;
    margin-bottom:1rem;
}

p {
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
}

button {
    margin-top: 1rem;
    font-weight:400;
    font-family: "Montserrat", sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: #2a7f84;
}

</style>