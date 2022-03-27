<template>
	<main class="max-w-screen-xl mx-auto px-5">
		<!-- landing -->
		<div class="mt-24 flex justify-between">
			<section class="max-w-[500px] flex flex-col gap-y-8">
				<h1 class="text-6xl w-full font-extrabold hero-text leading-snug">
					Welcome to Trading Alert Bot
				</h1>
				<p class="text-2xl text-[#AFC1FF8F] opacity-[75%] font-medium leading-relaxed">
					some interesting description about bot and functions, what can it do purpose of
					the project and so on
				</p>
				<button
					class="bg-[#676CE7] text-xl font-semibold px-10 pt-3 pb-3.5 text-white rounded-full shadow-[0px_0px_30px_0px_#5F82FF] hover:shadow-none transition-all self-start mt-5"
				>
					Explore
				</button>
			</section>
			<div class="relative">
				<img src="@/assets/hero-logo.png" alt="" class="w-[500px] h-auto -mt-5" />
				<div
					class="w-[300px] h-[300px] bg-[#698AFFCC] opacity-50 absolute bottom-3.5 right-8 rounded-full z-[-1] blur-[50px]"
				></div>
			</div>
		</div>
		<!-- end landing -->

		<!-- logos -->
		<div class="flex items-center justify-center gap-[200px] mt-40 mb-52">
			<a href="https://www.binance.com/en">
				<img src="@/assets/binance-logo.png" alt="" class="h-14 w-auto" />
			</a>
			<a href="https://ftx.com/">
				<img src="@/assets/ftx-logo.png" alt="" class="h-14 w-auto" />
			</a>
		</div>
		<!-- end logos -->

		<!-- how it works -->
		<div class="max-w-lg mx-auto mb-[125px] relative">
			<section class="flex flex-col items-center text-center gap-y-5">
				<h1 class="text-[48px] w-full font-extrabold hero-text">How it works?</h1>
				<p class="text-[24px] text-[#AFC1FF8F] opacity-[75%] font-medium leading-relaxed">
					some interesting description about bot and functions, what can it do purpose of
					the project and so on
				</p>
			</section>
			<img
				src="@/assets/howit.png"
				alt=""
				class="w-[250px] h-auto absolute -top-20 -right-52"
			/>
			<div
				class="w-[175px] h-[175px] bg-[#698AFFCC] opacity-50 absolute bottom-10 -right-56 rounded-full z-[-1] blur-[35px]"
			></div>
		</div>

		<div class="mb-[200px] flex flex-col gap-y-12">
			<ProductHome
				image="chart"
				title="Fibonacci"
				description="If you want to add some description click here. If you want to add some
						description click here."
			/>
			<ProductHome
				image="transcript"
				title="Bollinger Band"
				description="If you want to add some description click here. If you want to add some
						description click here."
			/>
			<ProductHome
				image="select"
				title="Swing high/low"
				description="If you want to add some description click here. If you want to add some
						description click here."
			/>
			<ProductHome
				image="trending"
				title="Support and Resistance"
				description="If you want to add some description click here. If you want to add some
						description click here."
			/>
			<div class="text-right text-xl font-bold text-blue-100 mr-5">
				<router-link to="/products">View all</router-link>
			</div>
		</div>
		<!-- end how it works -->

		<!-- subscription -->
		<div v-show="!isPaid">
			<div class="max-w-xl mx-auto mb-[125px] relative">
				<section class="flex flex-col items-center text-center gap-y-5">
					<h1 class="text-[48px] w-full font-extrabold hero-text">
						Get more features with our subscription!
					</h1>
					<p
						class="text-[24px] text-[#AFC1FF8F] opacity-[75%] font-medium leading-relaxed"
					>
						some interesting description about bot and functions, what can it do purpose
						of the project and so on
					</p>
				</section>
			</div>

			<div class="mb-[175px] grid grid-cols-3 gap-14">
				<div class="subscription-card">
					<h1>Basic</h1>
					<h6>You'll get</h6>
					<ul>
						<li>Some cool stuff</li>
						<li>Some cool stuff</li>
						<li>Some cool stuff</li>
						<li>Some cool stuff</li>
						<li>Some cool stuff</li>
					</ul>
					<button @click="subscribe(`basic`)">Get it</button>

					<img src="@/assets/subscribe.png" alt="" />
					<div />
				</div>
				<div class="subscription-card">
					<h1>Premium</h1>
					<h6>You'll get</h6>
					<ul>
						<li>Some cool stuff</li>
						<li>Some cool stuff</li>
						<li>Some cool stuff</li>
						<li>Some cool stuff</li>
						<li>Some cool stuff</li>
					</ul>
					<button>Get it</button>
				</div>
				<div class="subscription-card">
					<h1 class="">Standard</h1>
					<h6 class="">You'll get</h6>
					<ul class="">
						<li>Some cool stuff</li>
						<li>Some cool stuff</li>
						<li>Some cool stuff</li>
						<li>Some cool stuff</li>
						<li>Some cool stuff</li>
					</ul>
					<button class="">Get it</button>
				</div>
			</div>
		</div>
		<!-- end subscription -->

		<!-- testimonials -->
		<div class="mb-[200px]">
			<div class="flex items-center justify-center">
				<h1
					class="max-w-xl text-[48px] w-full font-extrabold hero-text mb-[120px] text-center"
				>
					What people think about our Bot?
				</h1>
			</div>

			<div class="flex gap-x-12 overflow-x-scroll overflow-y-hidden hide-scrollbar">
				<div
					class="flex flex-col items-center gap-5 text-center bg-[#2E3B73CC] p-10 rounded-2xl flex-shrink-0 w-[350px]"
				>
					<div
						class="bg-[#5767A5] h-[150px] w-[150px] grid place-items-center rounded-full"
					>
						<img src="@/assets/placeholder.png" alt="" class="w-[125px] h-auto" />
					</div>
					<h1 class="text-[#B7C7FF] text-3xl font-bold">Ann</h1>
					<p class="text-[#AFC1FF] text-xl font-semibold leading-relaxed">
						some interesting description about bot and functions, what can it do purpose
						of the project and so on
					</p>
				</div>
				<div
					class="flex flex-col items-center gap-5 text-center bg-[#2E3B73CC] p-10 rounded-2xl flex-shrink-0 w-[350px]"
				>
					<div
						class="bg-[#5767A5] h-[150px] w-[150px] grid place-items-center rounded-full"
					>
						<img src="@/assets/placeholder.png" alt="" class="w-[125px] h-auto" />
					</div>
					<h1 class="text-[#B7C7FF] text-3xl font-bold">Ann</h1>
					<p class="text-[#AFC1FF] text-xl font-semibold leading-relaxed">
						some interesting description about bot and functions, what can it do purpose
						of the project and so on
					</p>
				</div>
				<div
					class="flex flex-col items-center gap-5 text-center bg-[#2E3B73CC] p-10 rounded-2xl flex-shrink-0 w-[350px]"
				>
					<div
						class="bg-[#5767A5] h-[150px] w-[150px] grid place-items-center rounded-full"
					>
						<img src="@/assets/placeholder.png" alt="" class="w-[125px] h-auto" />
					</div>
					<h1 class="text-[#B7C7FF] text-3xl font-bold">Ann</h1>
					<p class="text-[#AFC1FF] text-xl font-semibold leading-relaxed">
						some interesting description about bot and functions, what can it do purpose
						of the project and so on
					</p>
				</div>
				<div
					class="flex flex-col items-center gap-5 text-center bg-[#2E3B73CC] p-10 rounded-2xl flex-shrink-0 w-[350px]"
				>
					<div
						class="bg-[#5767A5] h-[150px] w-[150px] grid place-items-center rounded-full"
					>
						<img src="@/assets/placeholder.png" alt="" class="w-[125px] h-auto" />
					</div>
					<h1 class="text-[#B7C7FF] text-3xl font-bold">Ann</h1>
					<p class="text-[#AFC1FF] text-xl font-semibold leading-relaxed">
						some interesting description about bot and functions, what can it do purpose
						of the project and so on
					</p>
				</div>
				<div
					class="flex flex-col items-center gap-5 text-center bg-[#2E3B73CC] p-10 rounded-2xl flex-shrink-0 w-[350px]"
				>
					<div
						class="bg-[#5767A5] h-[150px] w-[150px] grid place-items-center rounded-full"
					>
						<img src="@/assets/placeholder.png" alt="" class="w-[125px] h-auto" />
					</div>
					<h1 class="text-[#B7C7FF] text-3xl font-bold">Ann</h1>
					<p class="text-[#AFC1FF] text-xl font-semibold leading-relaxed">
						some interesting description about bot and functions, what can it do purpose
						of the project and so on
					</p>
				</div>
			</div>
		</div>
		<!-- end testimonials -->

		<!-- contact -->
		<div class="relative">
			<div class="flex items-center justify-center">
				<h1
					class="max-w-xl text-[48px] w-full font-extrabold hero-text mb-[75px] text-center"
				>
					FAQ
				</h1>
			</div>

			<div class="grid grid-cols-2 place-items-center gap-[100px]">
				<div>
					<h2 class="text-[36px] font-bold hero-text">How the bot works?</h2>
					<p class="text-[21px] font-semibold text-blue-100 leading-loose max-w-sm">
						Our algorithm monitors multiple tickers at a time for specific conditions
						like 1hr support resistance and give alerts accordingly. You don't need to
						keep looking at the screen doing technical analysis, our bot does that for
						you.
					</p>
				</div>
				<div>
					<h2 class="text-[36px] font-bold hero-text">How the bot works?</h2>
					<p class="text-[21px] font-semibold text-blue-100 leading-loose max-w-sm">
						Our algorithm monitors multiple tickers at a time for specific conditions
						like 1hr support resistance and give alerts accordingly. You don't need to
						keep looking at the screen doing technical analysis, our bot does that for
						you.
					</p>
				</div>
				<div>
					<h2 class="text-[36px] font-bold hero-text">How the bot works?</h2>
					<p class="text-[21px] font-semibold text-blue-100 leading-loose max-w-sm">
						Our algorithm monitors multiple tickers at a time for specific conditions
						like 1hr support resistance and give alerts accordingly. You don't need to
						keep looking at the screen doing technical analysis, our bot does that for
						you.
					</p>
				</div>
				<div>
					<h2 class="text-[36px] font-bold hero-text">How the bot works?</h2>
					<p class="text-[21px] font-semibold text-blue-100 leading-loose max-w-sm">
						Our algorithm monitors multiple tickers at a time for specific conditions
						like 1hr support resistance and give alerts accordingly. You don't need to
						keep looking at the screen doing technical analysis, our bot does that for
						you.
					</p>
				</div>
			</div>

			<div class="grid place-items-center absolute top-0 left-0 h-full w-full">
				<div class="relative">
					<img src="@/assets/footer.png" alt="" class="w-[165px] h-auto" />
					<div
						class="w-[200px] h-[200px] bg-[#698AFFCC] opacity-50 absolute top-0 rounded-full z-[-1] blur-[35px]"
					></div>
				</div>
			</div>
		</div>
		<!-- end contact -->

		<div class="my-[150px]">
			<h1
				class="max-w-xl mx-auto text-[48px] w-full font-extrabold hero-text mb-[75px] text-center"
			>
				Contact us
			</h1>
			<div class="grid grid-cols-2 place-items-center">
				<div class="flex items-baseline text-2xl font-bold gap-x-3.5">
					<h2 class="hero-text">Email</h2>
					<div class="text-blue-100">info@technicalanalysisbot.com</div>
				</div>

				<div class="flex items-center gap-5">
					<img src="@/assets/telegram.png" class="w-[45px] h-auto" />
					<img src="@/assets/discord.png" class="w-[45px] h-auto" />
				</div>
			</div>
		</div>
	</main>
</template>

<script lang="ts">
import { db } from "@/main";
import Axios from "axios";
import { doc, getDoc, setDoc, updateDoc } from "firebase/firestore/lite";
import { defineComponent } from "vue";
import ProductHome from "@/components/ProductHome.vue";

export default defineComponent({
	name: "home",
	data() {
		return {
			isPaid: false,
		};
	},
	components: {
		ProductHome,
	},
	methods: {
		async subscribe(id: any) {
			if (!this.$store.state.user) {
				console.log("please sign in!");
				return;
			}

			try {
				const docRef = await getDoc(doc(db, "users", `${this.$store.state.user?.uid}`));
				const data = docRef.data();
				if (data) {
					const res = await Axios.post(
						"http://localhost:5000/api/checkout/checkPaymentStatus",
						{
							subscriptionId: data.subscription_id,
						}
					);
					if (res.data.paymentStatus === "unpaid") {
						const res1 = await Axios.post("http://localhost:5000/api/checkout", {
							lookup_key: id,
						});
						if (res1.data) {
							await updateDoc(doc(db, "users", `${this.$store.state.user?.uid}`), {
								subscription_id: res1.data.subscriptionId,
							});
							window.location.replace(res1.data.url);
						}
					}
				} else {
					const res2 = await Axios.post("http://localhost:5000/api/checkout", {
						lookup_key: id,
					});
					if (res2.data) {
						await setDoc(doc(db, "users", `${this.$store.state.user?.uid}`), {
							user_id: this.$store.state.user?.uid,
							subscription_id: res2.data.subscriptionId,
						});
						window.location.replace(res2.data.url);
					}
				}
			} catch (error) {
				console.error(error);
			}
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
	},
	mounted() {
		this.getPaymentStatus();
	},
});
</script>

<style scoped>
.hero-text {
	background: linear-gradient(
		106.51deg,
		#548cff -10%,
		#698aff 15.14%,
		#7277ff 42.63%,
		#676ce7 74.79%,
		#8588dc 102.27%
	);
	background-clip: text;
	color: transparent;
}
.hide-scrollbar {
	scrollbar-width: none;
	-ms-overflow-style: none;
}
.hide-scrollbar::-webkit-scrollbar {
	display: none;
}
.subscription-card {
	@apply relative flex flex-col items-center border-2 border-[#7277FF] shadow-[0px_0px_35px_0px_#ACAFFF3D] rounded-2xl py-8 px-10 bg-[#293668CC] gap-10;
}
.subscription-card button {
	@apply bg-[#7277FF] px-8 pt-2 pb-2.5 text-white font-semibold text-xl rounded-full shadow-[0px_0px_12px_0px_#5F82FF] hover:shadow-none transition-all;
}
.subscription-card h1 {
	@apply text-[#787DFF] text-4xl font-extrabold;
}
.subscription-card h6 {
	@apply text-[#97AEFF] text-2xl font-bold;
}
.subscription-card ul {
	@apply text-[#B7C7FF] text-2xl font-semibold flex flex-col gap-2.5;
}
.subscription-card img {
	@apply w-[175px] h-auto absolute -left-20 -bottom-20;
}
.subscription-card div {
	@apply w-[175px] h-[175px] bg-[#698AFFCC] opacity-50 absolute -bottom-20 -left-20 rounded-full z-[-1] blur-[20px];
}
</style>
