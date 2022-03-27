<template>
	<div class="max-w-screen-xl mx-auto px-5 mt-[75px] mb-[200px]">
		<div
			v-for="(item, i) in [
				{ title: 'Fibonacci', image: 'chart' },
				{ title: 'Bollinger Band', image: 'transcript' },
				{ title: 'Swing high/low', image: 'select' },
				{ title: 'Support and Resistance', image: 'trending' },
			]"
		>
			<ProductHome
				class="mt-10 cursor-pointer"
				:key="i"
				:title="item.title"
				:image="item.image"
				description="If you want to add some description click here. If you want to add some
						description click here."
			/>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProductHome from "@/components/ProductHome.vue";

export default defineComponent({
	name: "products_page",
	components: { ProductHome },
});
</script>
