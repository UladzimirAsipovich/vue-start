<template>
  <div class="search-panel">
    <InputTemplate
      v-model.trim="inputValue"
      class="search-panel__input"
      type="text"
      placeholder="Введите поисковый запрос"
      @keyup="enterKeyPress"
      v-focus
    />
  </div>
</template>

<script lang="ts">
import InputTemplate from "@/components/Input.vue";

export default {
  components: {
    InputTemplate,
  },
  data() {
    return {
      inputValue: "",
      debounce: null as null | any,
    };
  },
  methods: {
    enterKeyPress(e: KeyboardEvent) {
      if (!this.inputValue) return;

      if (!this.debounce) {
        this.debounce = setTimeout(() => {
          clearTimeout(this.debounce as number);
          this.debounce = null;
          this.$emit("create", this.inputValue);
          // console.log(e.key);
        }, 1000);
      }

      if (e.key === "Enter") {
        this.$emit("create", this.inputValue);
        this.inputValue = "";
      }
    },
  },
};
</script>

<style scoped>
.search-panel {
  margin-bottom: 2rem;
}

.search-panel__input {
  padding: 1rem 1.5rem;
  border-radius: 0.5rem;
  border: 1px solid #ccc;
  display: block;
  width: 100%;
  max-width: 60%;
  margin: auto;
}

@media screen and (max-width: 385px) {
  .search-panel__input {
    max-width: 100%;
  }
}
</style>
