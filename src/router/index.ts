import { getAuth, onAuthStateChanged } from "firebase/auth";
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
	history: createWebHistory(import.meta.env.BASE_URL),
	routes: [
		{
			path: "/",
			name: "home",
			component: HomeView,
		},
		{
			path: "/profile",
			name: "profile",
			component: () => import("../views/ProfileView.vue"),
			meta: {
				requiresAuth: true,
			},
		},
	],
});

router.beforeEach(async (to, _, next) => {
	if (to.matched.some((record) => record.meta.requiresAuth)) {
		if (
			await new Promise((resolve, reject) => {
				onAuthStateChanged(getAuth(), (user) => resolve(user), reject);
			})
		)
			next();
		else next({ path: "/" });
	} else next();
});

export default router;
