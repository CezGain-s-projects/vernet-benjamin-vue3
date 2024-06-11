<script setup lang="ts">
import type { MonsterType } from "@/stores/useMonstersStore";
import { defineProps } from "vue";
import { RouterLink } from "vue-router";

defineProps<{
  monster: MonsterType;
}>();
</script>

<template>
  <div class="d-flex overflow-hidden mb-3 bg-light">
    <img
      class="img-fluid"
      :src="monster.image"
      style="width: 100px; height: 100px; object-fit: cover"
      alt=""
    />
    <RouterLink
      :to="`/details/${monster._id}`"
      class="h5 d-flex align-items-center bg-light px-3 mb-0"
    >
      {{ monster.name }}
    </RouterLink>
  </div>
</template>
