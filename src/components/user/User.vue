<script lang="ts">
import ThreadsViewer from '../threads_viewer/ThreadsViewer.vue';

export default {
    components: {
        ThreadsViewer
    },

    computed: {
        getQuery() {
            const user_id = window.location.hash.slice(2).split("/")[1];
            return `https://europe-west2-df-archive.cloudfunctions.net/userThreads?user_id=${user_id}`;
        }
    },
}
</script>

<template>
    <ThreadsViewer :query="getQuery"/>
</template>