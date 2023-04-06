import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTaskStore = defineStore('task', () => {
	const allTasks = ref([]);
	const selectedTask = ref({});

	const selectTask = (newSelection) => {
		selectedTask.value = newSelection.value;
	};

	return {
		allTasks,
		selectedTask,
		selectTask,
	};
});
