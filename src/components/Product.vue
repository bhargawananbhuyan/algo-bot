<template>
	<div class="item-card">
		<div>
			<h1>{{ title }}</h1>
			<button @click="showDetails">Setup</button>
		</div>
		<div class="flex flex-wrap gap-5 mt-10" v-show="detailsShown">
			<span
				class="time-pill"
				@click="addStrategy('1min')"
				:class="active?.includes('1min' as never) ? 'active' : ''"
				>1 min</span
			>
			<span
				class="time-pill"
				@click="addStrategy('5min')"
				:class="active?.includes('5min' as never) ? 'active' : ''"
				>5 min</span
			>
			<span
				class="time-pill"
				@click="addStrategy('15min')"
				:class="active?.includes('15min' as never) ? 'active' : ''"
				>15 min</span
			>
			<span
				class="time-pill"
				@click="addStrategy('1h')"
				:class="active?.includes('1h' as never) ? 'active' : ''"
				>1 h</span
			>
			<span
				class="time-pill"
				@click="addStrategy('4h')"
				:class="active?.includes('4h' as never) ? 'active' : ''"
				>4 h</span
			>
			<span
				class="time-pill"
				@click="addStrategy('6h')"
				:class="active?.includes('6h' as never) ? 'active' : ''"
				>6 h</span
			>
			<span
				class="time-pill"
				@click="addStrategy('12h')"
				:class="active?.includes('12h' as never) ? 'active' : ''"
				>12 h</span
			>
			<span
				class="time-pill"
				@click="addStrategy('1d')"
				:class="active?.includes('1d' as never) ? 'active' : ''"
				>1 d</span
			>
			<span
				class="time-pill"
				@click="addStrategy('1w')"
				:class="active?.includes('1w' as never) ? 'active' : ''"
			>
				1 w</span
			>
			<span
				class="time-pill"
				@click="addStrategy('1m')"
				:class="active?.includes('1m' as never) ? 'active' : ''"
				>1 month</span
			>
		</div>
	</div>
</template>

<script lang="ts">
import { db } from "@/main";
import { arrayUnion, doc, getDoc, setDoc, updateDoc } from "firebase/firestore/lite";
import { defineComponent } from "vue";

export default defineComponent({
	name: "product",
	props: ["title"],

	data() {
		return {
			detailsShown: false,
			active: [],
		};
	},

	methods: {
		showDetails() {
			this.detailsShown = !this.detailsShown;
		},
		async addStrategy(key: string) {
			!(this.active?.length > 0)
				? (this.active = [key as never])
				: this.active.push(key as never);
			const strategiesDoc = doc(
				db,
				`users/${this.$store.state.user?.uid}/strategies/${this.$props.title}`
			);
			const strategies = await getDoc(strategiesDoc);
			if (strategies.data()?.timeIntervals) {
				await updateDoc(strategiesDoc, {
					timeIntervals: arrayUnion(key),
				});
			} else if (!strategies.data()?.timeIntervals) {
				await setDoc(strategiesDoc, {
					timeIntervals: arrayUnion(key),
				});
			}
		},

		async getStrategies() {
			const strategiesDoc = doc(
				db,
				`users/${this.$store.state.user?.uid}/strategies/${this.$props.title}`
			);
			const strategiesData = await getDoc(strategiesDoc);
			this.active = strategiesData.data()?.timeIntervals;
		},
	},

	mounted() {
		this.getStrategies();
	},
});
</script>

<style>
.time-pill {
	@apply text-xl text-[#B7C7FF] font-semibold bg-[#162349] px-8 py-2 inline-block rounded-lg cursor-pointer;
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
.active {
	@apply bg-[#676CE7];
}
</style>
