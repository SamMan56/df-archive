<script lang="ts">
import Categories from './components/forums/Categories.vue';
import Home from './components/home/Home.vue';
import Forum from './components/forum/Forum.vue';
import Thread from './components/thread/Thread.vue';
import Nav from './components/Nav.vue';

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
        };
    },
    computed: {
        currentView() {
            return routes[this.currentPath[0]];
        }
    },
    mounted() {
        window.addEventListener("hashchange", () => {
            this.currentPath = window.location.hash.slice(2).split("/");
        });
    },
    components: { Nav }
}
</script>

<template>
  <v-app>
    <v-app-bar v-if="currentPath[0] !== ''">
        <!-- <a href="#/">Home</a> |
        <a href="#/forums">Forums</a> -->
        <Nav/>
    </v-app-bar>
    <v-main>
      <component :is="currentView" />
    </v-main>
  </v-app>
</template>
