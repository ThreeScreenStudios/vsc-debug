<template>
	<div class="hello">
		<h1>{{ msg }}</h1>

		<button @click="incrementCounter">
			Test Debugger
		</button>

		<div style="margin-top:5px;">{{counter}}</div>
	</div>
</template>

<script lang="ts" src="./HelloWorld.ts">
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
	margin: 40px 0 0;
}
ul {
	list-style-type: none;
	padding: 0;
}
li {
	display: inline-block;
	margin: 0 10px;
}
a {
	color: #42b983;
}
</style>
