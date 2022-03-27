<template>
	<div
		class="flex items-center border-2 border-[#7277FF] shadow-[0px_0px_60px_0px_#ACAFFF3D] rounded-xl p-5 gap-x-10 bg-[#293668CC] hover:shadow-none transition-all"
	>
		<div class="w-[175px] h-[175px] grid place-items-center bg-[#344482] rounded-xl">
			<img :src="_image" alt="" class="w-[100px] h-auto" />
		</div>

		<section class="flex flex-col gap-5">
			<h1 class="text-[#BECCFF] text-4xl font-bold">{{ title }}</h1>
			<p class="text-xl font-medium text-[#AFC1FF8F]">
				{{ description }}
			</p>
		</section>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
	name: "product_home",
	props: ["image", "title", "description"],
	computed: {
		_image() {
			return `/${this.$props.image}.png`;
		},
	},
});
</script>
