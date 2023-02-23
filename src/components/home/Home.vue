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
  <h1 class="title">DiamondFire Forum Archives</h1>
  <a href="#/forums"><v-btn variant="flat" color="blue">Explore</v-btn></a>
</template>

<style scoped>
.title {
  padding-bottom: 1rem;
}
</style>
