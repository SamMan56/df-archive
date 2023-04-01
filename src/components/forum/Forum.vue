<script lang="ts">
import ForumTitle from './ForumTitle.vue';
import ThreadsViewer from '../threads_viewer/ThreadsViewer.vue';

export default {
    components: {
        ForumTitle,
        ThreadsViewer
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
    <ThreadsViewer :query="getQuery"/>
</template>