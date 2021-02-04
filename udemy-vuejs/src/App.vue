<template>
  <div id="app">
    <h2>イベントのフォーム</h2>
    <label for="title">タイトル</label>
    <input type="text" id="title" v-model="eventData.title">
  </div>
</template>

<script>
export default {
	name: 'App',
	data() {
		return {
			number: 14,
			currentComponent: 'Home',
			eventData: {
				title: 'タイトル',
			},
		};
	},
};
</script>

<style>
#app {
	font-family: Avenir, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
}
</style>
