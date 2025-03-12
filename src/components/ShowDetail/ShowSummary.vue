<template>
  <p class="show-summary" v-html="summary"></p>
</template>

<script setup lang="ts">
defineProps<{ summary: string }>()
</script>

<style scoped>
.show-summary {
  color: #e0e0e0;
  line-height: 1.6;
}
</style>
