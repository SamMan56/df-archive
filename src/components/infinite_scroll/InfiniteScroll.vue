<script lang="ts">
import PageWrapper from './PageWrapper.vue';

export default {
    components: {
        PageWrapper: PageWrapper
    },

    data() {
        return {
            keys: [] as string[],
            pages: 0,
            finished: false
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
        },
        finish() {
            this.finished = true;
        }
    },

    props: {
        query: String,
        infinite: Boolean,
        itemType: String,
    }
}
</script>

<template>
    <!-- always start with one 'page' -->
    <PageWrapper
        :query="query"
        :item-type="itemType"
        @next-key="key => keys.push(key)"
        @empty="finish"
    /> 
    <PageWrapper 
        v-if="infinite"
        :query="query"
        :item-type="itemType"
        v-for="(key, index) in useKeys"
        :key="index"
        :last-key="key"
        @next-key="key => keys.push(key)"
        @empty="finish"
    />
    <v-btn v-if="infinite && !finished" variant="flat" color="primary" @click="next()">Load More</v-btn>
    <p v-if="infinite && finished">Nothing more to show!</p>
</template>