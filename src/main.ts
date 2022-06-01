import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		firstWord: 'STAIR'
	}
});

export default app;