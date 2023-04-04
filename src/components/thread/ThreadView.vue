<script lang="ts">
import InfiniteScroll from '../infinite_scroll/InfiniteScroll.vue';
import ThreadTitle from './ThreadTitle.vue';

export default {
    components: {
        ThreadTitle,
        InfiniteScroll
    },

    computed: {
        getQuery() {
            const threadId = window.location.hash.slice(2).split("/")[1];
            return `https://europe-west2-df-archive.cloudfunctions.net/getPosts?thread_id=${threadId}`;
        }
    },
}
</script>

<template>
    <Suspense>
        <ThreadTitle/>
        <template #fallback>
            <div></div>
        </template>
    </Suspense>
    <InfiniteScroll :query="getQuery"/>
</template>