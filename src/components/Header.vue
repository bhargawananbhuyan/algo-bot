<template>
	<header
		class="flex text-[#AFC1FF] justify-between items-center py-14 max-w-screen-xl mx-auto px-5"
	>
		<router-link to="/" class="text-5xl font-bold">logo.</router-link>

		<nav class="text-xl font-bold flex gap-x-[75px]">
			<router-link to="/">Home</router-link>
			<router-link to="/pricing">Pricing</router-link>
		</nav>

		<div v-if="user">
			<div class="flex items-center gap-3.5">
				<router-link to="/profile" class="text-xl font-bold">{{ user?.email }}</router-link>
				<div class="bg-[#86A1FF] h-[42px] w-[42px] grid place-items-center rounded-full">
					<img src="@/assets/avatar.png" alt="" class="w-[16px] h-auto" />
				</div>
			</div>
		</div>
		<button
			v-else
			@click="showPopup"
			class="bg-[#676CE7] text-[18px] font-medium px-8 py-3 mt-2 text-white rounded-full shadow-[0px_0px_30px_0px_#5F82FF] hover:shadow-none transition-all self-start"
		>
			Sign in
		</button>
	</header>

	<PopupVue :show="popupShown" @hide-child-event="hide" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PopupVue from "./Popup.vue";

export default defineComponent({
	data() {
		return {
			popupShown: false,
		};
	},
	methods: {
		showPopup() {
			this.popupShown = true;
		},
		hide() {
			this.popupShown = false;
		},
	},
	computed: {
		user() {
			return this.$store.state.user;
		},
	},
	components: {
		PopupVue,
	},
});
</script>
