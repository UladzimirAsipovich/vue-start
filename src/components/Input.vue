<template>
  <input :value="modelValue" @input="updateInput" type="text" class="input" />
</template>

<script lang="ts">
export default {
  name: "InputTemplate",
  props: {
    modelValue: {
      type: [String],
    },
  },
  methods: {
    updateInput(e: Event) {
      this.$emit("update:modelValue", (e.target as HTMLInputElement).value);
    },
  },
};
</script>

<style scoped>
.input {
  box-shadow: 2px 2px 4px #ccc;
}
</style>
