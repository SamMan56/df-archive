<script lang="ts">
import InfiniteScroll from '../infinite_scroll/InfiniteScroll.vue';
import ForumTitle from './ForumTitle.vue';

export default {
    components: {
        ForumTitle,
        InfiniteScroll
    },

    computed: {
        getThreadsQuery() {
            const forum_id = window.location.hash.slice(2).split("/")[1];
            return `https://europe-west2-df-archive.cloudfunctions.net/getThreads?forum_id=${forum_id}`;
        },
        getPinnedQuery() {
            const forum_id = window.location.hash.slice(2).split("/")[1];
            return `https://europe-west2-df-archive.cloudfunctions.net/getPinned?forum_id=${forum_id}`;
        }
    },
}
</script>

<template>
    <v-container fluid>
        <v-row>
            <v-col/>
            <v-col cols="12" md="10" xl="8">
                <Suspense>
                    <ForumTitle/>
                    <template #fallback>
                        <div></div>
                    </template>
                </Suspense>
                <InfiniteScroll :query="getPinnedQuery"/>
                <br><br>
                <InfiniteScroll :query="getThreadsQuery" infinite/>
            </v-col>
            <v-col/>
        </v-row>
    </v-container>
</template>