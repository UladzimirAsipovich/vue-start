<template>
  <div class="search-cards" v-if="cardsArray.length">
    <header class="search-cards__header">
      <h2>Результатов найдено: {{ cardsArray.length }}</h2>
    </header>
    <transition-group name="search-list">
      <Card v-for="card in cardsArray" :card="card" :key="card.osm_id" />
    </transition-group>
  </div>
  <div v-if="!cardsArray.length && !spinner" class="search-cards__helper">
    Здесь будут отображаться результаты поиска
  </div>
  <div class="search-cards__spinner" v-if="spinner">Идёт загрузка...</div>
</template>

<script lang="ts">
import Card from "@/components/Card.vue";
import type { I_Card } from "@/interfaces/I_Card";
import type { PropType } from "vue";
export default {
  components: {
    Card,
  },
  props: {
    cardsArray: {
      type: Array as PropType<I_Card[]>,
      required: true,
    },
    spinner: {
      type: Boolean,
      required: false,
    },
  },
};
</script>

<style scoped lang="scss">
.search-cards {
  user-select: none;
  overflow-y: visible;
  max-width: 1280px;
  margin: auto;

  &__header {
    margin-bottom: 1rem;
  }

  &__helper {
    text-align: center;
    color: #ccc;
  }

  &__spinner {
    text-align: center;
    color: #222;
    animation: spinner 500ms infinite alternate;
  }
}

@keyframes spinner {
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
}

.search-list-enter-active,
.search-list-leave-active {
  transition: all 0.5s ease;
}

.search-list-enter-from,
.search-list-leave-to {
  opacity: 0;
  transform: translateX(19px);
}
</style>
