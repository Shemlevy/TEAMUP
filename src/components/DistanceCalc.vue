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
}
.MED {
  margin: 5px;
  width: 40px;
  height: 40px;
  background-color: rgba(255, 255, 255, 0.603);
  border-radius: 100%;
}
.spinner {
  width: 40px;
  height: 40px;
  background-color: rgb(238, 238, 238);

  border-radius: 100%;
  -webkit-animation: sk-scaleout 2s infinite ease-in-out;
  animation: sk-scaleout 2s infinite ease-in-out;
}
.distance {
  color: rgb(0, 0, 0);
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
  background-color: rgb(126, 2, 2);

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
