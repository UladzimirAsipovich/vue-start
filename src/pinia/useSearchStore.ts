import { defineStore } from "pinia";
import { ref } from "vue";
import axios from "axios";
import type { Ref } from "vue";
import type { I_Card } from "@/interfaces/I_Card";

type I_Response = I_Card[];

const useCounterStore = defineStore("counter", () => {
  const cardsArray: Ref<I_Response[]> = ref([]);
  const isLoading: Ref<boolean> = ref(false);

  const addSearchCard = async (searchParam: string) => {
    if (isLoading.value) return;
    try {
      isLoading.value = true;
      const response = await axios.get<I_Response[]>(
        "https://nominatim.openstreetmap.org/search",
        {
          params: {
            q: searchParam,
            format: "json",
            limit: [],
          },
          headers: { "X-Requested-With": "XMLHttpRequest" },
        }
      );
      cardsArray.value = response.data;
    } catch (error) {
      console.log(error);
      alert(error);
    } finally {
      isLoading.value = false;
    }
  };

  // onMounted(addSearchCard);

  return { cardsArray, isLoading, addSearchCard };
});

export default useCounterStore;
