import { reactive } from 'vue';
import { io } from 'socket.io-client';

export const state = reactive({
	connected: false,
	fooEvents: [],
	barEvents: [],
});

const URL = 'http://localhost:4000';

export const socket = io(URL, { transports: ['websocket'] });

socket.on('connect', () => {
	state.connected = true;
});

socket.on('disconnect', () => {
	state.connected = false;
});

socket.on('heartbeat', (msg) => {
	setTimeout(function () {
		socket.emit('heartbeat');
	}, 15000);
});
socket.emit('heartbeat');
