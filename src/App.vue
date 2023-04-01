<script lang="ts">
import Categories from './components/forums/Categories.vue';
import Home from './components/home/Home.vue';
import Forum from './components/forum/Forum.vue';
import Thread from './components/thread/Thread.vue';
import Nav from './components/Nav.vue';
import Random from './components/random/Random.vue';

const routes: { [key: string]: any } = {
  "": Home,
  "forums": Categories,
  "forum": Forum,
  "thread": Thread,
  "random": Random
}

export default {
    data() {
        return {
            currentPath: window.location.hash.slice(2).split("/"),
            key: Math.round(Math.random() * 1000)
        };
    },
    computed: {
        currentView() {
            return routes[this.currentPath[0]];
        }
    },
    mounted() {
        window.addEventListener("hashchange", () => {
            window.scrollTo(0, 0); // always start at top of page
            this.currentPath = window.location.hash.slice(2).split("/");
            this.key = Math.round(Math.random() * 1000); // randomise key to force a reload
        });
    },
    components: { Nav }
}
</script>

<template>
  <v-app>
    <v-app-bar v-if="currentPath[0] !== ''">
        <Nav/>
    </v-app-bar>
    <v-main>
      <component :key="key" :is="currentView" />
    </v-main>
  </v-app>
</template>
