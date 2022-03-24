import "firebase/auth";
import type { User } from "firebase/auth";
import firebase from "firebase/compat/app";
import { createApp, type App as VueApp } from "vue";
import { createStore, Store } from "vuex";
import App from "./App.vue";
import router from "./router";
import "./styles/index.css";
import VuexPersistence from "vuex-persist";

const firebaseConfig = {
	apiKey: "AIzaSyBYXdtbzFezBMQVHMRFJDxlF1XfUJgzuFk",
	authDomain: "algo-bot-2f2ac.firebaseapp.com",
	projectId: "algo-bot-2f2ac",
	storageBucket: "algo-bot-2f2ac.appspot.com",
	messagingSenderId: "24070889161",
	appId: "1:24070889161:web:947f2b6b58a59c92d93718",
};

firebase.initializeApp(firebaseConfig);

const app: VueApp = createApp(App);

declare module "@vue/runtime-core" {
	interface State {
		user?: User;
	}
	interface ComponentCustomProperties {
		$store: Store<State>;
	}
}

const store = createStore({
	state: {
		user: null,
	},
	mutations: {
		addUser(state: any, payload: any) {
			state.user = payload.user;
		},
		removeUser(state: any) {
			state.user = null;
		},
	},
	plugins: [new VuexPersistence().plugin],
});

app.use(router);
app.use(store);

app.mount("#app");
