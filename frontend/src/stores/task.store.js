import { defineStore } from 'pinia';
import { computed, ref } from 'vue';

export const useTaskStore = defineStore('task', () => {
	const allTasks = ref([]);
	const selectedTask = ref({});

	const selectTask = (newSelection) => {
		selectedTask.value = newSelection;
	};

	const total = (values) => {
		let sum = 0;

		const colTemp = [];
		const rowTemp = [];

		allTasks.value.map((arr) => {
			colTemp.push(checkCol(arr));
		});

		allTasks.value.map((arr, index) => {
			rowTemp.push(checkRow(index));
		});

		colTemp.forEach((col, index) => {
			if (col === true) {
				sum += values.colVal[index];
			}
		});

		rowTemp.forEach((row, index) => {
			if (row === true) {
				sum += values.rowVal[index];
			}
		});

		return sum;
	};

	const updateTask = () => {
		allTasks.value.forEach((task, index) => {
			if (task._id === selectedTask.value._id) {
				allTasks.value[index].value = Number(selectedTask.value.value);
			}
		});
	};

	const createArrayOfArrays = () => {
		let temp = [];
		let store = [];

		allTasks.value.forEach((item) => {
			temp.push(item);

			if (temp.length === 5) {
				store.push(temp);
				temp = [];
			}
		});

		allTasks.value = store;
	};

	const checkCol = (arr) => {
		return !arr.some((k) => !k.isDone);
	};

	const checkRow = (index) => {
		const temp = [];
		const test = allTasks.value.forEach((arr) => {
			temp.push(arr[index]);
		});

		return checkCol(temp);
	};

	return {
		allTasks,
		selectedTask,
		selectTask,
		total,
		updateTask,
		createArrayOfArrays,
		checkCol,
		checkRow,
	};
});
