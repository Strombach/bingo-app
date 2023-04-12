import { ref } from 'vue';
import { defineStore } from 'pinia';

export const useValuesStore = defineStore('values', () => {
	const values = ref({});

	const fetchValues = async (JWT) => {
		const res = await fetch('http://localhost:4000/api/values', {
			method: 'GET',
			headers: {
				Authorization: `Bearer ${JWT}`,
				'Content-Type': 'application/json',
			},
		});

		const json = await res.json();
		values.value = json;
	};

	return {
		values,
		fetchValues,
	};
});
