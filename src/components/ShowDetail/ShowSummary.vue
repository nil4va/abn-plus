<template>
  <p class="show-summary" v-html="summary || 'No summary available.'"></p>
</template>

<script setup lang="ts">
defineProps<{ summary: string | null }>()
</script>

<style scoped>
.show-summary {
  color: #e0e0e0;
  line-height: 1.6;
}
</style>
