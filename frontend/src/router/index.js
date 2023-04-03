import { createWebHistory, createRouter } from 'vue-router';
import Bingo from '../views/Home.vue';
import Login from '../views/Login.vue';
import storage from '../stores/localStorage.store';

const routes = [
	{
		path: '/login',
		name: 'Login',
		component: Login,
		meta: {
			requiresGuest: true,
		},
	},
	{
		path: '/',
		name: 'Bingo',
		component: Bingo,
		meta: {
			requiresAuth: true,
		},
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

router.beforeEach((to, from, next) => {
	const requiresAuth = to.matched.some((x) => x.meta.requiresAuth);
	const requiresGuest = to.matched.some((x) => x.meta.requiresGuest);

	const store = storage.getData('user');

	const isLoggedIn = store?.loginStatus || false;

	if (requiresAuth && !isLoggedIn) {
		next({ name: 'Login' });
	} else if (requiresGuest && isLoggedIn) {
		next({ name: 'Bingo' });
	} else {
		next();
	}
});

export default router;
