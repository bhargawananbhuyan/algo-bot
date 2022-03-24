<template>
	<div v-show="show">
		<div class="popup-wrapper" ref="popup">
			<div class="popup-content">
				<button class="signin-button" @click="googleAuth">
					<span v-if="authState.loading">Please wait...</span>
					<span v-else>Sign in with Google</span>
				</button>
				<div v-if="authState.error">
					{{ authState.error }}
				</div>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import firebase from "firebase/compat";

export default defineComponent({
	name: "popup",
	data() {
		return {
			authState: {
				loading: false,
				error: "",
			},
		};
	},
	props: ["show"],
	methods: {
		async googleAuth() {
			this.authState = { ...this.authState, loading: true };
			await firebase
				.auth()
				.signInWithPopup(new firebase.auth.GoogleAuthProvider())
				.then((res) => {
					console.log(res.user);
					this.$store.commit("addUser", {
						user: res.user,
					});
					this.authState = { loading: false, error: "" };
					this.$emit("hide-child-event");
				})
				.catch((e) => {
					console.log(e);
					this.authState = { loading: false, error: e.code };
				});
		},
	},
});
</script>

<style scoped>
.popup-wrapper {
	@apply fixed top-0 left-0 h-screen w-screen grid place-items-center z-[100];
}
.popup-content {
	@apply max-w-lg w-full h-[400px] bg-[#222D54] rounded-2xl grid place-items-center after:content-[''] after:h-screen after:w-screen after:fixed after:top-0 after:left-0 after:bg-black after:z-[-1] after:opacity-75 after:blur-sm;
}
.signin-button {
	@apply text-xl font-bold bg-[#676CE7] text-white px-8 pt-3.5 pb-4 rounded-full;
}
</style>
