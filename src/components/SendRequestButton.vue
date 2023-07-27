<template>
  <div class="buttonWrapper">
    <button @click="onClick">{{ $t('button_text') }}</button>
  </div>
</template>

<script>
export default {
  name: 'SendRequestButton',
  methods: {
    onClick() {
      this.$emit('clicked');
    }
  }
}
</script>

<style scoped>
button {
	box-shadow: 0px 10px 14px -7px #634133;
	background:linear-gradient(to bottom, #EECD7A 5%, #B86F52 100%);
	background-color:#EECD7A;
	border-radius:8px;
	display:inline-block;
	cursor:pointer;
	color:#ffffff;
	font-size:20px;
	font-weight:bold;
	padding:13px 32px;
	text-decoration:none;
	text-shadow:0px 1px 0px #392A16;
}
button:hover {
	background:linear-gradient(to bottom, #B86F52 5%, #EECD7A 100%);
	background-color:#231C07;
}
button:active {
	position:relative;
	top:1px;
}

</style>
