<script lang="ts">
import HeadCarosel from './HeadCarosel.vue';

export default {
    mounted() {
        document.title = "DiamondFire Archive";
    },
    components: { HeadCarosel }
}
</script>

<template>
  <HeadCarosel/>
  <div class="content">
    <h1 class="title text-center">DiamondFire Forum Archives</h1>
    <div class="text-center"><a href="#/forums"><v-btn variant="flat" color="primary">Explore</v-btn></a></div>
    <div class="text-center"><a href="#/convert"><v-btn variant="flat" color="primary">Convert URL</v-btn></a></div>
  </div>
</template>

<style scoped>
.title {
  padding-bottom: 1rem;
}

.content {
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;
  height: 100%;
}
</style>
