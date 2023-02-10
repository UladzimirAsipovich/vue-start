<template>
  <div class="search-card">
    <header class="search-card__header">
      <div class="clearfix">
        <img
          v-if="card.icon"
          :src="card.icon"
          :alt="card.display_name"
          class="search-card__icon"
        />
        <h2>{{ card.display_name }}</h2>
      </div>
    </header>
    <div class="search-card__content">{{ card.body }}</div>
    <footer>
      <Badge>
        <span class="badge_f">osm_id</span>
        <span class="badge_l">{{ card.osm_id }}</span>
      </Badge>
      <Badge>
        <span class="badge_f">osm_type</span>
        <span class="badge_l">{{ card.osm_type }}</span>
      </Badge>
      <Badge>
        <span class="badge_f">place_id</span>
        <span class="badge_l">{{ card.place_id }}</span>
      </Badge>
      <Badge>
        <span class="badge_f">lat</span>
        <span class="badge_l">{{ card.lat }}</span>
      </Badge>
      <Badge>
        <span class="badge_f">lon</span>
        <span class="badge_l">{{ card.lon }}</span>
      </Badge>
    </footer>
  </div>
</template>

<script lang="ts">
import Badge from "@/components/Badge.vue";
export default {
  name: "CardItem",
  components: {
    Badge,
  },
  props: {
    card: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.search-card {
  padding: 1rem 1rem 0.5rem 1rem;
  background-color: hsl(0, 0%, 98%);
  border: 1px solid hsl(0, 0%, 75%);
  border-radius: 1.25rem;
  margin-bottom: 1rem;
  transition: border-color, box-shadow 150ms ease;
  font-family: system-ui;
  user-select: none;

  &:hover {
    border-color: hsl(103, 34%, 53%);
    box-shadow: 2px 2px 8px #ccc;
  }

  &__icon {
    float: left;
    margin-right: 0.5rem;
  }

  &:last-child {
    margin-bottom: 0;
  }

  &__header {
    margin-bottom: 1.5rem;
  }

  &__content {
    margin-bottom: 1rem;
  }
}

.badge_f {
  background-color: #ccc;
}

.badge_f,
.badge_l {
  font-size: 0.75rem;
  padding: 0.25rem 0.5rem;
}
</style>
