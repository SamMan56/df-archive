<script lang="ts">
import PageWrapper from './PageWrapper.vue';

export default {
    components: {
        PageWrapper: PageWrapper
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
        query: String,
        infinite: Boolean
    }
}
</script>

<template>
    <!-- always start with one 'page' -->
    <PageWrapper :query="query" @next-key="key => keys.push(key)"/> 
    <PageWrapper v-if="infinite" :query="query" v-for="(key, index) in useKeys" :key="index" :last-key="key" @next-key="key => keys.push(key)"/>
    <v-btn v-if="infinite" variant="flat" color="primary" @click="next()">Load More</v-btn>
</template>