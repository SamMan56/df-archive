<script lang="ts">
import ThreadsPageWrapper from './ThreadsPageWrapper.vue';

export default {
    components: {
        ThreadsPageWrapper: ThreadsPageWrapper
    },

    data() {
        return {
            keys: [] as string[],
            pages: 0
        }
    },

    computed: {
        useKeys() {
            return this.keys.slice(0,this.pages);
        }
    },

    methods: {
        next() {
            this.pages++;
        }
    },

    props: {
        query: String
    }
}
</script>

<template>
    <!-- always start with one 'page' -->
    <ThreadsPageWrapper :query="query" @next-key="key => keys.push(key)"/> 
    <ThreadsPageWrapper :query="query" v-for="(key, index) in useKeys" :key="index" :last-key="key" @next-key="key => keys.push(key)"/>
    <v-btn variant="flat" color="primary" @click="next()">Load More</v-btn>
</template>