<template>
  <header>
    <Logo />
    <SearchPanel @create="SearchStore.addSearchCard" />
  </header>
  <CardList
    :cardsArray="(SearchStore.cardsArray as unknown as I_Card[])"
    :spinner="SearchStore.isLoading"
  />
</template>

<script lang="ts">
import Logo from "@/components/Logo.vue";
import SearchPanel from "@/components/SearchPanel.vue";
import CardList from "@/components/CardList.vue";
import useSearchStore from "@/pinia/useSearchStore";
import type { I_Card } from "@/interfaces/I_Card";

export default {
  components: {
    Logo,
    SearchPanel,
    CardList,
  },
  setup() {
    const SearchStore = useSearchStore();
    return {
      SearchStore,
    };
  },
  created() {
    document.title = "Vladimir Osipovich";
  },
};
</script>

<style scoped></style>
