<script setup lang="ts">
// get id from router
import { useRoute } from "vue-router";
import { onMounted, ref, type Ref } from "vue";
import {
  useMonstersStore,
  type DetailsMonsterType,
} from "@/stores/useMonstersStore";

const route = useRoute();

const monstersStore = useMonstersStore();
const monsterId = route.params.id as string;

const monster: Ref<DetailsMonsterType | null> = ref(null);

onMounted(async () => {
  monster.value = (await monstersStore.fetchMonster(monsterId)) ?? null;
});
</script>

<template>
  <main>
    <!-- About Start -->
    <div v-if="monster" class="container-fluid py-5">
      <div class="container">
        <div class="row gx-5">
          <div class="col-lg-5 mb-5 mb-lg-0" style="min-height: 500px">
            <div class="position-relative h-100">
              <img
                class="position-absolute w-100 h-100 rounded"
                :src="monster.image"
                style="object-fit: cover"
                :alt="monster.name"
              />
            </div>
          </div>
          <div class="col-lg-7">
            <div class="border-start border-5 border-primary ps-5 mb-5">
              <h6 class="text-primary text-uppercase">
                {{ monster.category }}
              </h6>
              <h1 class="display-5 text-uppercase mb-0">{{ monster.name }}</h1>
            </div>
            <h4 class="text-body mb-4">{{ monster.description }}</h4>

            <div class="border-start border-5 border-primary ps-5 mb-5">
              <h6 class="text-primary text-uppercase">DROPS</h6>
              <ul>
                <li v-for="drop in monster.drops" :key="drop">{{ drop }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
