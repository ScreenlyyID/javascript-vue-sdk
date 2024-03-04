<script setup lang="ts">
</script>


<template>
    <div id="analyzing" class="d-flex flex-column">
        <div id="analyzing-text" class="flex-row ">
            <!-- <p  id="basic-analyzing" class="">Analyzing...</p> -->
            <div id="document-classification" class="document-classify-group">
                <p class="nametag loading ">Optimizing Image..</p>
                <p class="nametag loading ">Checking for Tampering..</p>
                <p class="nametag loading ">Classifying Document..</p>
                <p class="nametag loading ">Extracting Datapoints..</p>
            </div>
        </div>

        <div class="flex-row">
            <div id="animation-container" class="wrapper analyzing_container">
                <figure id="animation" class="analyzing_animation_zone">
                    <img id="search-image" alt="screenlyyID" class="id_background" src="../assets/id_front@2x.png"/>
                </figure>
            </div>
        </div>
    </div>
</template>

<style scoped>

#analyzing-text {
    padding-left: 35px;
    margin-bottom: 2rem;
}

@keyframes search {
    0% {
        top: 40px;
        left: 60px;
    }

    25% {
        top: 40px;
        left: calc(100% - 120px);
    }

    50% {
        top: calc(100% - 100px);
        left: calc(100% - 120px);
    }

    75% {
        top: calc(100% - 100px);
        left: 60px;
    }

    100% {
        top: 40px;
        left: 60px;
    }
}




@-webkit-keyframes search {
    0% {
        top: 40px;
        left: 60px;
    }

    25% {
        top: 40px;
        left: calc(100% - 120px);
    }

    50% {
        top: calc(100% - 100px);
        left: calc(100% - 120px);
    }

    75% {
        top: calc(100% - 100px);
        left: 60px;
    }

    100% {
        top: 40px;
        left: 60px;
    }
}

@-moz-keyframes search {
    0% {
        top: 40px;
        left: 60px;
    }

    25% {
        top: 40px;
        left: calc(100% - 120px);
    }

    50% {
        top: calc(100% - 100px);
        left: calc(100% - 120px);
    }

    75% {
        top: calc(100% - 100px);
        left: 60px;
    }

    100% {
        top: 40px;
        left: 60px;
    }
}

@-o-keyframes search {
    0% {
        top: 40px;
        left: 60px;
    }

    25% {
        top: 40px;
        left: calc(100% - 120px);
    }

    50% {
        top: calc(100% - 100px);
        left: calc(100% - 120px);
    }

    75% {
        top: calc(100% - 100px);
        left: 60px;
    }

    100% {
        top: 40px;
        left: 60px;
    }
}

@keyframes search {
    0% {
        top: 40px;
        left: 60px;
    }

    25% {
        top: 40px;
        left: calc(100% - 120px);
    }

    50% {
        top: calc(100% - 100px);
        left: calc(100% - 120px);
    }

    75% {
        top: calc(100% - 100px);
        left: 60px;
    }

    100% {
        top: 40px;
        left: 60px;
    }
}


@media screen and (orientation: landscape) and (max-width: 48em) {
    #animation-container {
        width: 60%;
        box-sizing: border-box;
    }
}

@media screen {
    #animation {
        position: relative;
    }
}

@media screen {
    #search-image {
        display: block;
        width: 100%;
        height: auto;
    }
}

@media screen and (orientation: landscape) and (max-width: 48em) {
    #animation {
        width: 60%;
        box-sizing: border-box;
    }
}

@media screen {
    #animation {
        position: relative;
    }
}

@media screen {
    #search-image {
        display: block;
        width: 100%;
        height: auto;
    }
}

@media screen {
    #animation::before {
        content: '';
        display: block;
        width: 64px;
        height: 64px;
        background-image: url('../assets/finder@2x.png');
        background-repeat: no-repeat;
        background-attachment: scroll;
        background-position: center center;
        background-size: contain;
        position: absolute;
        -webkit-animation: search 4s ease-in-out infinite forwards 0s;
        -moz-animation: search 4s ease-in-out infinite forwards 0s;
        -o-animation: search 4s ease-in-out infinite forwards 0s;
        animation: search 4s ease-in-out infinite forwards 0s;
    }
}

.document-classify-group {
    margin-bottom: 30px;
}

.loading:after {
  overflow: hidden;
  display: inline-block;
  vertical-align: bottom;
  -webkit-animation: ellipsis steps(4, end) 1s infinite;
  animation: ellipsis steps(4, end) 1s infinite;
  content: "\2026";
  /* ascii code for the ellipsis character */
  width: 0px;
}

.nametag{
  position: absolute;
}

.nametag:nth-of-type(1){
  animation-name: fade;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-duration: 4s;
  animation-direction: normal;
}

.nametag:nth-of-type(2){
  animation-name: fade;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-delay: 4s;
  animation-duration: 4s;
  animation-direction: normal;
}

.nametag:nth-of-type(3){
  animation-name: fade;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-delay: 8s;
  animation-duration: 4s;
  animation-direction: normal;
}

.nametag:nth-of-type(4){
  animation-name: fade;
  animation-fill-mode: both;
  animation-iteration-count: 1;
  animation-delay: 12s;
  animation-duration: 4s;
  animation-direction: normal;
}

@keyframes fade{
    0% {
      opacity: 0;
    }
    60% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
</style>