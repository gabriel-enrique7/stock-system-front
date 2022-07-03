<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import '@/css/form.css';

export default defineComponent({
  name: 'App'
});
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  background-color: #2E2D2E;
}
</style>