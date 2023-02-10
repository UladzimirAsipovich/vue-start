<template>
  <small class="badge">
    <slot></slot>
  </small>
</template>

<script lang="ts">
export default {
  name: "BadgeComp",
};
</script>

<style scoped lang="scss">
.badge {
  display: inline-flex;
  border: 1px solid #ccc;
  border-radius: 1rem;
  overflow: hidden;
  margin-right: 0.5rem;
  user-select: none;
  margin-bottom: 0.5rem;
}
</style>
