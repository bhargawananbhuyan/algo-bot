<template>
	<div class="max-w-screen-xl mx-auto mt-[85px] mb-[150px]">
		<div v-for="(item, index) in items">
			<div :key="index" class="item-card">
				<div>
					<h1>{{ item.title }}</h1>
					<button>Setup</button>
				</div>
				<div class="flex flex-wrap gap-5 mt-10">
					<span class="time-pill">1 min</span>
					<span class="time-pill">5 min</span>
					<span class="time-pill">15 min</span>
					<span class="time-pill">1 h</span>
					<span class="time-pill">4 h</span>
					<span class="time-pill">6 h</span>
					<span class="time-pill">12 h</span>
					<span class="time-pill">1 d</span>
					<span class="time-pill">1 w</span>
					<span class="time-pill">1 month</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "profile",

	data() {
		return {
			items: [
				{ title: "Fibonacci" },
				{ title: "Bollinger Band" },
				{ title: "Swing high/low" },
				{ title: "Support and Resistance" },
			],
		};
	},
});
</script>

<style scoped>
.time-pill {
	@apply text-xl text-[#B7C7FF] font-semibold bg-[#162349] px-8 py-2 inline-block rounded-lg;
}
.item-card {
	@apply border-[3px] border-[#686EE9] p-10 mb-14 bg-[#222D54] rounded-2xl shadow-[0px_0px_25px_0px_#AFC1FF4D];
}
.item-card div {
	@apply flex items-center justify-between;
}
.item-card h1 {
	@apply text-[#BECCFF] text-4xl font-bold;
}
.item-card button {
	@apply text-xl text-[#E7ECFF] font-semibold bg-[#676CE7] px-7 pt-2 pb-2.5 rounded-full shadow-[0px_0px_12px_0px_#5F82FF] hover:shadow-none transition-all;
}
</style>
