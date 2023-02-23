<script lang="ts">
import Categories from './components/home/Categories.vue';
import Home from './components/home/Home.vue';
import Category from './components/home/Category.vue';
import Forum from './components/forum/Forum.vue';
import Thread from './components/thread/Thread.vue';

const routes: { [key: string]: any } = {
  "": Home,
  "categories": Categories,
  "category": Category,
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
  <a href="#/">Home</a> |
  <a href="#/categories">Categories</a>
  <component :is="currentView" />
  <p>{{ currentPath }}</p>
</template>
