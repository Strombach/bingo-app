const storage = {};

storage.getData = (store) => {
	return JSON.parse(localStorage.getItem(store));
};

storage.setData = (store, data) => {
	localStorage.setItem(store, JSON.stringify(data));
};

export default storage;
