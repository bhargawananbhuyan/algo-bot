<template>
	<header
		class="flex text-[#AFC1FF] justify-between items-center py-14 max-w-screen-xl mx-auto px-5"
	>
		<router-link to="/" class="text-5xl font-bold">logo.</router-link>
		<nav class="text-xl font-bold flex gap-x-[75px]">
			<router-link to="/">Home</router-link>
			<router-link to="/pricing">Pricing</router-link>
			<router-link to="/pricing">How it works?</router-link>
			<router-link to="/profile" v-show="isPaid && user">Dashboard</router-link>
		</nav>
		<div v-if="user">
			<div class="flex items-center gap-3.5 relative">
				<div
					class="bg-[#86A1FF] h-[42px] w-[42px] grid place-items-center rounded-full cursor-pointer"
					@click="toggleUserNav"
				>
					<img src="@/assets/avatar.png" alt="" class="w-[16px] h-auto" />
				</div>

				<nav
					v-show="showUserNav"
					class="absolute bg-[#222D54] top-12 -left-20 text-lg p-5 w-[200px] flex flex-col text-center gap-5 rounded-xl font-semibold transition-all"
				>
					<router-link to="/profile" v-show="isPaid && user">Dashboard</router-link>
					<button
						class="bg-red-500 text-white font-semibold py-2.5 shadow-xl rounded-md"
						@click="logOut"
					>
						Log out
					</button>
				</nav>
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
import { db } from "@/main";
import { getAuth, signOut } from "@firebase/auth";
import Axios from "axios";
import { doc, getDoc } from "firebase/firestore/lite";
import { defineComponent } from "vue";
import PopupVue from "./Popup.vue";

export default defineComponent({
	data() {
		return {
			popupShown: false,
			isPaid: false,
			showUserNav: false,
		};
	},
	methods: {
		showPopup() {
			this.popupShown = true;
		},
		hide() {
			this.popupShown = false;
		},
		async getPaymentStatus() {
			const docRef = await getDoc(doc(db, "users", `${this.$store.state.user?.uid}`));
			const data = docRef.data();
			if (data) {
				const res = await Axios.post(
					"http://localhost:5000/api/checkout/checkPaymentStatus",
					{
						subscriptionId: data.subscription_id,
					}
				);
				if (res.data.paymentStatus === "paid") {
					this.isPaid = true;
				} else {
					this.isPaid = false;
				}
			}
		},
		async logOut() {
			await signOut(getAuth())
				.then(() => {
					console.log("signed out successfully");
					this.$store.commit("removeUser");
					this.$router.replace("/");
					window.location.reload();
				})
				.catch((e) => console.error(e));
		},
		toggleUserNav() {
			this.showUserNav = !this.showUserNav;
		},
	},
	mounted() {
		this.getPaymentStatus();
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
