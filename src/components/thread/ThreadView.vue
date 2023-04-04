<script lang="ts">
import InfiniteScroll from '../infinite_scroll/InfiniteScroll.vue';
import ForumTitle from './ThreadTitle.vue';

export default {
    components: {
        ForumTitle,
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
        <ForumTitle/>
        <template  #fallback>
            <div></div>
        </template>
    </Suspense>
    <InfiniteScroll :query="getQuery"/>
</template>