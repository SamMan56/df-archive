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
    <h1 class="title">DiamondFire Forum Archives</h1>
    <a href="#/forums"><v-btn variant="flat" color="blue">Explore</v-btn></a>
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
  height: 100%;
}
</style>
