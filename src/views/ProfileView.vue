<template>
	<div class="max-w-screen-xl mx-auto mt-[85px] mb-[150px]">
		<form class="flex flex-col dashboard-form max-w-screen-md mx-auto" v-show="!showProducts">
			<h1 class="text-[#787DFF] font-bold text-4xl mb-5">Telegram details</h1>
			<input type="text" placeholder="Telegram token" />
			<input type="text" placeholder="Chat ID" />

			<router-link to="/" class="flex items-center justify-between">
				<div class="text-blue-100 text-xl font-semibold underline">
					Don't know how to get telegram details?
				</div>
				<button
					class="bg-[#676CE7] self-end px-12 py-2.5 text-lg font-semibold text-white button-base mt-5"
					@click.prevent="proceedToShowDashboard"
				>
					Save
				</button>
			</router-link>
		</form>

		<div v-show="showProducts">
			<div v-for="(item, index) in items">
				<Product :key="index" :title="item.title" />
			</div>
			<div>
				<h1 class="text-3xl font-bold text-blue-100 mb-8">
					Pairs we are monitoring right now
				</h1>
				<div class="flex gap-5">
					<span class="time-pill">BTC/USDT</span>
					<span class="time-pill">ETH/USDT</span>
					<span class="time-pill">ADA/USDT</span>
					<span class="time-pill">BNB/USDT</span>
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import Product from "@/components/Product.vue";
import { defineComponent } from "vue";

export default defineComponent({
	name: "profile",
	data() {
		return {
			showProducts: false,
			items: [
				{ title: "Fibonacci" },
				{ title: "Bollinger Band" },
				{ title: "Swing high or low" },
				{ title: "Support and Resistance" },
			],
		};
	},
	components: {
		Product,
	},
	methods: {
		proceedToShowDashboard() {
			this.showProducts = true;
		},
	},
});
</script>

<style scoped>
.button-base {
	@apply rounded-full shadow-[0px_0px_12px_0px_#5F82FF] hover:shadow-none transition-all;
}
.dashboard-form {
	@apply gap-y-5;
}
.dashboard-form input {
	@apply bg-[#222D54] py-4 px-7 text-lg rounded-full border-[2px] border-[#686EE9] shadow-[0px_0px_25px_0px_#AFC1FF4D] outline-none focus:outline-none text-white;
}
</style>
