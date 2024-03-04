<script setup lang="ts">
import { store } from '../services/Store';
import "vue3-circle-progress/dist/circle-progress.css";
import CircleProgress from 'vue3-circle-progress';
</script>

<template>

        <div id="progress-indicator" class="d-flex flex-row progress-container justify-content-center">
        <div class="d-flex justify-content-center align-items-center">
            <div style="position: absolute;">{{ store.progress.stepNumber }} of 3</div>
            <circle-progress :percent='store.progress.percecntageComplete' :size="80" :border-width="7" :border-bg-width="7" fill-color="#2a7f84" linecap="straight"></circle-progress>
        </div>
        <div class="d-flex p-2 align-items-center">
            <div class="d-flex flex-column">
                <div class="step">Step {{ store.progress.stepNumber }}</div>
                <div class="step-name-header">{{ store.progress.stepName }}</div>
                <div class="step-header" v-if="store.progress.stepNext != ''">Next: {{ store.progress.stepNext }}</div>
            </div>
        </div>
    </div>

    <hr class="solid">
</template>

<style scoped>


#progress-indicator{
    margin-top: 30px;
    margin-bottom: 20px;
    /* margin-left: 3rem; */
}

.progress-circle {
    /* margin-left: -10px; */
    margin-left: 25px;
}




.step {
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: 0.06em;
    text-align: left;
    color: #9497A9;
    text-transform: uppercase;
}
.step-name-header {
    font-size: 25px;
    font-style: normal;
    font-weight: 500;
    line-height: 22px;
    letter-spacing: -0.01em;
    text-align: left;
    color: #1E1E1E;
    margin-top: 5px;
}
.step-header {
    font-size: 10px;
    font-style: normal;
    font-weight: 500;
    line-height: 12px;
    letter-spacing: 0.06em;
    color: #9497A9;
    text-transform: uppercase;
    margin-top: 7px;
    text-align: end;
}
</style>