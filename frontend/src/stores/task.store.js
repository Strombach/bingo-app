import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTaskStore = defineStore('task', () => {
	const allTasks = ref([]);
	const selectedTask = ref({});

	const selectTask = (newSelection) => {
		selectedTask.value = newSelection;
	};

	const total = computed(() => {
		return allTasks.value
			.filter((task) => task.isDone)
			.reduce((acc, curr) => acc + curr.value, 0);
	});

	const updateTask = () => {
		allTasks.value.forEach((task, index) => {
			if (task._id === selectedTask.value._id) {
				allTasks.value[index].value = Number(selectedTask.value.value);
			}
		});
	};

	return {
		allTasks,
		selectedTask,
		selectTask,
		total,
		updateTask,
	};
});
