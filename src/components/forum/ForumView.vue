<script lang="ts">
import InfiniteScroll from '../infinite_scroll/InfiniteScroll.vue';
import ForumTitle from './ForumTitle.vue';

export default {
    components: {
        ForumTitle,
        InfiniteScroll
    },

    computed: {
        getQuery() {
            const forum_id = window.location.hash.slice(2).split("/")[1];
            return `https://europe-west2-df-archive.cloudfunctions.net/getThreads?forum_id=${forum_id}`;
        }
    },
}
</script>

<template>
    <Suspense>
        <ForumTitle/>
        <template  #fallback>
            <div></div>
        </template>
    </Suspense>
    <InfiniteScroll :query="getQuery" infinite/>
</template>