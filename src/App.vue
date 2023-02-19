<script lang="ts">
import Categories from './components/Categories.vue';
import Home from './components/Home.vue';
import Category from './components/Category.vue';
import Forum from './components/Forum.vue';
import Thread from './components/Thread.vue';

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
