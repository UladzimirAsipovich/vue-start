<template>
  <div class="logo">
    <span class="logo__char char_blue">T</span>
    <span class="logo__char char_red">O</span>
    <span class="logo__char char_yellow char_translated">G</span>
    <span class="logo__char char_blue char_translated">G</span>
    <span class="logo__char char_red">L</span>
    <span class="logo__char char_yellow">E</span>
  </div>
</template>

<script lang="ts">
export default {
  name: "LogoTemp",
};
</script>

<style scoped>
.logo {
  text-transform: uppercase;
  font-family: "Century Gothic", Roboto, system-ui, -apple-system, sans-serif;
  font-weight: 900;
  font-size: 5.5rem;
  text-align: center;
  margin-bottom: 1rem;
  user-select: none;
}

@media screen and (max-width: 385px) {
  .logo {
    font-size: 4.5rem;
  }
}

.char_blue {
  color: blue;
}

.char_red {
  color: red;
}

.char_yellow {
  color: gold;
}

.char_translated {
  display: inline-block;
  transform: rotate(-45deg);
}
</style>
