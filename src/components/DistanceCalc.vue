<template>
	<section class="container">
		<div class="MED">
			<div class="spinner">
				<div class="spinnerL">
				</div>
			</div>
		</div>
		<div class="distance">{{distance}}</div>
			
		<div>&nbsp Km from you</div>
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
.container {
  display: flex;
  align-items: center;
  max-width: 170px;
  min-width: 170px;
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
  -webkit-animation: sk-scaleout 2s infinite ease-in-out;
  animation: sk-scaleout 2s infinite ease-in-out;
}
.distance {
  color: rgb(26, 25, 25);
  margin-left: -43px;
  position: initial;
  z-index: 5;
  width: 35px;
  text-overflow: clip;
  overflow: hidden;
}

.spinnerL {
  width: 40px;
  height: 40px;
  background-color: rgb(0, 255, 76);

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
