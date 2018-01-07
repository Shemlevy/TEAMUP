<template>
	<section class="main-container">
		<div class="MED">
			<div class="spinner">
				<div class="spinnerL">
				</div>
			</div>
		</div>
		<div class="distance">{{distance}}</div>
			
		<div>&nbsp Km</div>
	</section>
</template>

<script>
export default {
  props: ["distance"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.main-container {
  display: flex;
  align-items: center;
  width:70px;
  margin:10px;

}
.MED {
  margin: 5px;
  width: 40px;
  height: 40px;
  background-color: rgba(228, 188, 142, 0.685);
  border-radius: 100%;
}
.spinner {
  width: 40px;
  height: 40px;
  background-color: rgb(255, 149, 11);

  border-radius: 100%;
  -webkit-animation: sk-scaleout .5s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
}
.distance {
  color: rgb(65, 62, 62);
  margin-left: -39px;
  position: initial;
  z-index: 5;
  max-width: 3.5ch;
  overflow: hidden;
}

.spinnerL {
  width: 40px;
  height: 40px;
  background-color: rgb(255, 255, 255);

  border-radius: 100%;
  -webkit-animation: sk-scaleout 1s infinite ease-in-out;
  animation: sk-scaleout 1s infinite ease-in-out;
}

@-webkit-keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    opacity: 0;
  }
}

@keyframes sk-scaleout {
  0% {
    -webkit-transform: scale(0);
    transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
    opacity: 0;
  }
}
</style>
