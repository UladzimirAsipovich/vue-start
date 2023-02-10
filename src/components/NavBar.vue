<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="navigate">
    <div class="navigate__wrapper">
      <nav class="navigate__bar">
        <RouterLink
          to="/"
          class="navigate__link"
          active-class="navigate__link_active"
        >
          Главная
        </RouterLink>
        <RouterLink
          to="/about"
          class="navigate__link"
          active-class="navigate__link_active"
        >
          Обо мне
        </RouterLink>
        <RouterLink
          to="/task"
          class="navigate__link"
          active-class="navigate__link_active"
        >
          Что по заданию?
        </RouterLink>
      </nav>
    </div>
  </header>
</template>

<style scoped lang="scss">
// VARIABLES NAVIGATE
$navigate__bg_clr: hsl(206, 41%, 27%);
$navigate__p: 1rem;
$navigate__mh: 5rem;
$navigate__txt_clr: #fff;

// VARIABLES LINK
$navigate__link_brdr_rad: 0.25rem;
$navigate__link_p: 0.5rem 1rem;
$navigate__link_bg_hover_clr: hsl(206, 41%, 57%);

.navigate {
  background-color: $navigate__bg_clr;
  padding: $navigate__p;
  min-height: $navigate__mh;
  color: $navigate__txt_clr;
}

.navigate__wrapper {
  max-width: 1280px;
  margin: auto;
}

.navigate__bar {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.navigate__link {
  color: inherit;
  text-decoration: none;
  box-shadow: 2px 2px 4px $navigate__bg_clr;
  border-radius: $navigate__link_brdr_rad;
  border: 1px solid $navigate__txt_clr;
  padding: $navigate__link_p;
  margin-right: 1rem;
  transition: background-color 150ms ease;

  &:hover {
    background-color: $navigate__link_bg_hover_clr;
  }

  &:last-child {
    margin-right: 0;
  }

  &_active {
    background-color: $navigate__link_bg_hover_clr;
  }
}
</style>
