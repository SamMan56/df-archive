<script lang="ts">
import { ForumKey } from '../../types';
import ForumTitle from './ForumTitle.vue';
import ForumView from './ForumView.vue';
import ForumViewWrapper from './ForumViewWrapper.vue';

export default {
    components: {
        ForumView,
        ForumTitle,
        ForumViewWrapper
    },

    data() {
        return {
            keys: [] as ForumKey[],
            pages: 0
        }
    },

    computed: {
        useKeys() {
            return this.keys.slice(0,this.pages);
        }
    },

    mounted() {
        // replaced by forum title in suspense
        document.title = "Loading Forum..."
    },

    methods: {
        next() {
            console.log(this.useKeys);
            this.pages++;
        }
    }
}
</script>

<template>
    <Suspense>
        <ForumTitle/>
        <template  #fallback>
            <div></div>
        </template>
    </Suspense>
    <!-- always start with one 'page' -->
    <ForumViewWrapper @next-key="key => keys.push(key)"/> 
    <ForumViewWrapper v-for="(key, index) in useKeys" :key="index" :last-key="key" @next-key="key => keys.push(key)"/>
    <v-btn variant="flat" color="primary" @click="next()">Load More</v-btn>
</template>