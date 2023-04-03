export async function fetchAllTasks() {
	const response = await fetch('http://localhost:4000/tasks');

	return await response.json();
}
