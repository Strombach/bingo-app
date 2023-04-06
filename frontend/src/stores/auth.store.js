import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import storage from './localStorage.store';

export const useUserStore = defineStore('user', () => {
	const user = ref(storage.getData('user')) || ref({});

	const updateUser = (newUser) => {
		user.value = newUser;

		storage.setData('user', newUser);
	};

	const logoutUser = (logoutUser) => {
		const logoutJWT = logoutUser.JWT;

		if (user.value.JWT === logoutJWT) {
			storage.setData('user', {});
		}
	};

	return {
		user,
		updateUser,
		logoutUser,
	};
});
