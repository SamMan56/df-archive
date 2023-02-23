<script lang="ts">
import Categories from './components/forums/Categories.vue';
import Home from './components/home/Home.vue';
import Forum from './components/forum/Forum.vue';
import Thread from './components/thread/Thread.vue';

const routes: { [key: string]: any } = {
  "": Home,
  "forums": Categories,
  "forum": Forum,
  "thread": Thread
}

export default {
  data() {
    return {
      currentPath: window.location.hash.slice(2).split("/")
    }
  },
  computed: {
    currentView() {
      return routes[this.currentPath[0]];
    }
  },
  mounted() {
    window.addEventListener('hashchange', () => {
		  this.currentPath = window.location.hash.slice(2).split("/")
		})
  }
}
</script>

<template>
  <div v-if="currentPath[0] !== ''">
    <a href="#/">Home</a> |
    <a href="#/forums">Forums</a>
  </div>
  <component :is="currentView" />
</template>
