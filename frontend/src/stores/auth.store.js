import { ref, computed } from 'vue';
import { defineStore } from 'pinia';
import storage from './localStorage.store';

export const useUserStore = defineStore('user', () => {
	const user = ref(storage.getData('user')) || ref({});

	const updateUser = (newUser) => {
		user.value = newUser;

		console.log(newUser);
		storage.setData('user', newUser);
	};

	return {
		user,
		updateUser,
	};
});
