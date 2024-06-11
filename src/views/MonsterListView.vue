<script setup lang="ts">
import Monster from "@/components/Monster.vue";
import { useMonstersStore } from "@/stores/useMonstersStore";
import { onMounted } from "vue";

onMounted(async () => {
  await monstersStore.fetchMonsters(1);
});

const monstersStore = useMonstersStore();
</script>

<template>
  <main>
    <!-- Blog Start -->
    <div class="container py-5">
      <div class="row">
        <!-- Monster list Start -->
        <div class="col">
          <div class="mb-5">
            <h3
              class="text-uppercase border-start border-5 border-primary ps-3"
            >
              Every Monsters
            </h3>
            <h5
              class="text-uppercase border-start border-5 border-primary ps-3 mb-4"
            >
              Page {{ monstersStore.page }}
            </h5>
            <Monster
              v-for="monster in monstersStore.monsters"
              :monster="monster"
              :key="monster._id"
            />
          </div>
          <button
            type="button"
            class="btn btn-outline-success"
            @click="monstersStore.previousPage()"
            :disabled="monstersStore.page <= 1"
          >
            Prev
          </button>
          <button
            type="button"
            class="btn btn-outline-success"
            @click="monstersStore.nextPage()"
            :disabled="monstersStore.monsters.length < 10"
          >
            Next
          </button>
        </div>
        <!-- Monster list End -->
      </div>
    </div>
    <!-- Blog End -->
  </main>
</template>
